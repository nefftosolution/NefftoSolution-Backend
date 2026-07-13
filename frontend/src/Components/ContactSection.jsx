import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = ({ activeTab, locationRef }) => {
  // --- KEEPING ALL YOUR ORIGINAL STATE ---
  const [formData, setFormData] = useState({
    subject: 'Your project',
    fullName: '',
    email: '',
    phone: '',
    message: '',
    newsletter: false,
    events: false,
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- KEEPING ALL YOUR ORIGINAL HANDLERS ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubjectChange = (subject) => {
    setFormData({ ...formData, subject });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // TODO: Jab aap backend deploy kar lein, toh niche wali URL replace karein
      const BACKEND_URL = 'https://YOUR_BACKEND_VERCEL_URL.vercel.app';
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const text = await response.text();
      let result = {};
      try {
        result = JSON.parse(text);
      } catch (err) {
        console.error("Non-JSON response:", text);
      }

      if (response.ok && result.message === 'Email sent successfully') {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({
          subject: 'Your project',
          fullName: '',
          email: '',
          phone: '',
          message: '',
          newsletter: false,
          events: false,
        });
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      } else {
        setStatus({ type: 'error', message: result.message || 'There was a problem sending your message. If you are testing locally, PHP might not be supported.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: 'Network error. There was a problem sending your message.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = [
    'Your project',
    'Careers at Neftio',
    'Event opportunities',
    'Something else',
  ];

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-white py-20 font-sans text-slate-900 w-full overflow-hidden">
      <div className="w-full mx-auto px-6 ">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* LEFT COLUMN: TABS CONTENT */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {activeTab === 'collaborate' ? (
                /* --- TAB 1: LET'S COLLABORATE (FORM) --- */
                <motion.div 
                  key="collab-tab"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-[#00419B] mb-4">
                    Let's collaborate
                  </motion.h2>
                  <motion.p variants={itemVariants} className="mb-12 text-gray-600 text-lg md:text-xl">
                    We'd be happy to chat through your challenge over a virtual coffee - fill in our form and let's find a time.
                  </motion.p>
                  
                  {status.message && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700 border-2 border-green-200' : 'bg-red-100 text-red-700 border-2 border-red-200'}`}
                    >
                      {status.message}
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-10">
                    {/* Message Subject */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-[#00419B] mb-4 uppercase tracking-widest">
                        Message subject <span className="text-[#CB8104]">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {subjectOptions.map((option) => (
                          <motion.button
                            key={option}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSubjectChange(option)}
                            className={`w-full px-6 py-4 rounded-full border-2 font-bold text-center transition-all duration-300 cursor-pointer ${
                              formData.subject === option
                                ? 'bg-[#00419B] text-white border-[#00419B] shadow-xl'
                                : 'bg-white text-gray-500 border-gray-100 hover:border-[#CB8104] hover:text-[#CB8104]'
                            }`}
                          >
                            {option}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Full Name */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-[#00419B] mb-1">Full name *</label>
                      <p className="text-xs text-gray-400 mb-2">So we know how to address you</p>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-[#CB8104] outline-none transition-all text-xl placeholder:text-gray-400 font-medium"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-[#00419B] mb-1">Company email address *</label>
                      <p className="text-xs text-gray-400 mb-2">So we can write back to you</p>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@neffto.com"
                        className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-[#CB8104] outline-none transition-all text-xl placeholder:text-gray-400 font-medium"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-[#00419B] mb-1">Phone number (optional)</label>
                      <p className="text-xs text-gray-400 mb-2">If you'd like a call back</p>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Your Phone no"
                        className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-[#CB8104] outline-none transition-all text-xl placeholder:text-gray-400 font-medium"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-[#00419B] mb-1">Your message *</label>
                      <p className="text-xs text-gray-400 mb-2">Describing your challenge in detail</p>
                      <textarea
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your goals..."
                        className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-[#CB8104] outline-none transition-all text-xl placeholder:text-gray-400 font-medium resize-none"
                      ></textarea>
                    </motion.div>

                    {/* Checkboxes */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-[#00419B] mb-4">Receive our updates</label>
                      <div className="flex flex-col gap-4">
                        <label className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            name="newsletter"
                            checked={formData.newsletter}
                            onChange={handleChange}
                            className="w-6 h-6 border-2 border-gray-300 rounded accent-[#00419B] cursor-pointer"
                          />
                          <span className="text-gray-600 font-medium group-hover:text-[#00419B] transition-colors">Quarterly digital news and insights</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            name="events"
                            checked={formData.events}
                            onChange={handleChange}
                            className="w-6 h-6 border-2 border-gray-300 rounded accent-[#00419B] cursor-pointer"
                          />
                          <span className="text-gray-600 font-medium group-hover:text-[#00419B] transition-colors">Exclusive event invitations</span>
                        </label>
                      </div>
                    </motion.div>

                    {/* Disclaimer */}
                    <motion.div variants={itemVariants} className="text-xs text-gray-400 space-y-3 border-t border-gray-100 pt-8 mt-10">
                      <h4 className="font-bold text-[#00419B] uppercase tracking-widest">Data Protection</h4>
                      <p className="leading-relaxed">
                        I understand that Neffto can contact me to promote their goods and services. I also understand I can unsubscribe at any time by emailing <a href="mailto:nefftosolution@gmail.com" className="text-[#CB8104] underline font-bold">nefftosolution@gmail.com</a>.
                      </p>
                    </motion.div>

                    {/* Submit Button - ANIMATED */}
                    <motion.div variants={itemVariants}>
                      <motion.button
                        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`group/submit relative overflow-hidden text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-xl uppercase tracking-widest text-sm ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00419B] cursor-pointer'}`}
                      >
                        {!isSubmitting && <span className="absolute inset-0 w-0 bg-[#CB8104] transition-all duration-300 group-hover/submit:w-full"></span>}
                        <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send your message'}</span>
                      </motion.button>
                    </motion.div>
                  </form>
                </motion.div>
              ) : (
                /* --- TAB 2: OUR LOCATION --- */
                <motion.div 
                  key="location-tab"
                  ref={locationRef}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#00419B]">Visit our studio</h2>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Located in the heart of London, our office is where creativity meets technology. Drop by for a cup of coffee and a chat.
                  </p>
                  
                  <div className="w-full  bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-1000">
                    <iframe 
                      title="location-map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423056448!2d-0.2120015!3d51.49392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fb630251755%3A0x6b772c67c5f87b8d!2sKensington%20Village!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-l-4 border-[#CB8104] pl-8">
                    <div>
                      <h4 className="font-bold text-[#00419B] uppercase tracking-widest text-sm mb-2">Office Address</h4>
                      <address className="not-italic text-lg text-gray-600">
                        Kensington Village, London <br />
                        W14 8TS, United Kingdom
                      </address>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00419B] uppercase tracking-widest text-sm mb-2">Working Hours</h4>
                      <p className="text-lg text-gray-600">
                        Mon — Fri: 9:00 AM - 6:00 PM <br />
                        Sat — Sun: Closed
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-[#00419B]/5 rounded-[3rem] p-10 border border-[#00419B]/10 sticky top-28">
              <h2 className="text-2xl font-extrabold text-[#00419B] mb-8 uppercase tracking-tight">Direct Contact</h2>
              
              <div className="space-y-10">
                <div className="group cursor-pointer">
                  <h3 className="font-bold text-[#CB8104] uppercase text-xs tracking-widest mb-2">Call us</h3>
                  <p className="text-2xl font-bold text-[#00419B] group-hover:text-[#CB8104] transition-colors">+92 307 3495496</p>
                  <p className="text-2xl font-bold text-[#00419B] group-hover:text-[#CB8104] transition-colors">+92 328 7799060</p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-400 font-medium">
                    <li>1 • New Business Inquiry</li>
                    <li>2 • Technical Support</li>
                  </ul>
                </div>

                <div className="group cursor-pointer">
                  <h3 className="font-bold text-[#CB8104] uppercase text-xs tracking-widest mb-2">Email us</h3>
                  <a href="mailto:nefftosolution@gmail.com" className="text-xl font-bold text-slate-700 border-b-2 border-[#CB8104]/30 group-hover:border-[#CB8104] transition-all">
                    nefftosolution@gmail.com
                  </a>
                </div>

                {/* Get Directions - ANIMATED */}
                <div>
                  <h3 className="font-bold text-[#CB8104] uppercase text-xs tracking-widest mb-4">Visit us</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                    We are based in the heart of London, ready to scale your vision.
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/dir relative w-full border-2 border-[#00419B] text-[#00419B] rounded-full py-3 font-bold overflow-hidden transition-all duration-300 hover:text-white cursor-pointer"
                  >
                    <span className="absolute inset-0 w-0 bg-[#00419B] transition-all duration-300 group-hover/dir:w-full"></span>
                    <span className="relative z-10">Get Directions</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;