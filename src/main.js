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
  mounted() {
    // https://stackoverflow.com/questions/45047126/how-to-add-external-js-scripts-to-vuejs-components
    const jQuery = document.createElement('script');
    jQuery.setAttribute('src', 'https://code.jquery.com/jquery-3.3.1.slim.min.js');
    document.head.appendChild(jQuery);

    const popper = document.createElement('script');
    popper.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js');
    document.head.appendChild(popper);

    const bootstrap = document.createElement('script');
    bootstrap.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js');
    document.head.appendChild(bootstrap);

    const bootstrapCss = document.createElement('link');
    bootstrapCss.setAttribute('rel', 'stylesheet');
    bootstrapCss.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    document.head.appendChild(bootstrapCss);
  },
}).$mount('#app');

App.use('/__open-in-editor', launchMiddleware());

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor;

// then had to add in ./store.js as well.
// Vue.config.devtools = process.env.NODE_ENV === 'development';
