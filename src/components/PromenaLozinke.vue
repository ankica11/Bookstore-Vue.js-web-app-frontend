<template>
<div id="passChange">
    <form class="row g-4" style="padding: 20px">
        <div class="col-12"></div>
        <div class="col-12"></div>
        <div class="col-12"></div>
  <div class="mb-3" style="text-align: left">
    <label for="newpass" class="form-label">Nova lozinka</label>
    <input type="password" class="form-control" id="newpass" aria-describedby="emailHelp" v-model="nova">
    
  </div>
  <div class="mb-3" style="text-align: left">
    <label for="passconf" class="form-label">Potvrda lozinke</label>
    <input type="password" class="form-control" id="passconf" v-model="potvrda">
  </div>
  <div class="col-12"></div>
  <div class="col-12" style="color: red;font-size: 15px">
      {{message}}
  </div>
  <div class="col-12"></div>
  <div class="mb-3">
  <button type="button" @click="promeni()" class="btn btn-primary">Promeni</button>
  </div>
</form>
           <!-- Modal password change-->
<div class="modal fade" id="passchange" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="passchangeLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-family: SansSerif; font-size: 1.5rem">
        Lozinka je uspešno promenjena!<br>
        
      </div>
      <div class="modal-footer mx-auto">
        
        <button type="submit" @click="odjavi()"  class="btn btn-primary" data-bs-dismiss="modal">Odjavi me</button>
        
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
    name: 'PromenaLozinke',
    data(){
        return{
            nova: "",
            potvrda: "",
            korisnik: {},
            korisnici: [],
            message: ""
        }
    },
    methods: {
        promeni(){
            if(this.nova != this.potvrda){
                this.message="Lozinka i potvrda lozinke se razlikuju!"
            }else{
                this.message=""
                this.korisnik.lozinka=this.nova
                this.korisnici.forEach((kor)=>{
                    if(kor.korisnickoIme==this.korisnik.korisnickoIme) kor.lozinka=this.nova
                })
                localStorage.setItem('korisnik',JSON.stringify(this.korisnik))
                localStorage.setItem('korisnici',JSON.stringify(this.korisnici))
                this.nova=""
                this.potvrda=""
                let modalPass= new Modal(document.getElementById('passchange'))
                modalPass.show()
            }

        },
        odjavi(){
            this.$router.push({path:'/'})
           

        }
    },
    mounted(){
        this.korisnik=JSON.parse(localStorage.getItem('korisnik'))
        if(localStorage.getItem('korisnici')!=null){
            this.korisnici=JSON.parse(localStorage.getItem('korisnici'))
        }else{
            this.korisnici=korisnici
        }

    }
}
</script>
    
