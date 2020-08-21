<template>
  <div class="flex flex-col align-center py1">
    <ImageLoader v-bind:src="data.image.url" v-bind:alt="data.image.alt" />
    <div
      v-if="serializedCaption"
      v-html="serializedCaption"
      class="ImageBlock__caption w100 mt1 mb2 text-right amatic-sc"
    />
  </div>
</template>
<script>
import { RichText } from 'prismic-dom'
import ImageLoader from '../containers/ImageLoader';
export default {
  name: 'ImageBlock',
  components: {
    ImageLoader
  },
  props: {
    data: {
      title: String,
      caption: String,
      image: {
        title: String,
        alt: String,
        url: String,
        dimensions: {
          height: Number,
          width: Number,
        }
      }
    }
  },
  computed: {
    serializedCaption: function() {
      if (this.data.caption) {
        return RichText.asHtml(this.data.caption);
      }
      return '';
    }
  }
}
</script>
<style>
.ImageBlock__caption h4 {
  font-size: 1.5rem;
}
@media screen and (min-width: 500px) {
  .ImageBlock__caption h4 {
    font-size: 2rem;
  }
  .ImageBlock__caption h5 {
    font-size: 1.5rem;
  }
  .ImageBlock__caption h6 {
    font-size: 1.25rem;
  }
  .ImageBlock__caption p {
    font-size: 1rem;
  }
}
</style>