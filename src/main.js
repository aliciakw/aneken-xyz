
import Vue from 'vue';
import App from './App.vue';
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import VueMq from 'vue-mq'
import { Breakpoints } from './utils/breakpointUtils';
import BlockSwitch from './containers/BlockSwitch';

require('dotenv').config();

Vue.use(PrismicVue, {
  endpoint: 'https://aneken-xyz.cdn.prismic.io/api/v2',
  linkResolver,
  htmlSerializer
});

Vue.use(VueMq, {
  breakpoints: Breakpoints
});

Vue.config.productionTip = false;
Vue.component('BlockSwitch', BlockSwitch);

new Vue({
  render: h => h(App),
}).$mount('#app');
