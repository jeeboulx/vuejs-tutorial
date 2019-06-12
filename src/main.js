import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';


library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// const openInEditor = require('launch-editor-middleware');
const launchMiddleware = require('launch-editor-middleware');

Vue.config.productionTip = false;
// Before you create app
Vue.config.devtools = process.env.NODE_ENV === 'development';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

App.use('/__open-in-editor', launchMiddleware());

// After you create app
// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor;

// then had to add in ./store.js as well.
// Vue.config.devtools = process.env.NODE_ENV === 'development';
