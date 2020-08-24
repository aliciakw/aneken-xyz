import AWS from 'aws-sdk';

function sendEmail(senderEmail, recipientEmails, subject, body, onSuccess, onError) {
  AWS.config.credentials = new AWS.Credentials(
    process.env.VUE_APP_AWS_ACCESS_KEY,
    process.env.VUE_APP_AWS_SECRET_KEY);
  AWS.config.update({ region: 'us-east-1' });
  const ses = new AWS.SES({ apiVersion: '2010-12-01' });

  ses.sendEmail({
    Source: senderEmail,
    Destination: { ToAddresses: recipientEmails },
    Message: {
      Subject: {
        Data: subject
      },
      Body: {
        Text: {
          Data: body,
        }
      }
    }
  }, function (e, data) {
    if (e) {
      if (typeof onError === 'function') {
        onError(e)
      } else {
        throw e;
      }
    } else if (typeof onSuccess === 'function') {
      onSuccess(data);
    }
  });
}

export default sendEmail;
