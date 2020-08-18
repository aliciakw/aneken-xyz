<template>
  <div class="BandcampBlock p1">
    <!-- album art -->
    <div class="BandcampBlock__album-art">
      <ImageLoader v-bind:src="data.album_art.url" v-bind:alt="data.album_art.alt" />
    </div>
    <!-- player -->
    <div class="flex flex-col border-black">
      <iframe
        class="BandcampBlock__player" 
        v-bind:src="bandcampPlayerSrc"
        seamless
      >
        <a v-bind:href="data.album_url">{{ data.title }}</a>
      </iframe>
    </div>
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
    ImageLoader
  },
  props: {
    data: {
      album_art: {
        alt: String,
        url: String,
      },
      bandcamp_album_id: String,
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
  display: grid;
  grid-template-columns: 100%;
  column-gap: 1rem;
}
.BandcampBlock__album-art {
  margin-bottom: -3px;
}
.BandcampBlock__player {
  height: 300px;
}
@media screen and (min-width: 550px) {
  .BandcampBlock {
    grid-template-columns: 50% 50%;
  }
}
</style>