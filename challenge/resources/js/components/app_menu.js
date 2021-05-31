import Vue from 'vue/dist/vue.js';
import store from "../store";

const comp = Vue.component('app-menu', {
    props: [],

    data() {
        return {
            categories: [],
            sharedStore: store
        }
    },

    methods: {
        async getCatagories(){
            let result = await axios.get('/api/category')
                .then(response => {
                    this.categories = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        redirectToProducts(category){
            console.log('cat ' + category);
            window.Vue.$router.push({ name: 'products', params: { id: category } });
        },
        goBack(){
            window.Vue.$router.go(-1);
        }
    },

    mounted() {
        this.categories = this.getCatagories();
    },

    template: `
        <div id="cat">
        <div><button @click="goBack()">back</button></div>
        <div class="card" v-for="category in categories" @click="redirectToProducts(category.id)">
            <h3>{{ category.name }}</h3>
            <img :src="'../' + category.image">
        </div>
        </div>
    `,
});
export default comp;
