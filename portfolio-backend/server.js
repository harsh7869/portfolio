require('dotenv').config();


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all required fields.' });
  }

  try {
    // Configure Nodemailer for email delivery
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Loaded from .env
          pass: process.env.EMAIL_PASS, // Loaded from .env
        },
      });

      const mailOptions = {
        from: email, // Sender's email (user's email from the form)
        to: process.env.EMAIL_USER, 
        subject: `New Message: ${subject}`, // Subject provided by the user
        text: `From: ${name} (${email})\n\n${message}`, // Message content from the form
      };
      

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: 'Message sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the server!'); // You can replace this with an HTML file or other content.
  });
  const path = require('path');

  // Serve static files
  app.use(express.static(path.join(__dirname, 'public')));
  
  // Catch-all route
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
    
