<template>
    <div id="komentari">
        <NavigacijaKupac></NavigacijaKupac>
        <br><br><br><br>
        
        <div class="container mx-auto">
            <div class="row" style="padding: 20px">
                <div class="col-sm-3" style="text-align: left">
                   <button @click="nazadNaDetalje()" style="border: 0px; background-color: white"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg></button> 
                </div>
                <div class="col">
                    
                    <h1 style="font-family: SansSerif; color: grey">Komentari i ocene korisnika</h1><br>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">

                </div>
                <div class="col-sm-5" style="padding: 20px;">
                    <div class="row">
                        <div class="col-sm-11">
                           <div class="border border-secondary rounded-pill" style="text-align: left; align-items:center; padding:2px; height: 40px; width: 100%">
                               &nbsp;&nbsp;
                       <button style="border: 0px; background-color: white" @click="ostaviKomentar()">
                       <span style="font-size: 20px; color: grey"> Ostavi komentar... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </button>
                    </div>
                    
                        </div>
                        <div class="col-sm-1" style="text-align: right">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                            </svg>
                           </button>
                           <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button @click="sortirajPoDatumu()" class="dropdown-item" >Najnoviji</button></li>
                                <li><button @click="sortirajPoOcenama2()" class="dropdown-item" >Po ocenama rastuće</button></li>
                                <li><button @click="sortirajPoOcenama()" class="dropdown-item" >Po ocenama opadajuće</button></li>
                            </ul>
                            </div>
                           
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="row" >
                <div class="col-sm-3" style="padding:10px">
                    <img :src="'/image/' + izabrana_knjiga.slika" style="width: 90%"><br><br>
                </div>
                <div class="col" v-if="komentariZaknjigu.length!=0">
            <div class="row mx-auto" v-for="kom in komentariZaknjigu" :key="kom.id" style="padding:10px">
                <div class="col-sm-2">
                    
                </div>
                <div class="col-sm-8 border rounded" style="border: 5px; background-color: #F7F7F7">
                   <div class="row justify-content-center">
                       <div class="col-sm-8" style="text-align: left"><span style="font-weight: bold; font-size: 20px">{{kom.username}} <br> </span>
                       <span style="font-size: 15px">{{kom.datum}}</span><br><br>
                       </div>
                       <div class="col" style="padding: 20px; text-align: right" v-if="kom.ocena==5">
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                   <div class="col" style="padding: 20px;text-align: right" v-if="kom.ocena==4">
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    
                </div>
                 <div class="col" style="padding: 20px;text-align: right" v-if="kom.ocena==3">
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    
                </div>
                 <div class="col" style="padding: 20px;text-align: right" v-if="kom.ocena==2">
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    
                    
                </div>
                 <div class="col" style="padding: 20px;text-align: right" v-if="kom.ocena==1">
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    
                </div>
                   </div>
                   <div class="row">
                       <div class="col">
                           <p style="text-align:justify">{{kom.komentar}}</p>
                       </div>
                   </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <br><br><br>
                     
                </div>
            </div>
                </div>
                <div class="col" v-if="komentariZaknjigu.length==0">
                    <br><br>
                    <img src="../assets/notfound.jpg" style="width: 400px">
                </div>
            </div>
        </div>

        <!-- Modal Komentar-->
