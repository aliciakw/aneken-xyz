<template>
  <form class="ContactForm flex flex-col" v-on:submit="onSubmit">
    <input v-model="name.value" placeholder="Enter your name" />
    <input v-model="email.value" placeholder="Enter your email" />
    <textarea v-model="message.value" placeholder="Enter a message" cols="60" />
    <input type="submit" role="submit" v-bind:disabled="!this.canSubmit" />
  </form>
</template>
<script>
// import sendEmail from '../utils/sendEmail';
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
      return this.name.value && this.email.value && this.message.value;
    }
  },
  methods: {
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
      return this.canSubmit();
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
        console.log('submit....');
        const data = {
          name: this.name.value,
          email: this.email.value,
          message: this.message.value,
        };
        const isValid = this.onValidate(data);
        console.log('isValid', isValid)
        if (isValid) {
          // send email
          // sendEmail(data.email, `${data.name} has sent you a message on aneken.xyz`, )
          //
          this.onResetForm()
        } 
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