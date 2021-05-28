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

            let result = await axios({
                method: 'post',
                url: '/api/cart',
                data: {
                    cart: this.cart
                }
            }).then(response => {
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
        <div id="cart" v-if="cart?.products?.length > 0">
          <div>
              <li v-for="product in cart.products">{{ product.name }} X{{ product.amount }} - $ {{ product.price }}</li>
          </div>
          <div>{{ cart.number_elements }} elementos</div>
          <div>$ {{ cart.price }}</div>
          <div><button @click="createCart()">pagar</button></div>
        </div>
    `,
});
export default comp;
