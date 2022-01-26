<template>
  <div id="app">
   
  
    <router-view/>
  </div>
</template>

<script>
  import Navigacija from './components/Navigacija.vue'
  
  export default{
    name: 'App',
    components:{
      Navigacija
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%
}

#nav {
  padding: 5px
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
