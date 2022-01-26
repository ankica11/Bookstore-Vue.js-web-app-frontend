<template>
    <div id="kupac">
        <NavigacijaKupac></NavigacijaKupac>
        <br/><br/><br><br>
        
        
        <div class="center-content">
        <div class="container  mx-auto" style="width: 100%; padding: 0px">
            <div class="row mx-auto" style="width: 100%; padding: 0px">
                <div class="col ">
                    <h1 style="font-family: 'SansSerif'; color:rgb(136, 141, 140) ">Naslovi</h1>
                    <br><br>
                    <div id="carouselExampleControlsNoTouching" style="width: 100%; border: 2px" class="carousel slide carousel-dark" data-bs-touch="false" data-bs-interval="false" data-bs-ride="carousel">
                            <div class="carousel-inner">
                               
                                <div class="carousel-item" v-for="(s,index) in slajdoviKnjiga" :key="s.id" :index="index">
                                    <SlajdKnjiga :slajd="s.niz"></SlajdKnjiga>
                                </div> 
                                
                            </div>
                            <button class="carousel-control-prev"  style="border: 2px" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                    </div>
                </div>
               
            </div>
            <div class="row center-content mx-auto" style="height: 100px">
                <div class="col">
                    <hr>
                </div>
            </div>
             <div class="row mx-auto" style="width: 100%;">
                <div class="col ">
                    <div class="row">
                         <div class="col-sm-1">
                            <img src="../assets/star.png" style="width: 100px">
                        </div>
                        <div class="col">
                             <h1 style="font-family: 'SansSerif'; color:rgb(136, 141, 140) ">Na promociji</h1>
                    <br><br>
                        </div>
                        <div class="col-sm-1">
                            <img src="../assets/star.png" style="width: 100px">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div id="carousel2" style="width: 100%; border: 2px;" class="carousel slide carousel-dark" data-bs-touch="false" data-bs-interval="false" data-bs-ride="carousel">
                            <div class="carousel-inner">
                               
                               <div id="kurac" class="carousel-item" v-for="(s,index) in slajdoviPromocija" :key="s.id" :index="index">
                                    <SlajdKnjiga :slajd="s.niz"></SlajdKnjiga>
                                </div> 
                                
                            </div>
                            <button class="carousel-control-prev"  style="border: 2px" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                    </div>
                        </div>
                    </div>
                   
                    
                </div>
               
            </div>
           
        </div>
        </div> 
        <br><br><br><br><br>       
    </div>
</template>
<style>
.center-content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

}
</style>
<script>

import NavigacijaKupac from '../components/NavigacijaKupac.vue'
import $ from 'jquery'
import ListaKnjiga from '../components/ListaKnjiga.vue'
import knjige from '../data/knjige.js'
import Knjiga from '../components/Knjiga.vue'
import SlajdKnjiga from '../components/SlajdKnjiga.vue'
import SlajdPromocija from '../components/SlajdPromocija.vue'



$(document).ready(function(){
    $('.carousel-item').first().addClass('active')
    
    
})
export default{
    name: 'KupacPocetna',
    components: {NavigacijaKupac, ListaKnjiga, Knjiga, SlajdKnjiga, SlajdPromocija},
    data(){
        return {
            knjige:[],
            slajdoviKnjiga: [],
            slajdoviPromocija: [],
            naslovi: [],
            promocije: []
        }
    },
   
    mounted(){
      
        if (localStorage.getItem("knjige") != null) {
      this.knjige = JSON.parse(localStorage.getItem("knjige"));
    } else {
      this.knjige = knjige;
    }
    this.knjige.forEach(knjiga => {
        if(knjiga.na_promociji==1) this.promocije.push(knjiga)
        else this.naslovi.push(knjiga)
        
    });
    for(let i=0; i<this.naslovi.length;){
        let slajd=[];
        if(i<this.naslovi.length) slajd.push(this.naslovi[i++]);
        if(i<this.naslovi.length) slajd.push(this.naslovi[i++]);
        if(i<this.naslovi.length) slajd.push(this.naslovi[i++]);
        if(i<this.naslovi.length) slajd.push(this.naslovi[i++]);
        if(i<this.naslovi.length) slajd.push(this.naslovi[i++]);
        if(i<this.naslovi.length) slajd.push(this.naslovi[i++]);
        this.slajdoviKnjiga.push({'id':i,'niz':slajd});
        

    }
    for(let i=0; i<this.promocije.length;){
        let slajd=[];
        if(i<this.promocije.length) slajd.push(this.promocije[i++]);
        if(i<this.promocije.length) slajd.push(this.promocije[i++]);
        if(i<this.promocije.length) slajd.push(this.promocije[i++]);
        if(i<this.promocije.length) slajd.push(this.promocije[i++]);
        if(i<this.promocije.length) slajd.push(this.promocije[i++]);
        if(i<this.promocije.length) slajd.push(this.promocije[i++]);
        this.slajdoviPromocija.push({'id':i,'niz':slajd});
        

    }
   $(document).ready(function(){
    $('.carousel-item').first().addClass('active')
    $('#kurac').first().addClass('active')
    
    
})
      
   }
    
    
}
</script>