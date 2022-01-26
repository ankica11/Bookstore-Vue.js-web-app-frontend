<template>
  <div id="slajdKnjiga" class="center-content">
    <div class="container" style="width: 85%">
      <div class="row">
        
          
            
            
            <div class="col-sm-2" v-for="k in slajd" :key="k.id">
              <a @click="test(k)"><Knjiga2 :knjiga="k"></Knjiga2></a>
            </div>
            
        
      </div>
    </div>
  </div>
</template>

<script>
import Knjiga2 from "./Knjiga2.vue";
import knjige from "../data/knjige.js";
export default {
  name: "SlajdKnjiga",
  components: { Knjiga2 },
  props: [
      'slajd'
  ],
  data() {
    return {
      knjige: [],
    };
  },
  methods:{
      test(knjiga){
          //alert("test");
          localStorage.setItem('izabrana_knjiga',JSON.stringify(knjiga))
          this.$router.push({path:"kupac/detalji"})

      }

  },
  mounted() {
    if (localStorage.getItem("knjige") != null) {
      this.knjige = JSON.parse(localStorage.getItem("knjige"));
    } else {
      this.knjige = knjige;
    }
  },
};
</script>
<style>
#spisak-knjiga-sredina {
  position: relative;
}
.naslov-sredina {
  font-family: "Lora", serif;
  font-size: 34px;
  margin-top: 40px;
  text-align: center;
}
.center-content{
    display: flex;
    justify-content: center;
    

}

</style>