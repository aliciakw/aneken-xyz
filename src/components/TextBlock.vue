<template>
  <div class="TextBlock relative flex-row align-start justify-start" :style="cssVars">
    <div class="TextBlock__body p1_5 v-html" v-html="serializedBody" />
  </div>
</template>
<script>
import { RichText } from 'prismic-dom';

export default {
  name: 'TextBlock',
  props: {
    data: {
      body: Array,
      background_image: {
        url: String,
        alt: String,
      },
      background_color: String,
      heading_color: String,
      text_color: String,
      variant: String,
    }
  },
  computed: {
    cssVars() {
      return {
        '--background-color': this.data.background_color ? this.data.background_color : 'none',
        '--background-img': this.data.background_image && this.data.background_image.url
          ? `url('${this.data.background_image.url}')`
          : 'none',
        '--text-color': this.data.text_color ? this.data.text_color : 'inherit',
      }
    },
    serializedBody() {
      if (this.data.body) {
        return RichText.asHtml(this.data.body);
      }
      return '';
    }
  }
}
</script>
<style>
.TextBlock__body {
  background-color: var(--background-color);
  background-image: var(--background-img);
  background-position: cover;
  color: var(--text-color);
}
</style>
