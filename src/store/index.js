import Vue from 'vue';
import Vuex from 'vuex';
// import { selectedLocale } from '@/i18n'

import { productGetters } from './getters'
import { authMutations, productMutations } from './mutations'
import { productActions } from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
      locale: 'en',
      authorized: false,
      user: null,
      users: [],

      // ajax loader
      showLoader: false,
     
      products: [],
      product: {},
      productCategories: [],

			address: ['Haakeem Ansari','Jamunipur Colony', 'Bhadohi, Uttar Pradesh', 'INDIA, PIN-221401'],
			telephone: '05452-2225874',
      mobile: '+91-9235856233',
      whatsapp: '+91-9935667674',
			email: 'azamirugs@gmail.com'
    },
    getters: Object.assign({}, productGetters),
    mutations: Object.assign({}, productMutations, authMutations),
    actions: Object.assign({}, productActions)
});

export default store