<template>
  <div class="flex flex-col align-center w100">
    <ImageLoader v-bind:src="data.image.url" v-bind:alt="data.image.alt" />
    <p class="copy mt1 mb2">{{data.image.alt}}</p>
  </div>
</template>
<script>
import ImageLoader from './ImageLoader';
export default {
  name: 'ImageBlock',
  components: {
    ImageLoader
  },
  props: {
    data: {
      title: String,
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
  }
}
</script>