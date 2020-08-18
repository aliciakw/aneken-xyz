<template>
  <div id="app" class="App bg-black flex flex-row justify-between" :style="cssVars">
    <!-- main column -->
    <div class="App__main-column vw100">
      <HeaderComponent v-bind:toggleNav="toggleNav" />
      <PageContainer slug="home" />
      <FooterComponent
        v-bind:bandcampUrl="bandcampUrl"
        v-bind:instagramUrl="instagramUrl"
        v-bind:spotifyUrl="spotifyUrl"
        v-bind:youtubeUrl="youtubeUrl"
      />
    </div>

    <!-- Collapsible Navigation colum -->
    <div class="App__sidebar vh100">
      <NavComponent v-bind:menuItems="menuItems" v-bind:toggleNav="toggleNav" />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import PageContainer from './containers/PageContainer.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavComponent from './components/NavComponent.vue';
export default {
  name: 'app',
  components: {
    HeaderComponent,
    PageContainer,
    FooterComponent,
    NavComponent,
  },
  data() {
    return {
      contactEmail: '',
      bandcampUrl: '',
      instagramUrl: '',
      spotifyUrl: '',
      youtubeUrl: '',
      menuItems: [],
      showNav: false,
    }
  },
  computed: {
    cssVars() {
      return {
        '--main-col-width': this.showNav ? 'calc(100vw + 400px)' : '100wv',
        '--main-col-offset': this.showNav ? '-400px' : '0',
        '--sidebar-width': this.showNav ? '400px' : '0',
        '--mobile-main-col-width': this.showNav ? '200vw' : '100wv',
        '--mobile-main-col-offset': this.showNav ? '-400px' : '0',
        '--mobile-sidebar-width': this.showNav ? '100vw' : '0',
      }
    }
  },
  mounted() {
    this.fetchGlobalSettings();
  },
  methods: {
    toggleNav: function() {
      this.showNav = !this.showNav;
    },
    fetchGlobalSettings: function() {
      this.$prismic.client.getByUID('global_settings', 'global_settings')
        .then((document) => {
          if (document && document.data) {
            this.contactEmail = document.data.contact_email || '';
            this.bandcampUrl = document.data.bandcamp_url || '';
            this.instagramUrl = document.data.instagram_url || '';
            this.spotifyUrl = document.data.spotify_url || '';
            this.youtubeUrl = document.data.youtube_url || '';
            if (Array.isArray(document.data.menu_items)) {
              this.menuItems = document.data.menu_items;
            }
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
.App {
  width: var(--mobile-main-col-width);
  position: absolute;
  left: var(--mobile-main-col-offset);
  overflow: hidden;
  transition: width 0.1s ease-in-out, left 0.1s ease-in-out;
}
.App__sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: var(--mobile-sidebar-width);
  transition: width 0.1s ease-in-out;
  overflow: hidden;
}
@media screen and (min-width: 550px) {
  .App {
    width: var(--main-col-width);
    left: var(--main-col-offset);
  }
  .App__sidebar {
    width: var(--sidebar-width);
  }
}

</style>
