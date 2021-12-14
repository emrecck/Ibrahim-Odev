<template>
  <hooper class="hooper" :progress="true" :autoPlay="true" :playSpeed="2000" style="height: 300px" :infiniteScroll="true" :transition="3000">
    <slide class="slide"><img class="images" src="../assets/images/banner150-137-.jpg" alt=""/></slide>
    <slide class="slide"><img class="images" src="../assets/images/sutbanner-136-.jpg" alt=""/></slide>
    <slide class="slide"><img class="images" src="../assets/images/Hasanbeycom_banner-33-.jpg" alt=""/></slide>
    <slide class="slide"><img class="images" src="../assets/images/gunluk_koy_yumurta-27-.jpg" alt=""/></slide>
    
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import 'hooper/dist/hooper.css';

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperNavigation
  }
};
</script>

<style scoped>

.images{
  height: 100%;
}

</style>