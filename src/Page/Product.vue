<template>
  <div>
    <Master>
      <Loader v-show="isload" />

      <!-- Content -->
        <div v-show="!isload" class="container">
            <div class="row">
                <div v-for="(p,i) in products" :key="i" class="col-md-4" >
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">{{ p.title }}</div>
                        </div>
                        <div class="card-body">
                            <img width="100%" :src="p.url" alt="">
                        </div>
                        <div class="card-footer">
                            <span>Price: <small>$100</small></span>
                            <a @click="addToCart(p)" class="btn btn-sm btn-dark float-right"
                            >Add To Cart</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Master>
    </div>
</template>

<script>
import Loader from "../Component/Loader";
import Master from "../layout/Master.vue";
import axios from "axios";
export default {
  components: { Master, Loader },
  name: "Product",

  data: function () {
    return {
      isload: true,
      products: [],
    };
  },
  methods:{
      addToCart(p){
            var cart = this.$root.cart
            var isincart = cart.find((v)=>{
                return v.id == p.id
            });
            
            if(isincart){
                isincart.qty++;
            }else{
                cart.push({...p,qty:1});
            }
      },
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
        this.products = res.data;
        this.isload = false;
      console.log(this.products);
    });
  },
};
</script>