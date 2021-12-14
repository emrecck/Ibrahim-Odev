<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  components:{
    Header
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  font-family: "Grandstander", cursive, sans-serif;
}
html {
  font-size: 10px;
  margin: 0;
  padding: 0;
}
body {
  background-color: #fffcf9 !important;
  color: #333;
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 100px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
