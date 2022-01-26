<template>
<div class="container">
    <div class="row" style="padding:20px">
        <div class="col" style="text-align: left">
             <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                            </svg>
                           </button>
                           <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                
                                <li><button @click="sortirajPoBrojuPreporuka()" class="dropdown-item" >Po broju preporuka opadajuće</button></li>
                                <li><button @click="sortirajPoBrojuPreporuka2()" class="dropdown-item" >Po broju preporuka rastuće</button></li>
                             
                            </ul>
                            </div>
        </div>
    </div>
    <div class="row mx-auto" v-if="preporuceneKnjige.length!=0">
        <div class="col-sm-2" v-for="preporucena in preporuceneKnjige" :key="preporucena.knjiga.id">
            <PreporucenaKnjiga :preporucena="preporucena"></PreporucenaKnjiga>
        </div>
    </div>
    <div  class="row" v-if="preporuceneKnjige.length==0">
        <div class="col">
            <img src="../assets/notfound.jpg" style="width: 40%">
        </div>
    </div>
</div>

</template>

<script>
import PreporucenaKnjiga from '../components/PreporucenaKnjiga.vue'
import preporuke from '../data/preporuke.js'
import knjige from '../data/knjige.js'
export default {
    name: 'ListaPreporuka',
    components: {PreporucenaKnjiga},
    data(){
        return{
            preporuceneKnjige: [],
            korisnik: {},
            sveKnjige: []
        }
    },
    methods:{
        sortirajPoBrojuPreporuka(){

            this.preporuceneKnjige.sort(function(a,b){
                let k1=a.preporuka.korisnici.length
                let k2=b.preporuka.korisnici.length
                if(k1<k2) return 1
                else if(k1>k2){
                    return -1
                   
                }else return 0
                            })
        },
          sortirajPoBrojuPreporuka2(){

            this.preporuceneKnjige.sort(function(a,b){
                let k1=a.preporuka.korisnici.length
                let k2=b.preporuka.korisnici.length
                if(k1<k2) return -1
                else if(k1>k2){
                    return 1
                   
                }else return 0
                            })
        }

    },
    mounted(){
        this.korisnik=JSON.parse(localStorage.getItem('korisnik'))
        if(localStorage.getItem('knjige')!=null){
                this.sveKnjige=JSON.parse(localStorage.getItem('knjige'))
        }else{
            this.sveKnjige=knjige
        }
        let preporucene=[];
        if(localStorage.getItem('preporuke')!=null){
            preporucene=JSON.parse(localStorage.getItem('preporuke'))
        }else{
            preporucene=preporuke;
            
        }
        preporucene.forEach((preporuka)=>{

         if(preporuka.username == this.korisnik.korisnickoIme && preporuka.korisnici.length != 0){
             let knjiga=this.sveKnjige.find((k)=>k.id==preporuka.preporucenaKnjigaId)
             this.preporuceneKnjige.push({'knjiga':knjiga,'preporuka':preporuka})
         }
            
        });
    }
}
</script>
    
