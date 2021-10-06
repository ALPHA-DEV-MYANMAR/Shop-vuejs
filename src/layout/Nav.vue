<template>


    <div>

    <ul class="nav fixed-top  grey lighten-4 py-4">
        <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" to="/product">Product</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/card">
            <i class="fas fa-cart-plus">
                <small class="badge badge-danger" style="font-size: 9px">{{ cart.length }}</small>
            </i>
            </router-link>
        </li>
    </ul>

    </div>

    
</template>

<script>
export default {
    name : 'Nav',
    data(){
        return{
            cart : []
        }
    },
    created(){
        var cart = this.$root.cart
        this.cart = cart
    }
}
</script>