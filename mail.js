var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'vishva@jbspl.com',
    pass: 'vishshah@123$'
  }
});

var mailOptions = {
  from: 'vishva@jbspl.com',
  to: 'saloni@jbspl.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});