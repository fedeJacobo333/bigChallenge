import Vue from 'vue/dist/vue.js';
import store from '../store';
import {Errors} from "../app";

const comp = Vue.component('app-payment', {
    props: [],

    data() {
        return {
            sharedStore: store,
            paymentMethod: 0,
            num: '',
            cvv: 0,
            expiration: '',
            errors: new Errors()
        }
    },

    methods: {
        goBack(){
            window.Vue.$router.go(-1);
        },
        async submit(type){
            let data;
            if(type){
                data = {
                    cart: this.sharedStore.state.cart,
                    paymentMethod: 'cash'
                }
            }else{
                data = {
                    cart: this.sharedStore.state.cart,
                    num: this.num,
                    cvv: this.cvv,
                    expiration: this.expiration,
                    paymentMethod: 'card'
                }
            }
            let result = await axios({
                method: 'post',
                url: '/api/payment',
                data: data
            }).then(response => window.Vue.$router.push({ name: 'home'}))
                .catch(error => {
                    this.errors.record(error.response.data);
            })
        }
    },

    template: `
    <div>
        <div><button @click="goBack()">back</button></div>

        <input type="radio" id="cash" value="0" v-model="paymentMethod">
        <label for="cash">Cash</label>
        <br>
        <input type="radio" id="credit-card" value="1" v-model="paymentMethod">
        <label for="credit-card">Credit card</label>

        <div v-if="paymentMethod === '1'">
          <form @submit.prevent="submit()">
            <div>
                <label for="card-number">Numero de tarjeta</label>
                <input type="tel" inputmode="numeric" pattern="[0-9\\s]{13,19}" autocomplete="cc-number" maxlength="19"
                       id="card-number" name="card-number" v-model="num">
                <br>
                <span class="text-red-600" v-text="errors.get('num')"></span>
            </div>
              <div>
                  <label for="cvv">CVV</label>
                  <input type="number" id="cvv" name="cvv" v-model="cvv">
                  <br>
                  <span class="text-red-600" v-text="errors.get('cvv')"></span>
              </div>
              <div>
                  <label for="expiration-date">Fecha de expiración</label>
                  <input type="datetime-local" id="expiration-date" name="expiration-date" v-model="expiration">
                  <br>
                  <span class="text-red-600" v-text="errors.get('expiration')"></span>
              </div>
              <div>
                  <button type="submit">Registrar tarjeta</button>
              </div>
          </form>
        </div>
        <div v-if="paymentMethod === '0'">
            <button @click="submit('cash')">Registrar tarjeta</button>
        </div>
    </div>
    `,
});
export default comp;
