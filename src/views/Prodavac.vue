<template>
  <div id="prodavac">
    <NavigacijaProdavac></NavigacijaProdavac>
  
    <br/><br/><br><br>
    <h1 style="font-family: 'SansSerif'; color:rgb(136, 141, 140) ">Svi naslovi</h1>
    <br/><br/>
     <ListaKnjiga></ListaKnjiga>
      
    
    <button @click="topFunction()" id="myBtn" title="Go to top"><svg xmlns="http://www.w3.org/2000/svg"  style="color: blue" width="30" height="30" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg></button>
  </div>
</template>

<style>
#nav {
  background-color: rgb(91, 156, 149);
}
#nav img {
  width: 50px;
  height: 50px;
}

.router-link-exact-active {
  color: rgb(91, 156, 149) !important;
  color: rgb(133, 226, 209)
}
#myBtn {
  display: none;
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
   /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}
</style>
<script>
import ProdavacPocetna from "../components/ProdavacPocetna.vue";
import NavigacijaProdavac from "../components/NavigacijaProdavac.vue";
import ListaKnjiga from "../components/ListaKnjiga.vue";



export default {
  name: "Prodavac",
  components: { ProdavacPocetna, NavigacijaProdavac, ListaKnjiga },
  data(){
    return{
      
    }
  },
  methods: {
  
  topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
  //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera //ovo isto scrolluje smothly lol
}
  },
  mounted(){
    // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
  }
};

</script>