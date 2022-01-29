<template>
  <div class="search-view animate__animated animate__slideInLeft m-responsive" style="opacity: 0.90;background-color:#e2e8f0">
      <div class="container" >

        <div class="row">
          <div class="col-12 p-2">
            <div class="d-flex">
              <input type="text" class="form-control search-input " placeholder="search" @keyup="search" autofocus>
              <button class="btn btn-close" @click="closed"></button>
            </div>
          </div>
        </div>

        <div v-if="is_load" class="row justify-content-center align-items-center min-vh-100">
            <Loader></Loader>
          </div>

        <div v-else class="row">
          <div class="col-12">
            <div class="card search-card " v-for="(l,i) in products" :key="i" @click="detail(l)">
              <div class="d-flex justify-content-start align-items-center">
                  <div class="m-1">
                    <img :src="l.image" class="search-card-img"  alt="">
                  </div>
                  <div  class="m-1 search-card-title">
                    {{ l.title }}
                    <br>
                    <span class="text-danger text-decoration-line-through">{{ l.price * 2 }}$</span> &nbsp;
                    <span class="text-dark">{{ l.price }}$</span>
                    <br>
                    <span class="text-black-50">{{ l.rating.count }} items for sell</span> &nbsp;
                    <i class="fas fa-shopping-cart search-cart" @click="addToCart(l)"></i>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../Component/Loader";
export default {
  name: "SearchComponent",
  components: {Loader},
  data() {
    return {
      products: [],
      is_load: true,
    }
  },
  methods: {
    detail(p){
      this.$router.push({ name : 'item' , params: { id : p.id } });
      location.reload();
    },
    closed() {
      this.$root.searchState = false;
    },
    addToCart(p){
      let cart = this.$root.cart
      let isincart = cart.find((v)=>{
        return v.id === p.id
      });
      if(isincart){
        isincart.qty++;
      }else{
        cart.push({...p,qty:1});
      }
    },
    search(el){
      let data = el.target.value;
      if( data.trim() === '' ){
        axios.get('https://fakestoreapi.com/products').then((res)=>{
          this.products = res.data;
        });
      }else{
        let filter = this.products.filter(function(value){
          return value.title.toLowerCase().includes(data.toLowerCase())
              || value.description.toLowerCase().includes(data.toLowerCase())
              || value.category.toLowerCase().includes(data.toLowerCase());
        });
        this.products = filter;
      }
    }
  },
  created() {
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      this.products = res.data;
      this.is_load = false
    });
  }
}
</script>

<style scoped>

</style>