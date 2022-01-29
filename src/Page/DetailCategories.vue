<template>
  <div>
    <Master>
      <div v-if="is_load" class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
          <Loader></Loader>
        </div>
      </div>
      <div v-else class="container m-top">
        <div class="row">
          <div class="col-12">
            <div v-if="is_load" class="d-flex justify-content-center align-items-center min-vh-100">
              <Loader></Loader>
            </div>
            <div v-else>
              <div class="row">
                <div v-for="(l,i) in cats" :key="i" class="col-6 col-md-4 col-lg-2">
                  <!--Product Card-->
                  <div class="card product-card">
                    <div class="product-card-img">
                      <img :src="l.image" alt="" @click="detail(l)">
                    </div>
                    <div class="product-cart-title font-weight-bold">
                      {{ l.title }}
                    </div>
                    <div class="product-cart-desc">
                      {{ l.description.slice(0,50) }}
                    </div>
                    <div class="product-cart-btn">
                      <div class="d-flex justify-content-around align-items-center">
                        <div>
                          <span class="text-decoration-line-through text-danger">{{ l.price*2 }}$</span>
                          <br>
                          <span>{{ l.price }}$</span>
                        </div>
                        <button class="btn btn-info btn-sm text-white btn-sm" @click="addToCart(l)">
                          <i class="fas fa-cart-plus mb-0" style="font-size:15px"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <!--Product Cart-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Master>
  </div>
</template>

<script>
import Master from "../layout/Master.vue";
import Loader from "../Component/Loader.vue";
import axios from "axios";
export default {
  components: { Master , Loader },
  name: "DetailCategories",
  data: function () {
    return {
      is_load: true,
      cats: [],
    };
  },
  methods:{
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
    detail(p){
      console.log(p);
      this.$router.push({name: 'item',params: { 'id' : p.id }});
    }
  },

  mounted() {
    axios.get("https://fakestoreapi.com/products/category/"+this.$route.params.name).then((res) => {
      this.cats = res.data;
      this.is_load = false;
    });
  },
};
</script>