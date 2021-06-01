import Vue from 'vue/dist/vue.js';
import router from './routes';
import VueRouter from 'vue-router'

require('./bootstrap');

Vue.use(VueRouter);

window.Vue = new Vue({

    router: router
}).$mount('#body');

export class Errors{
    constructor() {
        this.errors = {}
    }

    get(field){
        if(this.errors[field]){
            return this.errors[field][0];
        }
    }

    record(errors){
        this.errors = errors['errors']
    }
}
