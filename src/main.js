import Vue from 'vue'
import App from './App.vue'

import router from "@/router";
import store from "@/store";

import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './app.scss'
import i18n from './i18n'
import FlagIcon from 'vue-flag-icon'

Amplify.configure(aws_exports);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(FlagIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
