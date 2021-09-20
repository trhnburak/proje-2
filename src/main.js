import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '../src/i18n'
import "@/assets/style.css";
import Vuelidate from "vuelidate"
Vue.config.productionTip = false
Vue.use(Vuelidate)
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')