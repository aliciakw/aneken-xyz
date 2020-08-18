<template>
  <div class="flex flex-col align-center p1">
    <ImageLoader v-bind:src="data.image.url" v-bind:alt="data.image.alt" />
    <div v-if="serializedCaption" v-html="serializedCaption" class="my2" />
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