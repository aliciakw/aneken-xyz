
import Vue from 'vue';
import App from './App.vue';
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import VueMq from 'vue-mq'

require('dotenv').config();

Vue.use(PrismicVue, {
  endpoint: 'https://aneken-xyz.cdn.prismic.io/api/v2',
  linkResolver,
  htmlSerializer
});

Vue.use(VueMq, {
  breakpoints: {
    mobile: 365,
    phablet: 550,
    tablet: 770,
    laptop: 1250,
    desktop: Infinity,
  }
});

// Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
