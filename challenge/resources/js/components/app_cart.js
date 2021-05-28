import Vue from 'vue/dist/vue.js';
import store from '../store';

const comp = Vue.component('app-cart', {
    props: [],

    data() {
        return {
            products: [],
            cart: []
        }
    },

    methods: {
        async createCart(){
            console.log(this.cart);
            let result = await axios.post('/api/cart',{
                cart: this.cart
            })
                .then(response => {
                    console.log('carrito creado');
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },

    mounted() {
        this.cart = store.state.cart;
    },

    template: `
        <div id="cart">
          {{ cart }} <button @click="createCart()">Confirmar compra</button>
        </div>
    `,
});
export default comp;
