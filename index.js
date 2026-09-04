const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors()); // Allow all origins for simplicity
app.use(express.json()); // Parse JSON bodies

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'nefftosolution@gmail.com',
    pass: 'vkpcreegvxkgthrc', // Your App Password
  },
});

const sendMail = async (subject, text, replyTo) => {
  const mailOptions = {
    from: '"Neffto Website" <nefftosolution@gmail.com>',
    to: 'nefftosolution@gmail.com',
    replyTo: replyTo,
    subject: subject,
    text: text,
  };
  return transporter.sendMail(mailOptions);
};

// 1. Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const {
    firstName = '',
    lastName = '',
    jobTitle = 'N/A',
    company = 'N/A',
    email = '',
    phone = 'N/A',
    projectDetails = ''
  } = req.body || {};

  if (!firstName || !email || !projectDetails) {
    return res.status(400).json({ message: 'Please fill in all required fields (First Name, Email, Project Details).' });
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

// 2. Quote Form Endpoint (Home Page)
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

// 3. Whitepaper Form Endpoint
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

// Basic route for testing if backend is alive
app.get('/', (req, res) => {
  res.send('Neffto Backend is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-J7P4XK5NW2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J7P4XK5NW2');
</script>
