import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './Page/Home'
import Product from './Page/Product'
import Card from './Page/Card'

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
  }
];

const router = new VueRouter({
  mode : 'history',
  routes,
});

new Vue({
  data(){
    return {
      cart : []
    }
  },
  router,
  render: h => h(App),
}).$mount('#app')
