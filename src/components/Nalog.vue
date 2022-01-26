<template>
    <div class="nalog">
        
        <br><br><br>
<div class="container">
    <div class="row">
        <div class="col">
            <img src="../assets/prof.jpg" style="width: 300px">
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-sm-3"></div>
        <div class="col justify-content-center">
                    <div class="card shadow-lg p-6 mb-5 rounded" style="width: 40rem; padding:0px; border: 0px;" >
  <div class="card-body " style="padding: 0px">
    
    <div class="container" style="width: 100%; padding: 0px; border: 0px">
        <div class="row">
            <div class="col-sm-4" style="padding: 0px; background-color: #CCCECD">
                <div class="row" style="padding: 20px">
                    <div class="col">
                        <img src="../assets/acc.png" style="width: 30%">
                        <br>
                      <span style="font-family: SansSerif; font-size: 20px;"> {{korisnik.ime}} {{korisnik.prezime}} </span>
                    </div>
                </div>
                <div class="row">
                    <div class="col" style="text-align: left">
                        <ul class="nav flex-column">
                            <li class="nav-item" style="padding: 10px">
                                
                                <button style="border:0px; background-color: #CCCECD" @click="aktivna1()" class="nav-link" aria-current="page"> 
                                <svg style="color: #5C5C5C" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg> &nbsp;&nbsp; <span style="color: #5C5C5C"> Lične informacije </span></button>
                            </li>
                            <li class="nav-item" style="padding: 10px">
                                <button style="border:0px; background-color: #CCCECD" @click="aktivna2()" class="nav-link">
                                <svg style="color: #5C5C5C" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>&nbsp;&nbsp; <span style="color: #5C5C5C">Promena lozinke</span></button>
                            </li>
                            <li class="nav-item" style="padding: 10px">
                                <button style="border:0px; background-color: #CCCECD" @click="signout()" class="nav-link">
                                <svg style="color: #5C5C5C" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                </svg>&nbsp;&nbsp;<span style="color: #5C5C5C"> Odjavi se</span></button>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col" style="background-color:#E6E6E6;">
                <LicneInformacije v-if="aktivna==1"></LicneInformacije>
                <PromenaLozinke v-if="aktivna==2"></PromenaLozinke>

            </div>
        </div>
    </div>
    
  </div>
</div>

        </div>
    </div>
</div>


 
  
        </div>
        
 
</template>

<script>
import LicneInformacije from '../components/LicneInformacije.vue'
import PromenaLozinke from '../components/PromenaLozinke.vue'
export default{
    name: 'Nalog',
    data(){
        return{
            korisnik: {},
            aktivna: 1
        }
    },
    components:{LicneInformacije, PromenaLozinke},
    methods:{
        aktivna1(){
            this.aktivna=1;
        },
        aktivna2(){
            this.aktivna=2;
        },
        aktivna3(){
            this.aktivna=3;
        },
        signout(){
            this.$router.push({path: '/'})
        }

    },
    mounted(){
        this.korisnik=JSON.parse(localStorage.getItem('korisnik'))
    }
    
}
</script>

<style>
html, body{
    height: 100%;
}
.nalog body{
    background-color: #AEDCCB;
    height: 100%;
    


    
}
.nalog{
    display: flex;
    justify-content: center;
    height: 70%;
    align-items: center;
}


</style>