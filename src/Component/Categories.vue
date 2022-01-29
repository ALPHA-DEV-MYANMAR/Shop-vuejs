<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 mt-2" v-for="(cat,index) in catList" :key="index" >
          <div class="cat-card" @click="product_card(cat)">
            <div class=" d-flex justify-content-center fw-bolder">
              {{cat}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Categories",
  data() {
    return {
      catList : [],
    }
  },
  methods: {
    product_card(categories) {
      this.$router.push({name: 'cat',params: { 'name' : categories }});
    },

  },
  mounted() {
    axios.get('https://fakestoreapi.com/products/categories').then((res)=>{
      this.catList = res.data
    });
  }
}
</script>

<style scoped>
</style>