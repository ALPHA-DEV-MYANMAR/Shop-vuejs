<template>
  <div>
    <Master>

      <div v-if="is_load" class="container ">
        <div class="row justify-content-center align-items-center min-vh-100">
          <div class="col-12 text-center">
            <Loader></Loader>
          </div>
        </div>
      </div>

      <div v-else class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                Product Detail
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="d-flex justify-content-center align-items-center">
                      <img :src="product.image" width="200px" alt="">
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 d-flex align-items-center">
                    <div class="w-100">
                        <div class="fw-bold h5">
                          {{ product.title }}
                        </div>
                        <div>
                          <span class="fa fa-star checked rate-star"></span>
                          <span class="fa fa-star checked rate-star"></span>
                          <span class="fa fa-star checked rate-star"></span>
                          <span class="fa fa-star rate-star"></span>
                          <span class="fa fa-star rate-star"></span>
                          {{ product.rating.rate }}
                        </div>
                        <div>
                          {{ product.category }}
                        </div>
                        <div>
                          {{ product.rating.count }} items for sell
                        </div>
                        <div class="text-warning fw-bold h5">
                          <span class="text-danger text-decoration-line-through">{{ product.price * 2 }}$</span>
                          <br>
                          <span>{{ product.price }}$</span>
                        </div>
                        <div class="d-flex">
                          <button class="btn btn-success form-control">Buy Now</button>
                          <button class="btn btn-primary form-control" @click="addToCart(product)">Add To Cart</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                {{ product.description }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </Master>
  </div>
</template>

<script>
import Master from "../layout/Master";
import Loader from "../Component/Loader";
import axios from "axios";
export default {
  name: "SingleProductDetail",
  components: {Loader , Master},
  data() {
    return {
      is_load: true,
      product: [],
    }
  },
  methods: {
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
  },
  created() {
    axios.get('https://fakestoreapi.com/products/'+this.$route.params.id).then((res)=>{
      this.product  = res.data;
      this.is_load = false
    });
  },
}
</script>

<style scoped>

</style>