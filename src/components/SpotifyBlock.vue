<template>
  <div class="SpotifyBlock py1">
    <iframe
      class="SpotifyBlock__player--embed"
      v-if="data && data.widget_type === 'Embed'"
      v-bind:src="embedUrl"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <iframe
      class="SpotifyBlock__player--embed-lg"
      v-if="data && data.widget_type === 'Embed Large'"
      v-bind:src="embedUrl"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <iframe
      class="SpotifyBlock__player--follow p_5"
      v-if="data && data.widget_type === 'Follow'"
      v-bind:src="followUrl"
      height="56"
      width="200"
      scrolling="no"
      frameborder="0"
      style="border:none; overflow:hidden;"
      allowtransparency="true"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: 'SpotifyBlock',
  props: {
    data: {
      title: String,
      spotify_track_id: String,
      spotify_artist_id: String,
      widget_type: String,
    }
  },
  computed: {
    embedUrl() {
      if (this.data && this.data.spotify_track_id) {
        return `https://open.spotify.com/embed/track/${this.data.spotify_track_id}`;
      }
      return '';
    },
    followUrl() {
      if (this.data && this.data.spotify_artist_id) {
        return `https://open.spotify.com/follow/1/?uri=spotify:artist:${this.data.spotify_artist_id}&size=detail&theme=light`;
      }
      return '';
    },
  }
}
</script>

<style>
.SpotifyBlock__player--embed {
  width: 100%;
  height: 80px;
}
.SpotifyBlock__player--follow {
  background: rgba(250, 250, 250, .75);
  border-radius: calc(0.5rem + 28px);
  box-shadow: 2px 2px 5px rgba(25, 25, 25, .5);
}
</style>