import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './Page/Home'
import Product from './Page/Product'
import Card from './Page/Card'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import template from "./Page/template"
import 'animate.css/animate.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import DetailCategories from "./Page/DetailCategories";
import SingleProductDetail from "./Page/SingleProductDetail";

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
  path : '/',
  name : 'home',
  component : Home
  },
  {
    path : '/product',
    name : 'product',
    component : Product
  },
  {
    path : '/card',
    name : 'card',
    component : Card
  },
  {
    path: '/template',
    name: 'tamplate',
    component: template
  },
  {
    path: '/cat/:name',
    name: 'cat',
    component: DetailCategories
  },
  {
    path: '/item/:id',
    name: 'item',
    component: SingleProductDetail
  },
];

const router = new VueRouter({
  mode : 'history',
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

new Vue({
  data(){
    return {
      cart : [],
      state : false,
      searchState : false,
    }
  },
  router,
  render: h => h(App),
}).$mount('#app')
