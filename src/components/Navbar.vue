<template>
  <div class="col-sm-12 banner px-0">
    <div class="col-sm-12 my-2">
      <nav>
        <div class="container">
          <ul class="nav d-flex justify-content-around col-sm-12 ">
            <li class="nav-items">
              <router-link to="/"><div class="anasayfa"></div></router-link>
            </li>
            <li class="nav-items mt-2">
              <router-link to="/"><div class="ciftlik"></div></router-link>
            </li>
            <li class="nav-items mt-2" @click="filter('')">
              <router-link to="/allproducts"><div class="tum-urunler"></div></router-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Sebzeler')">
              <router-link to="/allproducts" ><div class="domates-biber"></div></router-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Süt')">
              <router-link to="/allproducts"><div class="sut-peynir"></div></router-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Yumurta & Sucuk')">
              <router-link to="/allproducts"><div class="yumurta-sucuk"></div></router-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Salça & Turşu')">
              <router-link to="/allproducts"><div class="salca-tursu"></div></router-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Zeytin & Zeytinyağı')">
              <router-link to="/allproducts"><div class="zeytin-zeytinyagi"></div></router-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Reçel & Bal')">
              <router-link to="/allproducts"><div class="recel-bal"></div></router-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Ekmek')"> 
              <router-link to="/allproducts"><div class="ekmek"></div></router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  methods: {
      filter(category){
      this.$store.commit("filterCategory",category)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <!-- background-color: #E64452; -->
<style scoped>
.container{
  max-width: 1140px;
}
.bottom-banner {
  background: url(../assets/images/banner/nav_bg.png);
}
.kategoriler {
}
.anasayfa {
  background: url(../assets/images/banner/kategori/anasayfa.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  height: 50px;
  width: 65px;
}

.ciftlik {
  background: url(../assets/images/banner/kategori/ciftlik.png) no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 45px;
}

.tum-urunler {
  background: url(../assets/images/banner/kategori/tum-urunler.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
}

.domates-biber {
  background: url(../assets/images/banner/kategori/domates-biber.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
}

.sut-peynir {
  background: url(../assets/images/banner/kategori/sut-peynir.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 70px;
}

.yumurta-sucuk {
  background: url(../assets/images/banner/kategori/yumurta.png) no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
}

.salca-tursu {
  background: url(../assets/images/banner/kategori/salca-tursu.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 90px;
}

.zeytin-zeytinyagi {
  background: url(../assets/images/banner/kategori/zeytin-zeytinyagi.png)
    no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 120px;
}

.recel-bal {
  background: url(../assets/images/banner/kategori/recel-bal.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
}

.ekmek {
  background: url(../assets/images/banner/kategori/ekmek.png) no-repeat
  center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 50px;
}

.anasayfa:hover {
  background: url(../assets/images/banner/kategori/anasayfa-1.png) no-repeat
    center;
  background-size: contain;
  background-position: center;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 65px;
}

.ciftlik:hover {
  background: url(../assets/images/banner/kategori/ciftlik-1.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  height: 50px;
  width: 45px;
  max-width: 100%;
}

.tum-urunler:hover {
  background: url(../assets/images/banner/kategori/tum-urunler-1.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
}

.domates-biber:hover {
  background: url(../assets/images/banner/kategori/domates-biber-1.png)
    no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
}

.sut-peynir:hover {
  background: url(../assets/images/banner/kategori/sut-peynir-1.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 70px;
}

.yumurta-sucuk:hover {
  background: url(../assets/images/banner/kategori/yumurta-1.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
}

.salca-tursu:hover {
  background: url(../assets/images/banner/kategori/salca-tursu-1.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 90px;
}

.zeytin-zeytinyagi:hover {
  background: url(../assets/images/banner/kategori/zeytin-zeytinyagi-1.png)
    no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 120px;
}

.recel-bal:hover {
  background: url(../assets/images/banner/kategori/recel-bal-1.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
}

.ekmek:hover {
  background: url(../assets/images/banner/kategori/ekmek-1.png) no-repeat
  center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 50px;
}
</style>
