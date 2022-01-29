<template>
    <div>
        <Master >

            <div class="container" style="margin-top:100px">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>AlbumId</td>
                            <td>url</td>
                            <td>+-</td>
                            <td>Count</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(p,i) in cart" :key="i"> 
                            <td>{{ p.id }}</td>
                            <td>{{ p.albumId }}</td>
                            <td>
                                <img :src="p.url"  style="width:10%" alt="">
                            </td>
                            <td>

                                <div>
                                <a @click="plus(p)" class="btn btn-success btn-sm">Plus</a>
                                <br>
                                <br>
                                <a @click="mine(p)" class="btn btn-danger btn-sm">Negative</a>
                                </div>

                            </td>
                            <td>{{ p.qty}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </Master>

    </div>
</template>

<script>
import Master from '../layout/Master.vue';
export default {
    components : {Master},
    name : 'Card',
    data(){
        return {
            cart : []
        }
    },
    methods:{
        plus(p){
            p.qty++;
        },
        mine(p){
            p.qty--;
        }
    },
    created(){
        // this.cart = this.$root.cart;
        // this.cart = JSON.parse(localStorage.getItem('cart'));
    }
}
</script>