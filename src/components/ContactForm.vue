<template>
  <form class="ContactForm flex flex-col" v-on:submit="onSubmit">
    <input v-model="name.value" placeholder="Enter your name" />
    <input v-model="email.value" placeholder="Enter your email" />
    <textarea v-model="message.value" placeholder="Enter a message" cols="60" />
    <input type="submit" role="submit" v-bind:value="submitButtonLabel" v-bind:disabled="isMakingRequest" />
    <p v-if="showValidationError" class="detail mt1">
      Please make sure all fields are filled out to send your message.
    </p>
    <p v-if="showSubmissionError" class="detail mt1">
      Whoops, something went wrong. Please try again.
    </p>
    <p v-if="showSuccessMessage" class="detail mt1">
      Message sent. Thanks!
    </p>
  </form>
</template>
<script>
import sendEmail from '../utils/sendEmail';
import validators from '../utils/validators';
const FieldNames = ['name', 'email', 'message'];
export default {
  name: 'ContactForm',
  props: {
    contactEmail: String,
  },
  data() {
    return {
      isMakingRequest: false,
      showValidationError: false,
      showSubmissionError: false,
      showSuccessMessage: false,
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
    submitButtonLabel() {
      return this.isMakingRequest ? 'Sending...' : 'Send';
    }
  },
  methods: {
    onValidateAndEvaluateFormFields() {
      const formData = {};
      let fieldName;
      let hasError = false;
      for (var i = 0; i < FieldNames.length; i++) {
        fieldName = FieldNames[i];
        formData[fieldName] = this[fieldName].value;
        if (validators.validateString(formData[fieldName])) {
          this[fieldName].hasError = false;
        } else {
          if (!hasError) hasError = true;
          this[fieldName].hasError = true;
        }
      }

      if (!hasError) {
        return formData;
      } else {
        return false;
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
    onSubmit(e) {
      e.preventDefault();
      
      this.isMakingRequest = true;
      this.showSuccessMessage = false;
      this.showSubmissionError = false; 
      const formData = this.onValidateAndEvaluateFormFields();
      this.showValidationError = formData === false;

      if (formData) {
        sendEmail(
          process.env.VUE_APP_INFO_EMAIL_ADDRESS,
          [process.env.VUE_APP_SUPPORT_EMAIL_ADDRESS],
          `${formData.name} has sent you a message on aneken.xyz`, 
          `${formData.name} says:
==================================================

${formData.message}

==================================================

Source: ${window.location.href}
Respond to ${formData.name} at ${formData.email}.`,
          () => {
            this.onResetForm();
            this.isMakingRequest = false;
            this.showSuccessMessage = true;
          },
          (error) => {
            console.error('[ContactForm] Error:', error);
            this.showSubmissionError = true;
            this.isMakingRequest = false;
          }
        );
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