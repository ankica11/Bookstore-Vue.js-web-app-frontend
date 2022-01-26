<template>
    <div id="rezultat-pretrage">

        <NavigacijaProdavac></NavigacijaProdavac>
  
    <br/><br/>
    <div class="container">
        <div class="row">
            <div class="col">
                <img src="../assets/promocija.jpg" style="width: 30%">
            </div>
        </div>
        <div class="row">
            <div class="col">
                 <h1 style="font-family: 'SansSerif'; color:rgb(136, 141, 140) ">Rezultat pretrage za {{pretraga}}</h1>
    <br/><br/>
    
    <ListaRezultata v-if="rezultatPretrage.length != 0"></ListaRezultata>
    <br>
    <div v-if="rezultatPretrage.length==0" style="font-size: 20px; color: grey;"><br>
        <img src="../assets/notfound.jpg" style="width: 600px">
    </div>
            </div>
        </div>
    </div>
   
     
    </div>
</template>
<script>
import NavigacijaProdavac from '../components/NavigacijaProdavac.vue'
import ListaRezultata from '../components/ListaRezultata.vue'
export default {
    name: 'RezultatPretrage',
    components: {NavigacijaProdavac, ListaRezultata},
    data(){
        return{
            pretraga: "",
            rezultatPretrage: []
        }
    },
    mounted(){
       
      this.pretraga=localStorage.getItem('pretraga')
      this.rezultatPretrage=JSON.parse(localStorage.getItem('rezultat_pretrage'))

    }
}
</script>