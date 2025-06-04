const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Use environment variables or hardcoded credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tgenius.solution@gmail.com',         // Replace with your email
    pass: 'auoq stdk pwlc pxda'        // Replace with app password
  }
});

router.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'tgenius.solution@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong><br>${message}</p>
        `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Email failed to send' });
  }
});

module.exports = router;
