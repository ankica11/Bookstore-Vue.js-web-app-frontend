<template>
  <div id="listKnjiga">
    <div class="container">
      <div class="row" style="padding: 10px; margin-bottom: 30px">
         <div class="col-sm-2" style="text-align: center">
           <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                            </svg>
                           </button>
                           <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                
                                <li><button @click="sortirajPoGodiniIzdanja1()" class="dropdown-item" >Po godini izdanja rastuće</button></li>
                                <li><button @click="sortirajPoGodiniIzdanja2()" class="dropdown-item" >Po godini izdanja opadajuće</button></li>
                                <li><button @click="sortirajPoBrojuStrana1()" class="dropdown-item" >Po broju strana rastuće</button></li>
                                <li><button @click="sortirajPoBrojuStrana2()" class="dropdown-item" >Po broju strana opadajuće</button></li>
                                <li><button @click="sortirajAbecednoPoNaslovu()" class="dropdown-item" >Po naslovu</button></li>
                                <li><button @click="sortirajAbecednoPoAutoru()" class="dropdown-item" >Po autoru</button></li>
                            </ul>
                            </div>
          
        </div>
         <div class="col-sm-8">
           <input class="form-control border border-secondary rounded-pill" id="exampleDataList" placeholder="Pretraži po naslovu ili autoru..." v-model="pretraga">
         </div>
         <div class="col-sm-2" style="text-align: left">
           <button type="button" @click="pretrazi()" style="border: 0px; background-color: white">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          </button>
        </div>
       </div>
      <div class="row" >
        
          
            
            
            <div class="knjiga col-sm-2 " v-for="k in knjige" :key="k.id">
              <Knjiga :knjiga="k"></Knjiga>
            </div>
          
        
      </div>
    </div>
  </div>
</template>

<script>
import Knjiga from "./Knjiga.vue";
import knjige from "../data/knjige.js";
export default {
  name: "ListaKnjiga",
  components: { Knjiga },
  data() {
    return {
      knjige: [],
      pretraga: "",
      rezultatPretrage:[]
    };
  },
  methods:{
    sortirajPoGodiniIzdanja1(){
      this.knjige.sort(function(a,b){
        let godina1= parseInt(a.godina_izdanja.split(".")[0])
        let godina2= parseInt(b.godina_izdanja.split(".")[0])
        if(godina1>godina2) return 1
        else{
          if(godina1<godina2) return -1
          else return 0
        }
        
      })
    },
  sortirajPoGodiniIzdanja2(){
     this.knjige.sort(function(a,b){
        let godina1= parseInt(a.godina_izdanja.split(".")[0])
        let godina2= parseInt(b.godina_izdanja.split(".")[0])
        if(godina1>godina2) return -1
        else{
          if(godina1<godina2) return 1
          else return 0
        }
        
      })
  },
  sortirajPoBrojuStrana1(){
    this.knjige.sort(function(a,b){
      let strane1=parseInt(a.broj_strana)
      let strane2=parseInt(b.broj_strana)
      if(strane1>strane2) return 1
      else{
        if(strane1<strane2) return -1;
        else return 0
      }
    })
  },
  sortirajPoBrojuStrana2(){
    this.knjige.sort(function(a,b){
      let strane1=parseInt(a.broj_strana)
      let strane2=parseInt(b.broj_strana)
      if(strane1>strane2) return -1
      else{
        if(strane1<strane2) return 1;
        else return 0
      }
    })
  },
  sortirajAbecednoPoNaslovu(){
    this.knjige.sort(function(a,b){
      if(a.naziv>b.naziv){
        return 1
      }else{
        if(a.naziv<b.naziv) return -1
        else return 0
      }
    })
  }, 
  sortirajAbecednoPoAutoru(){
    this.knjige.sort(function(a,b){
      if(a.autor>b.autor){
        return 1
      }else{
        if(a.autor<b.autor) return -1
        else return 0
      }
    })
  },
  pretrazi(){
    
    this.rezultatPretrage=this.knjige.filter(knjiga=>knjiga.naziv == this.pretraga || knjiga.autor==this.pretraga)
    //alert(JSON.stringify(this.rezultatPretrage))
    localStorage.setItem('rezultat_pretrage',JSON.stringify(this.rezultatPretrage))
    localStorage.setItem('pretraga', JSON.stringify(this.pretraga))
    this.$router.push({path: '/prodavac/rezultat'})
    
  },
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
.knjiga {
  margin-bottom: 40px;
}
</style>