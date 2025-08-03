const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use your SMTP config
    auth: {
      user: 'your.email@gmail.com',
      pass: 'your_app_password'  // Use App Password if 2FA is enabled
    }
  });

  const mailOptions = {
    from: email,
    to: 'your.email@gmail.com',
    subject: `Contact Form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email not sent');
    } else {
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
