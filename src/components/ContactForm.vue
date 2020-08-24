<template>
  <form class="ContactForm flex flex-col" v-on:submit="onSubmit">
    <input v-model="name.value" placeholder="Enter your name" />
    <input v-model="email.value" placeholder="Enter your email" />
    <textarea v-model="message.value" placeholder="Enter a message" cols="60" />
    <input type="submit" role="submit" />
  </form>
</template>
<script>
// import sendEmail from '../utils/sendEmail';
import AWS from 'aws-sdk';
// import axios from 'axios';
import validators from '../utils/validators';
export default {
  name: 'ContactForm',
  props: {
    contactEmail: String,
  },
  data() {
    return {
      name: {
        value: '',
        hasError: false,
      },
      email: {
        value: '',
        hasError: false,
      },
      message: {
        value: '',
        hasError: false,
      },
    }
  },
  computed: {
    canSubmit() {
      return this.isAllValid();
    }
  },
  methods: {
    isAllValid() {
      return this.name.value && this.email.value && this.message.value;
    },
    onValidate(formFields) {
      const fieldNames = Object.keys(formFields);
      let fieldName;
      for (var i = 0; i < fieldNames.length; i++) {
        fieldName = fieldNames[i];
        if (validators.validateString(formFields[fieldName])) {
          this[fieldName].hasError = false;
        } else {
          this[fieldName].hasError = true;
        }
      }
    },
    onResetForm() {
      this.name = {
        value: '',
        hasError: false,
      };
      this.email = {
        value: '',
        hasError: false,
      };
      this.message = {
        value: '',
        hasError: false,
      };
    },
    onSubmit: function(e) {
      e.preventDefault();   
      try {
        AWS.config.credentials = new AWS.Credentials(
        process.env.VUE_APP_AWS_ACCESS_KEY,
        process.env.VUE_APP_AWS_SECRET_KEY);
        AWS.config.update({
          region: 'us-east-1',
        });
      
        const ses = new AWS.SES({ apiVersion: '2010-12-01' });

        const to = [process.env.VUE_APP_SUPPORT_EMAIL_ADDRESS];
        const from = process.env.VUE_APP_INFO_EMAIL_ADDRESS;

        ses.sendEmail({
          Source: from,
          Destination: { ToAddresses: to },
          Message: {
            Subject:{
              Data:"Sending emails through SES $$$"
            },
            Body: {
              Text: {
                Data: 'Stop your messing around',
              }
            }
          }
        }, function(err, data) {
          if(err) throw err
          console.log('Email sent:');
          console.log(data);
        });


        // axios
        //   .get(`https://${process.env.VUE_APP_AWS_SES_URL}`,
        //   {
        //     auth: {
        //       username: process.env.VUE_APP_AWS_SES_SMTP_USERNAME,
        //       password: process.env.VUE_APP_AWS_SES_SMTP_PASSWORD
        //     }
        //   }
        //   )
        //   .then(response => {
        //     console.log('Response:', response);
        //   })
        //   .catch(function (error) {
        //     console.log('Error:', error);
        //   });



        // sendEmail('alicia.willett@gmail.com', `McTesty has sent you a message on aneken.xyz`, 'Yoooooooooo wassup');
        // console.log('submit....');
        // const data = {
        //   name: this.name.value,
        //   email: this.email.value,
        //   message: this.message.value,
        // };
        // this.onValidate(data);
        // if (this.isAllValid()) {
        //   // send email
        //   sendEmail(data.email, `${data.name} has sent you a message on aneken.xyz`, data.message)
        //   //
        //   this.onResetForm()
        // } 
      } catch (e) {
        console.log('ERROR', e);
      }
    }
  }
}
</script>
<style scoped>
.ContactForm {
  max-width: 400px;
}
</style>