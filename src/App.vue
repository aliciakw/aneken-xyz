<template>
  <div id="app" class="bg-black">
    <h1 class="title handwriting text-center color-shark-blue">
      Aneken River
    </h1>
    <PageContainer slug="home" />
    <FooterComponent
      v-bind:bandcampUrl="bandcampUrl"
      v-bind:instagramUrl="instagramUrl"
      v-bind:spotifyUrl="spotifyUrl"
      v-bind:youtubeUrl="youtubeUrl"
    />
  </div>
</template>

<script>
import PageContainer from './containers/PageContainer.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'app',
  components: {
    PageContainer,
    FooterComponent,
  },
  data() {
    return {
      contactEmail: '',
      bandcampUrl: '',
      instagramUrl: '',
      spotifyUrl: '',
      youtubeUrl: '',
    }
  },
  mounted() {
    this.fetchGlobalSettings();
  },
  methods: {
    fetchGlobalSettings: function() {
      this.$prismic.client.getByUID('global_settings', 'global_settings')
        .then((document) => {
          if (document && document.data) {
            this.contactEmail = document.data.contact_email || '';
            this.bandcampUrl = document.data.bandcamp_url || '';
            this.instagramUrl = document.data.instagram_url || '';
            this.spotifyUrl = document.data.spotify_url || '';
            this.youtubeUrl = document.data.youtube_url || '';
          }
        });
    }
  }
}
</script>

<style>
body {
  background: #6d9cd0; /* .bg-shark-blue */
  color: #f2f2f2;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>