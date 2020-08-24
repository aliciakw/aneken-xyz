<template>
  <div class="ContactForm w100 flex flex-col" :style="cssVars">
    <div
      v-if="serializedMessage"
      v-html="serializedMessage"
      class="body mb1"
    />
    <form class="flex flex-col" v-on:submit="onSubmit">
      <input class="ContactForm__input body sans-serif" v-model="name.value" placeholder="Enter your name" />
      <input class="ContactForm__input body sans-serif" v-model="email.value" placeholder="Enter your email" />
      <textarea class="ContactForm__input body sans-serif" v-model="message.value" placeholder="Enter a message" cols="60" />
      <input class="ContactForm__submit Button--secondary" type="submit" role="submit" v-bind:value="submitButtonLabel" v-bind:disabled="isMakingRequest" />
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
  </div>
</template>
<script>
import { RichText } from 'prismic-dom';
import sendEmail from '../utils/sendEmail';
import validators from '../utils/validators';
const FieldNames = ['name', 'email', 'message'];
export default {
  name: 'ContactForm',
  props: {
    contactEmail: String,
    data: {
      title: String,
      message: Array,
    }
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
    cssVars() {
      return {
        '--background-color': this.data && this.data.background_color ? this.data.background_color : 'inherit',
        '--border-color': this.data && this.data.border_color ? this.data.border_color : 'inherit',
        '--button-color': this.data && this.data.button_color ? this.data.button_color : 'inherit',
        '--button-text-color': this.data && this.data.button_text_color ? this.data.button_text_color : 'inherit',
        '--heading-color': this.data && this.data.heading_color ? this.data.heading_color : 'inherit',
        '--text-color': this.data && this.data.text_color ? this.data.text_color : 'inherit',
      }
    },
    serializedMessage() {
      if (this.data.message) {
        return RichText.asHtml(this.data.message);
      }
      return '';
    },
    submitButtonLabel() {
      return this.isMakingRequest ? 'Sending...' : 'Send';
    },
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
<style>
.ContactForm {
  max-width: 400px;
  color: var(--text-color);
}
.ContactForm a {
  color: var(--border-color);
}
.ContactForm__heading {
  color: var(--heading-color);
}
.ContactForm__input {
  border: 3px solid var(--border-color);
  margin: 0.5rem 0;
  padding: 0.75rem 0.5rem;
  background: var(--background-color);
}
.ContactForm__submit {
  border: none;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: var(--button-color);
  color: var(--button-text-color);
}
.ContactForm__submit:hover, .ContactForm__submit:active, .ContactForm__submit:focus {
  box-shadow: 4px 4px var(--border-color);
}
</style>