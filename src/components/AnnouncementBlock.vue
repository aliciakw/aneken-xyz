<template>
  <div class="AnnouncementBlock position-relative flex flex-row" :style="cssVars">
    <div 
      v-html="serializedMessage" 
      class="AnnouncementBlock__callout position-relative border-burnt-orange pt1_5 px1_5 pb1"
    />
    <div v-if="image" class="AnnouncementBlock__image border-burnt-orange-dark circle overflow-hidden flex-none mt2">
      <ImageLoader v-bind:src="image.url" v-bind:alt="image.alt" />
    </div>
  </div>
</template>
<script>
import { RichText } from 'prismic-dom';
import ImageLoader from '../containers/ImageLoader';
export default {
  name: 'AnnouncementBlock',
  components: {
    ImageLoader,
  },
  props: {
    message: Array, // html
    image: {
      alt: String,
      url: String,
    }
  },
  computed: {
    cssVars() {
      return {
        '--img-url': `url('${this.image.url}')`, 
      }
    },
    serializedMessage: function() {
      if (this.message) {
        return RichText.asHtml(this.message);
      }
      return '';
    }
  },
}
</script>
<style>
.AnnouncementBlock__image {
  width: 50px;
  height: 50px;
  border-width: 2px;
}
.AnnouncementBlock__callout {
  margin-right: 30px;
}
.AnnouncementBlock__callout p {
  font-size: 0.8rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;
}
.AnnouncementBlock__callout::after {
  content: "";
  width: 30px;
  height: 30px;
  background-color: #131921;
  border-color: #f5ab82;
  border-style: solid;
  border-width: 1px 1px 0 0;
  position: absolute;
  right: -16px;
  top: calc(2rem + 12px);
  transform: rotate(45deg);
}

</style>