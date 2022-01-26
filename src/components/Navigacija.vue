<template>
    
              <div id="nav">
         <nav class='navbar'>
             <a class='navbar-brand' href="#">
                 <img src='../assets/logoperce.png'>
                 
             </a>
             <div class='navbar-menu'>
                 <router-link to="/" style="font-size: 20px;">Početna</router-link> |
                 <router-link to="/about" style="font-size: 20px">O nama</router-link>
             </div>
         </nav>
      
    </div>
    
    
</template>

<style>
    #nav{
        background-color: rgb(91, 156, 149);
    }
    #nav img{
        width: 90px;
        height: 90px;
    }
    
    .router-link-exact-active{
        color: rgb(165, 243, 206) !important
    }

    

</style>

<script>
  export default{
      name: 'Navigacija'
  }
</script>