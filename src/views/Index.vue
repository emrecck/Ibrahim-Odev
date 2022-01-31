<template>
  <div>
    <div class="container">
      <slider></slider>
      <products></products>
    </div>
  </div>
</template>

<script>
import Products from "../components/Products.vue";
import Slider from '../components/Slider.vue';
import axios from "axios";

export default {
  components: {
    Slider,
    Products,
  },
  async mounted(){
    await axios.get("https://nuxt-js-79077-default-rtdb.firebaseio.com/products.json").then(response => {
      let data = response.data;
      let list = [];
      let temp = "";
      for (let key in data) {
        temp = {
          ...data[key],
          //imgSource: vuexContext.imageList[key].imgSource,
          quantity: 1,
        };
        list.push(temp);
      }
      this.$store.commit("addAllProduct", list)
      this.$store.commit('addProduct', this.$store.state.allProductList)
      }).catch(function(error){
        console.log(error.message)
      })
  }
};
</script>

<style>
.container {
  max-width: 1400px;
}
</style>