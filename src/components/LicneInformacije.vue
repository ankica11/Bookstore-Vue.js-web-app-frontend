<template>
    <div id="personalInfo">
        <form class="row g-4" style="padding: 20px">
            <div class="col-12"></div>
  <div class="col-md-6" style="text-align: left">
    <label for="inputname4" class="form-label">Ime</label>
    <input type="text" class="form-control" id="inputname4"  v-model="korisnik.ime">
  </div>
  <div class="col-md-6" style="text-align: left">
    <label for="inputprezime" class="form-label">Prezime</label>
    <input type="text" class="form-control" id="inputprezime" v-model="korisnik.prezime">
  </div>
  <div class="col-12" style="text-align: left">
    <label for="inputAddress" class="form-label">Adresa</label>
    <input type="text" class="form-control" id="inputAddress"  v-model="korisnik.adresa">
  </div>
  <div class="col-12" style="text-align: left">
    <label for="inputkontakt" class="form-label">Kontakt telefon</label>
    <input type="text" class="form-control" id="inputkontakt" placeholder="Ex. 060111222"  v-model="korisnik.telefon">
  </div>
  <div class="col-12"></div>
  <div class="col-12"></div>
  <div class="col-12"></div>
  <div class="col-12">
    <button type="button"  @click="sacuvajIzmene()" class="btn btn-primary">Sačuvaj</button>
  </div>
</form>

           <!-- Modal personal info-->
<div class="modal fade" id="personalinfo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="personalinfoLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-family: SansSerif; font-size: 1.5rem">
        Izmene ličnih informacija su sačuvane!<br>
        
      </div>
      <div class="modal-footer mx-auto">
        
        <button type="button"  class="btn btn-primary" data-bs-dismiss="modal">U redu</button>
        
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
import korisnici from '../data/korisnici.js'
import {Modal} from 'bootstrap'
export default {
    name: 'LicneInformacije',
    data(){
        return{
            korisnik: {},
            korisnici: []
        }
    },
    methods: {
        sacuvajIzmene(){
            //alert(JSON.stringify(this.korisnik))
            localStorage.setItem('korisnik',JSON.stringify(this.korisnik))
            this.korisnici.forEach((kor)=>{
                if(kor.korisnickoIme==this.korisnik.korisnickoIme) {
                    kor.korisnickoIme=this.korisnik.korisnickoIme
                    kor.lozinka=this.korisnik.lozinka
                    kor.adresa=this.korisnik.adresa
                    kor.telefon=this.korisnik.telefon
                    kor.tip=this.korisnik.tip
                    kor.ime=this.korisnik.ime
                    kor.prezime=this.korisnik.prezime
                }
            })
            localStorage.setItem('korisnici',JSON.stringify(this.korisnici))
            let modalPersonalInfo=new Modal(document.getElementById('personalinfo'))
            modalPersonalInfo.show()
        }
    },
    mounted(){
        if(localStorage.getItem('korisnici')!=null){
            this.korisnici=JSON.parse(localStorage.getItem('korisnici'))
        }else{
            this.korisnici=korisnici
        }
        this.korisnik=JSON.parse(localStorage.getItem('korisnik'))
    }
}
</script>