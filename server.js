const express = require('express');
const nodemailer = require('nodemailer');
const ejs = require('ejs')

const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({
  extended:true
}))

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=>{
  res.render('home')
})


app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log(req)

  // Send email
  sendEmail(formData)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
});

async function sendEmail(formData) {
  const transporter = nodemailer.createTransport({
    // Replace with your email service configuration
    service: 'gmail',
    auth: {
      user: '263057443041-9fknl4k8kfl8qaqo53umr3novtd50tk0.apps.googleusercontent.com',
      pass: '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'
    }
  });


  const mailOptions = {
    from: `toddlesdoodles@gmail.com`,
    to: `ga5453771@gmail.com`, // Replace with your private email address
    subject: 'New Contact Form Submission',
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `
  };

  await transporter.sendMail(mailOptions);
}

const port = 5500; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
