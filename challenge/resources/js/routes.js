import VueRouter from 'vue-router';
import app_menu from "./components/app_menu";
import app_products from "./components/app_product";
import app_cart from "./components/app_cart";
import app_payment from "./components/app_payment";

let routes = [
    {
        path: '/home/category',
        name: 'home',
        component: app_menu,
    },
    {
        path: '/home/cart',
        component: app_cart
    },
    {
        path: '/home/category/:id',
        name: 'products',
        component: app_products,
        props: true
    },
    {
        path: '/payment',
        name: 'payment',
        component: app_payment,
        props: true
    }
];

export default new VueRouter({
    mode: 'history',
    routes: routes
});
