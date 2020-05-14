import Vue from 'vue';
import App from './App.vue';
import router from './router';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import {fb}   from './firebase'
import VueFirestore from 'vue-firestore'
import 'firebase/storage'
require('firebase/firestore')

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

Vue.use(VueFirestore)
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);
Vue.component('products-list', require('./sections/ProductList.vue').default);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import store from './store.js'

import Vuex from 'vuex';
Vue.use(Vuex)

Vue.config.productionTip = false

let app = '';

// eslint-disable-next-line no-unused-vars
fb.auth().onAuthStateChanged(function(user) {

  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
    
  }

});

