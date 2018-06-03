const dotenv = require("dotenv");
const sgMail = require('@sendgrid/mail');

module.exports = {
    sendEmail: sendEmail
  };

//  below is all you need to send email
//   const msg = {
//     to: "hyundo@mailinator.com",
//     from: "test@example.com",
//     subject: "Sending with SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>"
//   };

function sendEmail(msg){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail.send(msg)
}