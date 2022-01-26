<template>
  <div id="slajdPromocija" class="center-content">
    <div class="container" style="width: 85%">
      <div class="row">
        
          
            
            
            <div class="col-sm-2" v-for="k in slajd" :key="k.id">
              <a @click="test()"><Knjiga :knjiga="k"></Knjiga></a>
            </div>
            
        
      </div>
    </div>
  </div>
</template>

<script>
import Knjiga from "./Knjiga.vue";
import knjige from "../data/knjige.js";
export default {
  name: "SlajdPromocija",
  components: { Knjiga },
  props: [
      'slajd'
  ],
  data() {
    return {
      knjige: [],
    };
  },
  methods:{
      test(){
          alert("test");
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