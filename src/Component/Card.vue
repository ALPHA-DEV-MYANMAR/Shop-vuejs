<template>
  <div>
    <div class="card-view animate__animated animate__slideInRight m-responsive" style="opacity: 0.90;background-color:#e2e8f0">

      <div>
        <div class="d-flex justify-content-between align-items-center p-2">
          <div>
            <button class="btn btn-close" @click="hide"></button>
          </div>
          <div class="fw-bolder h5">
            Cart Lists
          </div>
        </div>
      </div>

      <div v-if="$root.cart.length === 0">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="text-center fw-bolder text-danger">
                    There is no carts data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div v-for="(p,i) in cart" :key="i">
              <div class="card m-1">
                  <div class="d-flex align-items-center justify-content-between">

                    <div class="d-flex align-items-center p-1">
                      <div>
                        <img :src="p.image" height="50" class="" alt="">
                      </div>
                      <div class="m-1">
                        <span class="fw-bolder">{{ p.title.slice(0,50) }}</span>
                        <br>
                        <span>{{ p.price }}$</span>
                      </div>
                    </div>

                    <div class="d-flex align-items-center justify-content-center">
                      <div class="d-flex align-items-center justify-content-center ">
                        <i class="fas fa-minus-square h3 mb-0 qty-btn" @click="mine(p)"></i>
                        <span class="m-3">{{ p.qty }}</span>
                        <i class="fas fa-plus-square h3 mb-0 qty-btn" @click="plus(p)"></i>
                      </div>

                      <div>
                        <button class="btn btn-close" @click="cancel(p)"></button>
                      </div>
                    </div>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data(){
    return {
      cart : [],
      price: "",
    }
  },
  methods:{
    plus(p){
      p.qty++;

    },
    mine(p){
      p.qty--;
    },
    cancel(p) {
      let filter = this.cart.filter((value)=>{
        return value.id !== p.id;
      });
      this.cart = filter;
      this.$root.cart = [];
      this.$root.cart = filter;
    },
    hide(){
      this.$root.state = false
    }
  },
  created(){
    this.cart = this.$root.cart;
  }
}
</script>

<style scoped>

</style>