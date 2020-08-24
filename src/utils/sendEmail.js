import axios from 'axios';
import querystring from 'querystring';

function sendEmail(senderEmail, subject, body) {
  const params = {
    'Action': 'SendEmail',
    'Source': process.env.VUE_APP_INFO_EMAIL_ADDRESS,
    'Destination.ToAddresses.member.1': process.env.VUE_APP_SUPPORT_EMAIL_ADDRESS,
    'Message.Subject.Data': subject,
    'Message.Body.Text.Data': body
  };
  const url = `https://${process.env.VUE_APP_AWS_SES_URL}?${querystring.encode(params)}`;
  console.log(url);
  
  axios.get(url)
  .then(function(response) {
    console.log('Success:', response);
  })
  .catch(function (error) {
    console.log('Error:', error);
  });
}

export default sendEmail;