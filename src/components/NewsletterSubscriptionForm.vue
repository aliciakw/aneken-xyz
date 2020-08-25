<template>
  <div class="NewsletterSubscriptionForm bg-shark-blue-light py1 px1_5 my_5 flex flex-col">
    <h3 class="color-burnt-orange-dark mb1 subheading">
      <strong>{{data.title}}</strong></h3>
    <div
      v-if="serializedMessage"
      v-html="serializedMessage"
      class="v-html color-burnt-orange-dark"
    />
    <form
      class="flex flex-col md-flex-row"
      v-bind:action="subscribeUrl"
      method="post"
      target="popupwindow" 
      v-bind:onsubmit="onSubmit"
    >
      <label class="sr-only" for="tlemail">Enter your email address</label>
      <input class="Form__input flex-1" placeholder="Enter your email" type="text" name="email" id="tlemail" />
      
      <input type="hidden" value="1" name="embed"/>
      <input class="Form__submit Button--tertiary" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { RichText } from 'prismic-dom';

export default {
  name: 'NewsletterSubscriptionForm',
  props: {
    data: {
      title: String,
      message: Array,
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
  },
  methods: {
    onSubmit() {
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