<div class="modal fade" id="komentarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="komentarModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-family: SansSerif; font-size: 1.5rem;">
        <div class="conatiner">
            <div class="row" v-if="ocenio == 0">
                <!-- izbor ocene -->
                <div class="col">Izaberi ocenu:</div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example" v-model="nova_ocena"> 
                        <option selected value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                    </select>
                </div>
                
                <br><br>
            </div>
            <div class="row" v-if="ocenio == 1">
                <!-- prikaz vec ostavljene ocene-->
                <div class="col-sm-6">Vaša ocena:</div>
                <div class="col-sm-1"><span style="color: blue; font-size: 30px; font-weight: bold">{{korisnikKomentarOcena.ocena}} </span></div>
                <div class="col-sm-4" style="text-align: left"> <svg xmlns="http://www.w3.org/2000/svg" style="color: blue" width="24" height="24" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg> 
                <br><br>
                </div>
            </div>
            <div class="row">
                <div class="col">Vaš komentar: </div>
                <div class="col">
                    <textarea style="background-color: #F0F0F0" class="form-control" id="nov_komentar" name="nov_komentar" v-model="nov_komentar" rows="3" placeholder="Vaši utisci o knjizi..."></textarea>
                         <br>       
                </div>
            </div>
        </div>
        
      </div>
      <div class="modal-footer mx-auto">
        
        <button v-if="nov_komentar!='' && ((nova_ocena!=0 && ocenio==0) || ocenio==1)" type="submit" @click="objavi()"  class="btn btn-primary" data-bs-dismiss="modal">Objavi</button>
        <button v-if="nov_komentar=='' || (nova_ocena==0 && ocenio==0) " type="submit" @click="objavi()"  class="btn btn-primary" data-bs-dismiss="modal" disabled>Objavi</button>
        
      </div>
    </div>
  </div>
</div>



<!-- Modal Vec ostavljen komentar-->
<div class="modal fade" id="ostavljenKom" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ostavljenKomLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-family: SansSerif; font-size: 1.5rem">
        Već ste ostavili komentar za ovu knjigu!<br>
        <span style="font-size:1rem">Možete ostaviti samo jedan komentar po knjizi</span>
      </div>
      <div class="modal-footer mx-auto">
        
        <button type="button"  class="btn btn-primary" data-bs-dismiss="modal">U redu</button>
        
      </div>
    </div>
  </div>
</div>
            <button @click="topFunc()" id="btnscroll" title="Go to top"><svg xmlns="http://www.w3.org/2000/svg"  style="color: blue" width="30" height="30" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg></button>
    </div>
</template>

<style>
.center-content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

}
#btnscroll {
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
import NavigacijaKupac from '../components/NavigacijaKupac.vue'
import korisniciKomentariOcene from '../data/korisniciKomentariOcene.js'
import {Modal} from 'bootstrap'



