<template>
  <div class="NewsletterSubscriptionForm bg-ice-blue py1 px1_5 flex flex-col">
    <h3 class="color-shark-blue-dark mb_5 subheading">
      <strong>{{data.title}}</strong></h3>
    <div
      v-if="serializedMessage"
      v-html="serializedMessage"
      class="v-html-sm color-shark-blue-dark"
    />
    <form
      class="flex flex-col"
      v-bind:action="subscribeUrl"
      method="post"
      target="popupwindow"
      v-on:submit="onSubmit"
    >
      <div class="flex flex-1 flex-col md-flex-row">
        <label class="sr-only" for="tlemail">Enter your email address</label>
        <input 
          class="Form__input flex-1"
          v-model="email.value"
          placeholder="Enter your email"
          type="text"
          name="email"
          id="tlemail"
        />
        
        <input type="hidden" value="1" name="embed"/>
        <input class="Form__submit Button--tertiary" type="submit" value="Submit" />
      </div>
      <p class="detail color-black" v-if="email.hasError">
        <em>Please enter a valid email address.</em>
      </p>
    </form>
  </div>
</template>

<script>
import { RichText } from 'prismic-dom';
import validate from '../utils/validators';

export default {
  name: 'NewsletterSubscriptionForm',
  props: {
    data: {
      title: String,
      message: Array,
    }
  },
  data() {
    return {
      email: {
        value: '',
        validator: 'email',
        hasError: false,
      }
    }
  },
  computed: {
    serializedMessage() {
      if (this.data.message) {
        return RichText.asHtml(this.data.message);
      }
      return '';
    },
    subscribeUrl() {
      return process.env.VUE_APP_TINY_LETTER_URL;
    },
    submitDisabled() {
      if (validate(this.email.value, this.email.validator)) {
        return false;
      }
      return true;
    }
  },
  methods: {
    onSubmit(e) {
      const isValid = validate(this.email.value, this.email.validator);
      this.email.hasError = !isValid;

      if (!isValid) {
        e.preventDefault();
        return;
      }
      window.open(
        process.env.VUE_APP_TINY_LETTER_URL,
        'popupwindow',
        'scrollbars=yes,width=800,height=600'
      );
      return true;
    }
  }
}
</script>
