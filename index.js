require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const blogStore = require('./services/blogStore');

// Configure Cloudinary
if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse JSON and urlencoded with generous limits for rich blog content
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Ensure uploads folder exists and serve statically
const UPLOADS_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
app.use('/uploads', express.static(UPLOADS_DIR));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const cleanName = path
      .basename(file.originalname, ext)
      .replace(/[^a-zA-Z0-9_-]/g, '_');
    cb(null, `${cleanName}-${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp|gif|svg\+xml|svg/;
    const ext = path.extname(file.originalname).toLowerCase().replace('.', '');
    const mime = file.mimetype.toLowerCase();
    if (allowed.test(ext) || allowed.test(mime)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files (JPEG, PNG, WebP, GIF, SVG) are allowed'));
    }
  },
});

// Admin Authentication Configuration
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'neffto@admin2026';

// Nodemailer setup
const EMAIL_USER = process.env.EMAIL_USER || 'nefftosolution@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'vkpcreegvxkgthrc';
const EMAIL_TO = process.env.EMAIL_TO || 'nefftosolution@gmail.com';
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const sendMail = async (subject, text, replyTo) => {
  const mailOptions = {
    from: `"Neffto Website" <${EMAIL_USER}>`,
    to: EMAIL_TO,
    replyTo: replyTo || EMAIL_USER,
    subject: subject,
    text: text,
  };
  return transporter.sendMail(mailOptions);
};

// ==========================================
// 1. Existing Forms Endpoints
// ==========================================

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const {
    firstName = '',
    lastName = '',
    jobTitle = 'N/A',
    company = 'N/A',
    email = '',
    phone = 'N/A',
    projectDetails = '',
  } = req.body || {};

  if (!firstName || !email || !projectDetails) {
    return res.status(400).json({
      message: 'Please fill in all required fields (First Name, Email, Project Details).',
    });
  }

  const bodyText = `
You have received a new contact form submission.

Details:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Job Title: ${jobTitle}
Company: ${company}

Project Details:
${projectDetails}
  `;

  try {
    await sendMail(`New Contact Form Submission from ${firstName} ${lastName}`, bodyText, email);
    return res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ message: 'Failed to send email. Check server logs.' });
  }
});

// Quote Form Endpoint (Home Page)
app.post('/api/quote', async (req, res) => {
  const { email = '' } = req.body || {};

  if (!email) {
    return res.status(400).json({ message: 'Please provide an email address.' });
  }

  const bodyText = `
You have received a new quote request from the homepage.

Email: ${email}
  `;

  try {
    await sendMail(`New Quote Request from ${email}`, bodyText, email);
    return res.status(200).json({ message: 'Quote request submitted successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ message: 'Failed to send email. Check server logs.' });
  }
});

// Whitepaper Form Endpoint
app.post('/api/whitepaper', async (req, res) => {
  const { email = '' } = req.body || {};

  if (!email) {
    return res.status(400).json({ message: 'Please provide an email address.' });
  }

  const bodyText = `
A user has subscribed to the whitepaper.

Email: ${email}
  `;

  try {
    await sendMail(`New Whitepaper Subscription from ${email}`, bodyText, email);
    return res.status(200).json({ message: 'Whitepaper subscription successful' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ message: 'Failed to send email. Check server logs.' });
  }
});

// ==========================================
// 2. Admin Authentication Endpoint
// ==========================================
app.post('/api/admin/auth', (req, res) => {
  const { password = '' } = req.body || {};
  if (password === ADMIN_PASSWORD) {
    const token = `neffto-admin-${Buffer.from(`${Date.now()}-${password}`).toString('base64')}`;
    return res.json({
      success: true,
      message: 'Authentication successful',
      token,
      user: {
        role: 'admin',
        name: 'Neffto Administrator',
        email: 'admin@nefftosolution.com',
      },
    });
  }
  return res.status(401).json({ success: false, message: 'Invalid admin credentials' });
});

// ==========================================
// 3. Blog Management Endpoints
// ==========================================

// Get All Blogs (supports ?status=published&category=...&search=...)
app.get('/api/blogs', async (req, res) => {
  try {
    const result = await blogStore.getAll(req.query);
    return res.json(result);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return res.status(500).json({ message: 'Failed to fetch blogs' });
  }
});

// Get Single Blog by Slug (or ID)
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const blog = await blogStore.getBySlug(req.params.slug);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    return res.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return res.status(500).json({ message: 'Failed to fetch blog post' });
  }
});

// Create New Blog Post
app.post('/api/blogs', async (req, res) => {
  try {
    const { title, content } = req.body || {};
    if (!title || !title.trim()) {
      return res.status(400).json({ message: 'Blog title is required' });
    }
    const created = await blogStore.create(req.body);
    return res.status(201).json(created);
  } catch (error) {
    console.error('Error creating blog:', error);
    return res.status(500).json({ message: 'Failed to create blog post' });
  }
});

// Update Existing Blog Post
app.put('/api/blogs/:id', async (req, res) => {
  try {
    const updated = await blogStore.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    return res.json(updated);
  } catch (error) {
    console.error('Error updating blog:', error);
    return res.status(500).json({ message: 'Failed to update blog post' });
  }
});

// Delete Blog Post
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const success = await blogStore.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    return res.json({ success: true, message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return res.status(500).json({ message: 'Failed to delete blog post' });
  }
});

// Image Upload Endpoint (Multipart or Base64 -> Cloudinary / Local Fallback)
app.post('/api/upload', (req, res) => {
  upload.single('image')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message || 'File upload failed' });
    }

    const hasCloudinary = Boolean(
      process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY
    );

    // 1. File uploaded via multipart form data
    if (req.file) {
      if (hasCloudinary) {
        try {
          const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'neffto-blogs',
            resource_type: 'auto',
          });
          // Clean up local temp file
          try {
            fs.unlinkSync(req.file.path);
          } catch (e) {}

          return res.json({
            success: true,
            url: result.secure_url,
            public_id: result.public_id,
            format: result.format,
          });
        } catch (uploadErr) {
          console.error('Cloudinary upload error:', uploadErr);
          // Fall through to local fallback
        }
      }

      // Local file fallback
      const host = req.get('host') || 'localhost:5000';
      const protocol = req.protocol || 'http';
      const fileUrl = `${protocol}://${host}/uploads/${req.file.filename}`;
      return res.json({
        success: true,
        url: fileUrl,
        filename: req.file.filename,
      });
    }

    // 2. Sent as base64 string in JSON body
    if (req.body && req.body.base64) {
      if (hasCloudinary) {
        try {
          const result = await cloudinary.uploader.upload(req.body.base64, {
            folder: 'neffto-blogs',
            resource_type: 'auto',
          });
          return res.json({
            success: true,
            url: result.secure_url,
            public_id: result.public_id,
            format: result.format,
          });
        } catch (uploadErr) {
          console.error('Cloudinary base64 upload error:', uploadErr);
        }
      }

      // Local base64 fallback
      try {
        const matches = req.body.base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
          return res.status(400).json({ message: 'Invalid base64 string' });
        }
        const mimeType = matches[1];
        const ext = mimeType.split('/')[1] || 'png';
        const buffer = Buffer.from(matches[2], 'base64');
        const filename = `upload-${Date.now()}-${Math.random().toString(36).substring(2, 6)}.${ext}`;
        const filePath = path.join(UPLOADS_DIR, filename);
        fs.writeFileSync(filePath, buffer);

        const host = req.get('host') || 'localhost:5000';
        const protocol = req.protocol || 'http';
        const fileUrl = `${protocol}://${host}/uploads/${filename}`;
        return res.json({
          success: true,
          url: fileUrl,
          filename,
        });
      } catch (e) {
        return res.status(500).json({ message: 'Failed to process base64 image' });
      }
    }

    return res.status(400).json({ message: 'No file or image data provided' });
  });
});

// Basic route for healthcheck
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'Neffto Backend is running!',
    endpoints: ['/api/contact', '/api/quote', '/api/whitepaper', '/api/blogs', '/api/upload'],
  });
});

// Start server
const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
