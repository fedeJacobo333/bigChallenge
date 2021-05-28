import Vue from 'vue/dist/vue.js';
import router from './routes';
import VueRouter from 'vue-router'

require('./bootstrap');

Vue.use(VueRouter);

window.Vue = new Vue({

    router: router
}).$mount('#body');
