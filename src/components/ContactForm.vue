<template>
  <div class="ContactForm flex flex-col" :style="cssVars">
    <div
      v-if="serializedMessage"
      v-html="serializedMessage"
      class="v-html mb1"
    />
    <form class="flex flex-col mb2" v-on:submit="onSubmit">
      <label class="ContactForm__heading" for="senderName">Full Name</label>
      <input
        class="ContactForm__input body sans-serif"
        v-model="name.value"
        v-bind:disabled="isMakingRequest || showSuccessMessage"
        name="senderName"
        placeholder="Enter your name"
      />

      <label class="ContactForm__heading" for="emailAddress">Email Address</label>
      <input
        class="ContactForm__input body sans-serif"
        v-model="email.value"
        v-bind:disabled="isMakingRequest || showSuccessMessage"
        name="emailAddress"
        placeholder="Enter your email"
      />

      <label class="ContactForm__heading" for="message">Message</label>
      <textarea
        class="ContactForm__input body sans-serif"
        v-model="message.value"
        v-bind:disabled="isMakingRequest || showSuccessMessage"
        name="message"
        placeholder="Enter a message"
        rows="8"
        cols="60"
      />

      <p v-if="showValidationError" class="detail my1">
        <em>Please make sure all fields are filled out and you have entered a valid email to send your message.</em>
      </p>
      <p v-if="showSubmissionError" class="detail my1">
        <em>Whoops, something went wrong. Please try again.</em>
      </p>
      <div class="my1 flex justify-end">
        <input class="ContactForm__submit Button--secondary" type="submit" role="submit" v-bind:value="submitButtonLabel" v-bind:disabled="isMakingRequest || showSuccessMessage" />
      </div>
      <p v-if="showSuccessMessage" class="detail text-right">
        <em>Thanks!</em>
      </p>
    </form>
  </div>
</template>
<script>
import { RichText } from 'prismic-dom';
import sendEmail from '../utils/sendEmail';
import validate from '../utils/validators';

const DEFAULT_BG_COLOR = '#BCD1E7';
const DEFAULT_BORDER_COLOR = '#6D9CC0';

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
        validator: 'string',
      },
      email: {
        value: '',
        hasError: false,
        validator: 'email',
      },
      message: {
        value: '',
        hasError: false,
        validator: 'string',
      },
    }
  },
  computed: {
    cssVars() {
      return {
        '--background-color': this.data && this.data.background_color ? this.data.background_color : DEFAULT_BG_COLOR,
        '--border-color': this.data && this.data.border_color ? this.data.border_color : DEFAULT_BORDER_COLOR,
        '--button-color': this.data && this.data.button_color ? this.data.button_color : 'inherit',
        '--button-text-color': this.data && this.data.button_text_color ? this.data.button_text_color : 'inherit',
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
      if (this.isMakingRequest) return 'sending...';
      if (this.showSuccessMessage) return 'sent';
      return 'send';
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.showSuccessMessage = false;
      this.showSubmissionError = false;

      const formData = this._validateAndEvaluateFormFields();
      this.showValidationError = formData === false;
      if (formData) {
        this.isMakingRequest = true;
        const emailBody = this._buildEmailBody(formData.name, formData.email, formData.message);
        sendEmail(
          process.env.VUE_APP_INFO_EMAIL_ADDRESS,
          [process.env.VUE_APP_SUPPORT_EMAIL_ADDRESS],
          `${formData.name} has sent you a message on aneken.xyz`,
          emailBody,
          this._onSuccess.bind(this),
          this._onError.bind(this)
        );
      }
    },
    _onError(error) {
      console.error('[ContactForm] Error:', error);
      this.showSubmissionError = true;
      this.isMakingRequest = false;
    },
    _onSuccess() {
      this.showSuccessMessage = true;
      this.isMakingRequest = false;
    },
    _buildEmailBody(name, email, message) {
      return `${name} says:
==================================================

${message}

==================================================

Source: ${window.location.href}
Respond to ${name} at ${email}.`;
    },
    _validateAndEvaluateFormFields() {
      const formData = {};
      let fieldName;
      let hasError = false;

      for (var i = 0; i < FieldNames.length; i++) {
        fieldName = FieldNames[i];
        if (
          validate(this[fieldName].value, this[fieldName].validator)
        ) {
          formData[fieldName] = this[fieldName].value;
          if (this[fieldName].hasError) this[fieldName].hasError = false;
        } else {
          if (!hasError) hasError = true;
          if (!this[fieldName].hasError) this[fieldName].hasError = true;
        }
      }

      if (!hasError) {
        return formData;
      } else {
        return false;
      }
    },
  }
}
</script>
<style>
.ContactForm {
  color: var(--text-color);
}
.ContactForm a,
.ContactForm__heading,
.ContactForm ::placeholder {
  color: var(--border-color);
}
.ContactForm__input {
  border: 3px solid var(--border-color);
  margin: 0.5rem 0;
  padding: 0.75rem 0.5rem;
  background: var(--background-color);
}
.ContactForm__submit:hover, .ContactForm__submit:active, .ContactForm__submit:focus {
  color: var(--border-color);
  box-shadow: 5px 5px var(--border-color);
}
@media screen and (min-width: 550px) {
  .ContactForm {
    padding-right: 30px;
    max-width: 420px;
  }
}
</style>
