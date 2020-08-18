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
        src="https://bandcamp.com/EmbeddedPlayer/album=472367667/size=large/bgcol=ffffff/linkcol=e99708/artwork=none/transparent=true/"
        seamless
      >
        <a href="http://singlesweekend.bandcamp.com/album/singles-weekend-vol-ii">
          Singles Weekend Vol. II by Singles Weekend
        </a>
      </iframe>
    </div>
  </div>
</template>
<script>
import ImageLoader from '../containers/ImageLoader';
export default {
  name: 'BandcampBlock',
  components: {
    ImageLoader
  },
  props: {
    data: {
      video_url: String
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