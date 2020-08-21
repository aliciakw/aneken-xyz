<template>
  <div class="BandcampBlock flex flex-col py1 w100 mxauto">
    <div class="BandcampBlock__album-art mb_5">
      <ImageLoader v-bind:src="data.album_art.url" v-bind:alt="data.album_art.alt" />
    </div>
    <a
      v-if="(data.cta_label || data.cta_url)"
      class="Button--primary mb1"
      v-bind:href="data.cta_url"
      v-bind:target="data.cta_target_blank ? '_blank' : ''"
    >
      {{ data.cta_label }}
    </a>
    <iframe
      class="BandcampBlock__player"
      v-bind:src="bandcampPlayerSrc"
      seamless
    >
      <a v-bind:href="data.album_url">{{ data.title }}</a>
    </iframe>
  </div>
</template>
<script>
import ImageLoader from '../containers/ImageLoader';
import stripHash from '../utils/stripHash';
const PLAYER_BG_LIGHT = 'ffffff';
const PLAYER_BG_DARK = '333333';
const DEFAULT_PLAYER_LINK_COLOR = 'be612e'; // burnt orange
export default {
  name: 'BandcampBlock',
  components: {
    ImageLoader,
  },
  props: {
    data: {
      album_art: {
        alt: String,
        url: String,
      },
      bandcamp_album_id: String,
      cta_label: String,
      cta_target_blank: String,
      cta_url: String,
      dark_mode: Boolean,
      link_color: String,
      message: Object,
      title: String,
    }
  },
  computed: {
    bandcampPlayerSrc: function() {
      const albumId = this.data.bandcamp_album_id;
      const bgColor = this.data.dark_mode ? PLAYER_BG_DARK : PLAYER_BG_LIGHT;
      const linkColor = this.data.link_color ? stripHash(this.data.link_color) : DEFAULT_PLAYER_LINK_COLOR;
      return `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=${bgColor}/linkcol=${linkColor}/artwork=none/transparent=true/`;
    }
  }
}
</script>
<style>
.BandcampBlock {
  max-width: 700px;
}
.BandcampBlock__player {
  height: 300px;
}
@media screen and (min-width: 770px) {
  .BandcampBlock {
    max-width: 350px;
    margin-left: 0;
    margin-right: 0;
  }
}
@media screen and (min-width: 1250px) {
  .BandcampBlock {
    max-width: 400px;
  }
}
</style>