import VueRouter from 'vue-router';
import app_menu from "./components/app_menu";
import app_products from "./components/app_product";
import app_cart from "./components/app_cart";

let routes = [
    {
        path: '/home/category',
        component: app_menu
    },
    {
        path: '/home/cart',
        component: app_cart
    },
    {
        path: '/home/category/products',//  /home/category/:id/products
        name: 'products',
        component: app_products,
        props: true
    }
];

export default new VueRouter({
    mode: 'history',
    routes: routes
});
