import Vue from 'vue/dist/vue.js';
import store from '../store';

const comp = Vue.component('app-cart', {
    props: [],

    data() {
        return {
            sharedStore: store,
        }
    },

    methods: {
        async goToPayment(){
            window.Vue.$router.push({ name: 'payment'});
        },
        removeProduct(product){
            this.sharedStore.removeProductAction(product);
        }
    },

    template: `
        <div id="cart" v-if="sharedStore?.state?.cart?.products?.length > 0">
          <div>
              <li v-for="product in sharedStore.state.cart.products">{{ product.name }} X{{ product.amount }} - $ {{ product.price }} <button @click="removeProduct(product)">eliminar producto</button></li>
          </div>
          <div>{{ sharedStore.state.cart.number_elements }} elementos</div>
          <div>$ {{ sharedStore.state.cart.price }}</div>
          <div><button @click="goToPayment()">pagar</button></div>
        </div>
    `,
});
export default comp;
