<template>
  <div id="app" class="App bg-black flex flex-row justify-between" :style="cssVars">
    <!-- main column -->
    <div class="App__main-column vw100">
      <HeaderComponent v-bind:toggleNav="toggleNav" v-bind:isShowingNav="isShowingNav" />
      <div class="p1">
      <BlockSwitch v-if="blockLinks" v-bind:blockLinks="blockLinks" />
      <NotFoundComponent v-else v-bind:message="notFoundMessage" v-bind:image="notFoundImage" />
      </div>
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
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import NavComponent from './components/NavComponent.vue';
import NotFoundComponent from './components/NotFoundComponent';

import blockQuery from './queries/blockQuery';
import globalSettingsQuery from './queries/globalSettingsQuery';
const EMPTY_ARRAY = [];
const DEFAULT_BACKGROUND_COLOR = '#131921';
export default {
  name: 'app',
  components: {
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NotFoundComponent,
  },
  data() {
    return {
      contactEmail: '',
      bandcampUrl: '',
      backgroundColor: DEFAULT_BACKGROUND_COLOR,
      backgroundImageUrl: '',
      blockLinks: null,
      instagramUrl: '',
      spotifyUrl: '',
      youtubeUrl: '',
      menuItems: [],
      isShowingNav: false,
      notFoundImage: null,
      notFoundMessage: '',
    }
  },
  beforeMount() {
    this.fetchGlobalSettings();
    this.fetchBlockList();
  },
  methods: {
    fetchBlockList: function() {
      this.$prismic.client.getByUID('page', this.pageSlug, { 'graphQuery': blockQuery })
        .then((document) => {
          if (document && document.data && Array.isArray(document.data.block_links)) {
            this.blockLinks = document.data.block_links;
            this.setBackgroundVars(document.data.background_color, document.data.background_image);
          }
        });
    },
    fetchGlobalSettings: function() {
      this.$prismic.client.getByUID('global_settings', 'global_settings', { 'graphQuery': globalSettingsQuery })
        .then((document) => {
          if (document && document.data) {
            this.contactEmail = document.data.contact_email || '';
            this.bandcampUrl = document.data.bandcamp_url || '';
            this.instagramUrl = document.data.instagram_url || '';
            this.spotifyUrl = document.data.spotify_url || '';
            this.youtubeUrl = document.data.youtube_url || '';
            this.menuItems = Array.isArray(document.data.menu_items) ? document.data.menu_items : EMPTY_ARRAY;
            this.notFoundImage = document.data.not_found_image || null;
            this.notFoundMessage = document.data.not_found_message || '';
          }
        });
    },
    setBackgroundVars: function(backgroundColor, backgroundImage) {
      this.backgroundColor = backgroundColor || '';
      this.backgroundImageUrl = backgroundImage && backgroundImage.url ? backgroundImage.url : '';
    },
    toggleNav: function() {
      this.isShowingNav = !this.isShowingNav;
    },
  },
  computed: {
    pageSlug() {
      const pathname = window.location.pathname ? window.location.pathname.replace(/^\//, '') : '';
      if (pathname === '') {
        return 'home';
      }
      return pathname;
    },
    cssVars() {
      return {
        '--background-color': this.backgroundColor ? this.backgroundColor : DEFAULT_BACKGROUND_COLOR,
        '--background-image': this.backgroundImageUrl ? `url('${this.backgroundImageUrl}')` : 'none',
        '--main-col-width': this.isShowingNav ? 'calc(100vw + 400px)' : '100wv',
        '--main-col-offset': this.isShowingNav ? '-400px' : '0',
        '--sidebar-width': this.isShowingNav ? '400px' : '0',
        '--mobile-main-col-width': this.isShowingNav ? '200vw' : '100wv',
        '--mobile-main-col-offset': this.isShowingNav ? '-400px' : '0',
        '--mobile-sidebar-width': this.isShowingNav ? '100vw' : '0',
      }
    }
  },
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
  background-color: var(--background-color);
  background-image: var(--background-image);
  background-position: 50% 50%;
  background-size: cover;
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
