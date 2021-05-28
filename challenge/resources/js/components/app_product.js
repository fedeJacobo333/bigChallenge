import Vue from 'vue/dist/vue.js';
import store from "../store";

const comp = Vue.component('app-products', {
    props: ['category'],

    params: ['id'], // VERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

    data() {
        return {
            products: [],
            sharedStore: store
        }
    },

    methods: {
        async getproducts(){
            let result = await axios.get('/api/category/' + this.category + '/products')
                .then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        addProductToCart(product){
            this.sharedStore.addProductAction(product);
        }
    },

    mounted() {
        this.products = this.getproducts();
    },

    template: `
        <div>
            <div class="card" v-for="product in products">
                <div class="product-header">
                    <h3>{{ product.name }}</h3>
                    <h3>$ {{ product.price }}</h3>
                </div>
                <img :src="'../../' + product.image">
                <button @click="addProductToCart(product)">Agregar al carrito</button>
            </div>
        </div>
    `,
});
export default comp;
