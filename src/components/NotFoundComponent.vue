<template>
  <div class="NotFound w100 flex flex-col flex-1 justify-center align-center">
    <div class="NotFound__wrapper">
      <div class="NotFound__image-wrapper">
        <ImageLoader v-if="image" v-bind:src="image.url" v-bind:alt="image.alt" />
      </div>
      <h3 class="m1">{{ message }}</h3>
      <a href="/" class="flex flex-row align-start justify-center handwriting mb4">
        <img class="NotFound__icon mr1 mt_5" src="img/back.svg"/>
        <span>go back home</span>
      </a>   
   
    </div>
  </div>
</template>
<script>
import ImageLoader from '../containers/ImageLoader';
export default {
  name: 'NotFoundComponent',
  components: {
    ImageLoader,
  },
  props: {
    message: {
      type: String,
      default: 'The page you requested was not found',
    },
    image: {
      alt: String,
      url: String,
    }
  }
}
</script>
<style >
.NotFound__image-wrapper {
  width: calc(100% - 4rem);
  margin: auto;
}
.NotFound__icon {
 height: 1.5rem;
}
@media screen and (min-width: 550px) {
  .NotFound__wrapper {
    width: 40%;
  }
  .NotFound__image-wrapper {
    width: 400px;
  }
}
</style>