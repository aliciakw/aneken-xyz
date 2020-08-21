<template>
  <div class="NotFound w100 flex flex-col flex-1 justify-center align-center">
    <div class="NotFound__wrapper">
      <div class="NotFound__image-wrapper mauto">
        <ImageLoader v-if="image" v-bind:src="image.url" v-bind:alt="image.alt" />
      </div>
      <h3 class="mt2 mb1 copy text-center">{{ message }}</h3>
      <a href="/" class="flex flex-row align-start justify-end handwriting px2 mb4">
        <img class="NotFound__icon mr1 mt_5" src="img/back.svg"/>
        <span class="mr1">go back home</span>
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
.NotFound {
  height: calc(100vh - 130px);
}
.NotFound__image-wrapper {
  width: calc(100% - 2rem);
}
.NotFound__icon {
 height: 1.5rem;
}
@media screen and (min-width: 550px) {
  .NotFound__wrapper {
    width: 33%;
  }
  .NotFound__image-wrapper {
    width: 50%;
  }
}
</style>