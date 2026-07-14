const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors()); // Allow all origins for simplicity
app.use(express.json()); // Parse JSON bodies

app.post('/api/contact', async (req, res) => {
  const {
    fullName = 'N/A',
    email = 'N/A',
    phone = 'N/A',
    message = 'N/A',
    subject = 'No Subject',
    newsletter = false,
    events = false
  } = req.body || {};

  if (!fullName || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  const bodyText = `
You have received a new message from the contact form on your website.

Details:
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Newsletter Opt-in: ${newsletter ? 'Yes' : 'No'}
Events Opt-in: ${events ? 'Yes' : 'No'}

Message:
${message}
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'nefftosolution@gmail.com',
        pass: 'vkpcreegvxkgthrc', // Your App Password
      },
    });

    const mailOptions = {
      from: '"Neffto Website" <nefftosolution@gmail.com>',
      to: 'nefftosolution@gmail.com',
      replyTo: email !== 'N/A' ? email : undefined,
      subject: `New Contact Form Submission: ${subject}`,
      text: bodyText,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
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
