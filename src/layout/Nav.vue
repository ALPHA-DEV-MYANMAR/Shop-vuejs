<template>
    <div>
      <div class="">
        <div class="d-flex justify-content-between align-items-center w-100 position-fixed top-0 bg-white z-index ">
          <ul class="custom-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/product">Products</router-link>
            </li>
            <li class="nav-item">
              <div class="nav-link" @click="$root.state = !$root.state">
                <i class="fas fa-shopping-cart">
                  <small class="badge badge-danger" style="font-size: 9px">{{ $root.cart.length }}</small>
                </i>
              </div>
            </li>
          </ul>
          <ul class="custom-nav">
            <li class="nav-item">
              <div class="nav-link" @click="$root.searchState = !$root.searchState">
                <i class="fas fa-search"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="$root.state">
          <Card></Card>
      </div>

      <div v-if="$root.searchState">
          <SearchComponent></SearchComponent>
      </div>

    </div>
</template>

<script>
import Card from "../Component/Card";
import SearchComponent from "../Page/SearchComponent";
export default {
    name : 'Nav',
    components: {SearchComponent, Card},
    data(){
        return{
            cart : [],
        }
    },
    methods: {
    },
    created(){
        this.cart = this.$root.cart
    }
}
</script>