export default{
    name: 'Komentari',
    components: {NavigacijaKupac},
    data(){
        return{
            komentariOcene: [],
            izabrana_knjiga: {},
            korisnik: {},
            korisnikKomentarOcena: {},
            ocenio: 0,
            komentariZaknjigu: [],
            nova_ocena: 0,
            nov_komentar:""
        }

    },
    methods: {
        sortirajPoDatumu(){
            this.komentariZaknjigu.sort(function(a,b){
                let datumAniz = a.datum.split('.')
                let datumA = new Date(datumAniz[0],datumAniz[1]-1,datumAniz[2])

                let datumBniz= b.datum.split('.')
                let datumB = new Date(datumBniz[0], datumBniz[1]-1, datumBniz[2])

                if(datumA<datumB) return 1;
                else{if(datumA>datumB) return -1;
                    else return 0;
                }

            })

        },
        sortirajPoOcenama(){
            this.komentariZaknjigu.sort(function(a,b){
                if(a.ocena>b.ocena) return -1;
                else{
                    if(a.ocena<b.ocena) return 1;
                    else return 0;
                }
            })

        },
        sortirajPoOcenama2(){
            this.komentariZaknjigu.sort(function(a,b){
                if(a.ocena>b.ocena) return 1;
                else{
                    if(a.ocena<b.ocena) return -1;
                    else return 0;
                }
            })

        },
         topFunc() {
        window.scrollTo({top: 0, behavior: 'smooth'})
        },

        ostaviKomentar(){
            if(this.korisnikKomentarOcena != null){
                if(this.korisnikKomentarOcena.komentar!=""){
                    let ostavljenKomentarModal = new Modal(document.getElementById('ostavljenKom'))
                    ostavljenKomentarModal.show()
                    return
                }
            }
            let komentarModal = new Modal(document.getElementById('komentarModal'))
            komentarModal.show()

        },
        nazadNaDetalje(){
            this.$router.push({path: '/kupac/detalji'})
        },
        objavi(){
                
                let datum = new Date();
                let dan = datum.getDate();
                let mesec= datum.getMonth()+1;
                let godina = datum.getFullYear();
                let datumFormated=dan+"."+mesec+"."+godina+".";
            if(this.ocenio==1){
                //vec je ocenio ali nije ostavio komentar
               // alert(JSON.stringify(this.korisnikKomentarOcena));
                let id1;
                let ocena1
                let username1
                let id_knjige1
                this.komentariOcene.forEach((kom,index)=>{
                    if(kom.id == this.korisnikKomentarOcena.id) {
                        id1=kom.id;
                        ocena1=kom.ocena;
                        username1=kom.username;
                        id_knjige1=kom.id_knjige;
                        this.komentariOcene.splice(index,1);
                        
                    }
                })
                this.komentariOcene.push({
                    'id':id1,
                    'ocena':ocena1,
                    'username': username1,
                    'id_knjige': id_knjige1,
                    'komentar':this.nov_komentar,
                    'datum':datumFormated
                })
                this.korisnikKomentarOcena.komentar=this.nov_komentar
                this.korisnikKomentarOcena.datum=datumFormated
                this.komentariZaknjigu.push({
                    'id':id1,
                    'ocena':ocena1,
                    'username': username1,
                    'id_knjige': id_knjige1,
                    'komentar':this.nov_komentar,
                    'datum':datumFormated
                })
                localStorage.setItem('korisniciKomentariOcene',JSON.stringify(this.komentariOcene))
               // alert(JSON.stringify(this.korisnikKomentarOcena));
                
                
            }else{
                //nije ni ocenio nj ostavio komentar
                let nov_korisnik_komentar_ocena={
                    'id': this.komentariOcene[this.komentariOcene.length-1].id+1,
                    'username': this.korisnik.korisnickoIme,
                    'id_knjige': this.izabrana_knjiga.id,
                    'datum': datumFormated,
                    'ocena': this.nova_ocena,
                    'komentar': this.nov_komentar

                }
                this.korisnikKomentarOcena=nov_korisnik_komentar_ocena
                this.komentariZaknjigu.push(nov_korisnik_komentar_ocena)
                this.komentariOcene.push(nov_korisnik_komentar_ocena)
                localStorage.setItem('korisniciKomentariOcene',JSON.stringify(this.komentariOcene))
                this.ocenio=1;
            }
        }

    },
    mounted(){
        window.onscroll = function() {scrollFunc()};

            function scrollFunc() {
            let mybutton = document.getElementById("btnscroll");
            
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }}
            
        this.izabrana_knjiga=JSON.parse(localStorage.getItem('izabrana_knjiga'))
        this.korisnik=JSON.parse(localStorage.getItem('korisnik'))

        if(localStorage.getItem('korisniciKomentariOcene')!=null){
            this.komentariOcene=JSON.parse(localStorage.getItem('korisniciKomentariOcene'))
        }else{
            this.komentariOcene=korisniciKomentariOcene
        }
        this.korisnikKomentarOcena=this.komentariOcene.find(
            (korkomoc) => this.korisnik.korisnickoIme == korkomoc.username && this.izabrana_knjiga.id == korkomoc.id_knjige 
        )
        if(this.korisnikKomentarOcena == null){
            this.ocenio=0

        }else{
            this.ocenio=1
        }
        this.komentariOcene.forEach((komentar)=>{
            if(komentar.id_knjige==this.izabrana_knjiga.id && komentar.komentar != ""){
                this.komentariZaknjigu.push(komentar)
            }
        })

        

    }
}
</script>
