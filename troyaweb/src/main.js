import Vue from 'vue'
import VueCookies from "vue-cookies"
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.use(VueCookies);
Vue.$cookies.config('7d');

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
