<template>
  <div class="Footer flex flex-col align-center color-black bg-ice-blue py1">
    <div class="Footer__wrapper w100">
      <div class="Footer__row flex flex-row justify-end align-center mx1">
        <a v-if="instagramUrl" v-bind:href="instagramUrl" target="_blank">
          <img class="Footer__social-link" src="img/instagram.svg" />
        </a>
        <a v-if="bandcampUrl" v-bind:href="bandcampUrl" target="_blank">
          <img class="Footer__social-link" src="img/bandcamp.svg" />
        </a>
        <a v-if="youtubeUrl" v-bind:href="youtubeUrl" target="_blank">
          <img class="Footer__social-link" src="img/youtube.svg" />
        </a>
        <a v-if="spotifyUrl" v-bind:href="spotifyUrl" target="_blank">
          <img class="Footer__social-link" src="img/spotify.svg" />
        </a>
        <span class="detail ml_25 mb_25">// Aneken River &#169; 2020</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterComponent',
  props: {
    bandcampUrl: String,
    instagramUrl: String,
    spotifyUrl: String,
    youtubeUrl: String,
  },
};
</script>
<style>
.Footer__social-link {
  width: 1.25rem;
  margin: 0.125rem;
}
@media screen and (min-width: 500px) {
  .Footer__wrapper {
    max-width: 900px;
  }
}
</style>