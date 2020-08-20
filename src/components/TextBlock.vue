<template>
  <div class="TextBlock relative" :style="cssVars">
    <div class="TextBlock__body" v-html="serializedBody" /> 
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
      layout: String,
      text_color: String,
    }
  },
  computed: {
    cssVars() {
      return {
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
.TextBlock {
  background-image: var(--background-img);
  color: var(--text-color);
}
.TextBlock__body p {
  font-size: 0.8rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;
}
</style>