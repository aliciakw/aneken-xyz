import nodemailer from 'nodemailer';

function sendEmail(senderEmail, subject, body) {
  let success = false;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.VUE_APP_SUPPORT_EMAIL_ADDRESS,
        pass: process.env.VUE_APP_SUPPORT_EMAIL_PASSWORD,
      }
    });
    const mailOptions = {
      from: senderEmail,
      to: process.env.VUE_APP_SUPPORT_EMAIL_ADDRESS,
      subject: subject,
      text: body
    };
    console.log('[mailOptions]', mailOptions);
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('[sendEmail] Error:', error);
      } else {
        console.log('Email sent: ' + info.response);
        success = true;
      }
    });
  } catch (error) {
    console.log('[sendEmail] Error:', error);
  }
  return success;
}

export default sendEmail;