require('dotenv').config();
const fs = require('fs');
const path = require('path');
const dns = require('dns');
const mongoose = require('mongoose');

// Fix SRV resolution for MongoDB Atlas on Windows
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}

const DATA_DIR = path.join(__dirname, '..', 'data');
const BLOGS_FILE = path.join(DATA_DIR, 'blogs.json');

// Ensure directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const slugify = (text) => {
  return (text || '')
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const calculateReadTime = (content) => {
  if (!content) return '2 min read';
  const text = content.replace(/<[^>]*>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

// No default articles - starts completely empty per user request
const initialSeedBlogs = [];

// Mongoose Blog Schema
const blogSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true, index: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, default: '' },
    content: { type: String, default: '' },
    coverImage: { type: String, default: '' },
    category: { type: String, default: 'Technology', index: true },
    tags: [{ type: String }],
    author: {
      name: { type: String, default: 'Neffto Editorial' },
      role: { type: String, default: 'Contributor' },
      avatar: { type: String, default: '' },
    },
    readTime: { type: String, default: '5 min read' },
    status: { type: String, enum: ['draft', 'published'], default: 'published', index: true },
    featured: { type: Boolean, default: false },
    seo: {
      metaTitle: { type: String, default: '' },
      metaDescription: { type: String, default: '' },
      keywords: { type: String, default: '' },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret.id || ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

let BlogModel;
try {
  BlogModel = mongoose.model('Blog');
} catch {
  BlogModel = mongoose.model('Blog', blogSchema);
}

class BlogStore {
  constructor() {
    this.isMongoConnected = false;
    this.ensureInitialized();
    this.initMongo();
  }

  async initMongo() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.log('ℹ️ MONGODB_URI not set. Using local JSON store.');
      return;
    }

    try {
      await mongoose.connect(uri);
      this.isMongoConnected = true;
      console.log('✅ Connected to MongoDB Atlas successfully!');
    } catch (err) {
      console.warn('⚠️ MongoDB Atlas connection notice:', err.message);
      console.log('ℹ️ Falling back to local JSON store.');
      this.isMongoConnected = false;
    }
  }

  ensureInitialized() {
    try {
      if (!fs.existsSync(BLOGS_FILE)) {
        fs.writeFileSync(BLOGS_FILE, JSON.stringify([], null, 2), 'utf-8');
      }
    } catch (err) {
      console.error('Error initializing blog store:', err);
    }
  }

  readBlogs() {
    try {
      this.ensureInitialized();
      const raw = fs.readFileSync(BLOGS_FILE, 'utf-8');
      const blogs = JSON.parse(raw);
      return Array.isArray(blogs) ? blogs : [];
    } catch (err) {
      console.error('Error reading blogs.json:', err);
      return [];
    }
  }

  writeBlogs(blogs) {
    try {
      fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2), 'utf-8');
      return true;
    } catch (err) {
      console.error('Error writing blogs.json:', err);
      return false;
    }
  }

  async getAll({ status, category, search, limit, page }) {
    if (this.isMongoConnected) {
      try {
        const query = {};
        if (status && status !== 'all') {
          query.status = status;
        }
        if (category && category !== 'all') {
          query.category = { $regex: new RegExp(`^${category}$`, 'i') };
        }
        if (search && search.trim()) {
          const q = search.trim();
          query.$or = [
            { title: { $regex: q, $options: 'i' } },
            { excerpt: { $regex: q, $options: 'i' } },
            { content: { $regex: q, $options: 'i' } },
            { tags: { $in: [new RegExp(q, 'i')] } },
          ];
        }

        const total = await BlogModel.countDocuments(query);
        let findQuery = BlogModel.find(query).sort({ createdAt: -1 });

        if (page && limit) {
          const p = parseInt(page, 10) || 1;
          const l = parseInt(limit, 10) || 10;
          findQuery = findQuery.skip((p - 1) * l).limit(l);
        }

        const docs = await findQuery.exec();
        return { total, blogs: docs.map((d) => d.toJSON()) };
      } catch (e) {
        console.warn('Mongo query failed, using local store fallback:', e.message);
      }
    }

    // Local JSON fallback
    let blogs = this.readBlogs();

    if (status && status !== 'all') {
      blogs = blogs.filter((b) => b.status === status);
    }

    if (category && category !== 'all') {
      blogs = blogs.filter(
        (b) => (b.category || '').toLowerCase() === category.toLowerCase()
      );
    }

    if (search && search.trim()) {
      const q = search.toLowerCase();
      blogs = blogs.filter(
        (b) =>
          (b.title || '').toLowerCase().includes(q) ||
          (b.excerpt || '').toLowerCase().includes(q) ||
          (b.tags && b.tags.some((t) => t.toLowerCase().includes(q))) ||
          (b.content || '').toLowerCase().includes(q)
      );
    }

    blogs.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    const total = blogs.length;
    if (page && limit) {
      const p = parseInt(page, 10) || 1;
      const l = parseInt(limit, 10) || 10;
      const start = (p - 1) * l;
      blogs = blogs.slice(start, start + l);
    }

    return { total, blogs };
  }

  async getBySlug(slug) {
    const cleanSlug = (slug || '').toLowerCase().trim();

    if (this.isMongoConnected) {
      try {
        const doc = await BlogModel.findOne({
          $or: [{ slug: cleanSlug }, { id: cleanSlug }],
        });
        if (doc) return doc.toJSON();
      } catch (e) {
        console.warn('Mongo getBySlug failed, using local fallback:', e.message);
      }
    }

    const blogs = this.readBlogs();
    return blogs.find((b) => b.slug === cleanSlug || b.id === cleanSlug) || null;
  }

  async getById(id) {
    if (this.isMongoConnected) {
      try {
        const doc = await BlogModel.findOne({ id });
        if (doc) return doc.toJSON();
      } catch (e) {
        console.warn('Mongo getById failed, using local fallback:', e.message);
      }
    }

    const blogs = this.readBlogs();
    return blogs.find((b) => b.id === id) || null;
  }

  async create(data) {
    const blogs = this.readBlogs();
    let baseSlug = slugify(data.slug || data.title || 'untitled-post');
    let uniqueSlug = baseSlug;
    let counter = 1;

    // Check slug uniqueness
    if (this.isMongoConnected) {
      while (await BlogModel.exists({ slug: uniqueSlug })) {
        uniqueSlug = `${baseSlug}-${counter++}`;
      }
    } else {
      while (blogs.some((b) => b.slug === uniqueSlug)) {
        uniqueSlug = `${baseSlug}-${counter++}`;
      }
    }

    const newBlog = {
      id: `blog-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      title: data.title || 'Untitled Post',
      slug: uniqueSlug,
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      category: data.category || 'Technology',
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? data.tags.split(',').map((s) => s.trim()).filter(Boolean) : []),
      author: {
        name: data.author?.name || 'Neffto Editorial',
        role: data.author?.role || 'Contributor',
        avatar: data.author?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
      },
      readTime: data.readTime || calculateReadTime(data.content),
      status: data.status === 'draft' ? 'draft' : 'published',
      featured: Boolean(data.featured),
      seo: {
        metaTitle: data.seo?.metaTitle || data.title || '',
        metaDescription: data.seo?.metaDescription || data.excerpt || '',
        keywords: data.seo?.keywords || ''
      },
      content: data.content || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Save to Mongo if connected
    if (this.isMongoConnected) {
      try {
        const doc = await BlogModel.create(newBlog);
        // Also save to local JSON backup
        blogs.unshift(doc.toJSON());
        this.writeBlogs(blogs);
        return doc.toJSON();
      } catch (e) {
        console.error('Failed to create in Mongo, saving to local store:', e.message);
      }
    }

    // Local JSON
    blogs.unshift(newBlog);
    this.writeBlogs(blogs);
    return newBlog;
  }

  async update(id, data) {
    let updatedBlog = null;

    if (this.isMongoConnected) {
      try {
        const existing = await BlogModel.findOne({ id });
        if (existing) {
          let targetSlug = existing.slug;
          if (data.slug && data.slug !== existing.slug) {
            let baseSlug = slugify(data.slug);
            targetSlug = baseSlug;
            let counter = 1;
            while (await BlogModel.exists({ id: { $ne: id }, slug: targetSlug })) {
              targetSlug = `${baseSlug}-${counter++}`;
            }
          }

          existing.title = data.title !== undefined ? data.title : existing.title;
          existing.slug = targetSlug;
          existing.excerpt = data.excerpt !== undefined ? data.excerpt : existing.excerpt;
          existing.coverImage = data.coverImage !== undefined ? data.coverImage : existing.coverImage;
          existing.category = data.category !== undefined ? data.category : existing.category;
          existing.tags = data.tags !== undefined ? (Array.isArray(data.tags) ? data.tags : data.tags.split(',').map((s) => s.trim()).filter(Boolean)) : existing.tags;
          existing.author = { ...existing.author, ...(data.author || {}) };
          existing.readTime = data.readTime || calculateReadTime(data.content !== undefined ? data.content : existing.content);
          existing.status = data.status !== undefined ? data.status : existing.status;
          existing.featured = data.featured !== undefined ? Boolean(data.featured) : existing.featured;
          existing.seo = { ...existing.seo, ...(data.seo || {}) };
          existing.content = data.content !== undefined ? data.content : existing.content;
          existing.updatedAt = new Date();

          await existing.save();
          updatedBlog = existing.toJSON();
        }
      } catch (e) {
        console.error('Mongo update failed:', e.message);
      }
    }

    // Sync to local JSON store
    const blogs = this.readBlogs();
    const index = blogs.findIndex((b) => b.id === id);
    if (index !== -1) {
      const existing = blogs[index];
      let targetSlug = existing.slug;
      if (data.slug && data.slug !== existing.slug) {
        let baseSlug = slugify(data.slug);
        targetSlug = baseSlug;
        let counter = 1;
        while (blogs.some((b) => b.id !== id && b.slug === targetSlug)) {
          targetSlug = `${baseSlug}-${counter++}`;
        }
      }

      const localUpdated = {
        ...existing,
        title: data.title !== undefined ? data.title : existing.title,
        slug: targetSlug,
        excerpt: data.excerpt !== undefined ? data.excerpt : existing.excerpt,
        coverImage: data.coverImage !== undefined ? data.coverImage : existing.coverImage,
        category: data.category !== undefined ? data.category : existing.category,
        tags: data.tags !== undefined ? (Array.isArray(data.tags) ? data.tags : data.tags.split(',').map((s) => s.trim()).filter(Boolean)) : existing.tags,
        author: { ...existing.author, ...(data.author || {}) },
        readTime: data.readTime || calculateReadTime(data.content !== undefined ? data.content : existing.content),
        status: data.status !== undefined ? data.status : existing.status,
        featured: data.featured !== undefined ? Boolean(data.featured) : existing.featured,
        seo: { ...existing.seo, ...(data.seo || {}) },
        content: data.content !== undefined ? data.content : existing.content,
        updatedAt: new Date().toISOString()
      };

      blogs[index] = localUpdated;
      this.writeBlogs(blogs);
      if (!updatedBlog) updatedBlog = localUpdated;
    }

    return updatedBlog;
  }

  async delete(id) {
    let success = false;

    if (this.isMongoConnected) {
      try {
        const res = await BlogModel.deleteOne({ id });
        if (res.deletedCount > 0) success = true;
      } catch (e) {
        console.error('Mongo delete failed:', e.message);
      }
    }

    const blogs = this.readBlogs();
    const index = blogs.findIndex((b) => b.id === id);
    if (index !== -1) {
      blogs.splice(index, 1);
      this.writeBlogs(blogs);
      success = true;
    }

    return success;
  }
}

module.exports = new BlogStore();
