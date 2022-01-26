<template>
<div id="detalji">
    <NavigacijaKupac></NavigacijaKupac>
    <br><br><br><br>
   
    <div class="container">
        <div class="row" style="padding: 30px">
            <div class="col" style="padding: 10px">
                <img :src="'/image/' + izabrana_knjiga.slika" style="width: 50%"><br><br>
                <h5><span style="font-weight: bold">Godina izdanja:</span> {{izabrana_knjiga.godina_izdanja}}</h5>
                <h5><span style="font-weight: bold">Broj strana: </span>{{izabrana_knjiga.broj_strana}}</h5>
                <br><br>
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col">
                        <div class="d-grid" style="text-align:center; width: 65%">
                <button type="button" @click="preporuci()" class="btn btn-primary btn-block" style="font-family: Arial; text-align: center">Preporuči</button>
                </div>
                    </div>
                </div>
                
            </div>
            <div class="col">
                <div class="row">
                <div class="col-sm-10">
                <h1 style="font-weight: bold">{{izabrana_knjiga.naziv}}</h1>
                <h3>{{izabrana_knjiga.autor}}</h3> <br>
                </div>
                <div class="col" v-if="ocenio == 0">
                   
                   <span style=" font-size: 25px; color: #2346F5">Oceni</span> <br>
                    <button @click="oceni()" style="border: 0px; background-color: white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" style="color: #2346F5">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                    </button>
                </div>
                <div class="col" v-if="ocenio == 1">
                   
                   <svg xmlns="http://www.w3.org/2000/svg" style="color: #2346F5" width="40" height="40" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> &nbsp;
                    <span style="font-size: 30px; color: #2346F5; font-weight: bold">{{korisnikKomentarOcena.ocena}}/5 </span>
                </div>
                </div>
                <div class="row">
                    <div class="col">
                <p style="text-align: justify; font-size: 20px">
                    {{izabrana_knjiga.opis}}
                </p>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col" style="padding: 10px">
                <img src="../assets/comment.jpg">
            </div>
            <div class="col" style="text-align: left">
            
            <div class="row">
                
               <div class="col-sm-9">
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="50" height="60"
                    viewBox="0 0 200 200"
                    
                    style=" fill:#000000;">
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="#ffffff"></path><g fill="#3498db"><path d="M78.83333,10.75h14.33333v150.5h-14.33333z"></path></g></g></svg>
                    <span style="font-weight: bold; font-size: 30px"><button @click="prikaziKomentare()" style="border: 0px; background-color: white">Komentari i ocene korisnika</button></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;<span style="font-size: 25px;">{{ukupnoKomentara}}</span></div>
               <div class="col center-content">
                   <button @click="prikaziKomentare()" style="border: 0px; background-color: white">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="47" style="color: #3399FF" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg></button>
                </div>
                
                </div>
            
                <br>
                <div class="row">
                    
                    <div class="col border border-secondary" style="border: 5px; background-color: #F7F7F7">
                        <div class="row">
                            <div class="col-sm-8"><span style="font-weight: bold; font-size: 20px">{{topComment.username}} <br> </span>
                <span style="font-size: 15px">{{topComment.datum}}</span><br><br></div>
                <div class="col" style="padding: 20px; text-align: right">
                    <svg v-if="topComment.ocena==5" xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg  v-if="topComment.ocena==4 || topComment.ocena==5" xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg v-if="topComment.ocena==3 || topComment.ocena==4 || topComment.ocena==5" xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg v-if="topComment.ocena==2 || topComment.ocena==3 || topComment.ocena==4 || topComment.ocena==5" xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp;&nbsp;
                    <svg v-if="topComment.ocena != 0" xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                        </div>
                <div class="row">
                    <div class="col">
                         <p style="text-align: justify; font-size: 17px"> {{topComment.komentar}}
                </p>
                    </div>
                </div>
               </div><br><br></div>
                
            </div>
        </div><br><br>
    </div>

    <!-- Modal Ocena -->
    <div class="modal fade" id="ocenaModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ocenaModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-family: SansSerif; font-size: 1.5rem">
        <span style="font-size: 40px; font-weight: bold; color: #2346F5">Oceni</span><br><br>

        <button type="submit" @mouseover="hoveredStar=1" @mouseleave="hoveredStar=0" @click="izaberiOcenu(1)" data-bs-dismiss="modal" style="border: 0px; background-color: white">
        <svg v-if="hoveredStar==0" xmlns="http://www.w3.org/2000/svg" style="color: #2346F5" width="40" height="40" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        <svg v-if="hoveredStar != 0" xmlns="http://www.w3.org/2000/svg" style="color: #2346F5" width="40" height="40" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        </button>&nbsp;&nbsp;

        <button type="submit" @mouseover="hoveredStar=2" @mouseleave="hoveredStar=0" @click="izaberiOcenu(2)" data-bs-dismiss="modal" style="border: 0px; background-color: white">
        <svg v-if="hoveredStar==0 || hoveredStar==1" xmlns="http://www.w3.org/2000/svg" style="color: #2346F5" width="40" height="40" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        <svg v-if="hoveredStar == 2 || hoveredStar==3 || hoveredStar==4 || hoveredStar==5" xmlns="http://www.w3.org/2000/svg" style="color: #2346F5" width="40" height="40" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        </button>&nbsp;&nbsp;

        <button type="submit" @mouseover="hoveredStar=3" @mouseleave="hoveredStar=0" @click="izaberiOcenu(3)" data-bs-dismiss="modal" style="border: 0px; background-color: white">
        <svg v-if="hoveredStar==0 || hoveredStar==1 || hoveredStar==2" xmlns="http://www.w3.org/2000/svg" style="color: #2346F5" width="40" height="40" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        <svg v-if="hoveredStar==3 || hoveredStar==4 || hoveredStar==5" xmlns="http://www.w3.org/2000/svg" style="color:#2346F5" width="40" height="40" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        </button>&nbsp;&nbsp;

        <button type="submit" @mouseover="hoveredStar=4" @mouseleave="hoveredStar=0" @click="izaberiOcenu(4)" data-bs-dismiss="modal" style="border: 0px; background-color: white">
        <svg  v-if="hoveredStar==0 || hoveredStar==1 || hoveredStar==2 || hoveredStar==3" xmlns="http://www.w3.org/2000/svg" style="color: #2346F5" width="40" height="40" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        <svg v-if="hoveredStar==4 || hoveredStar==5" xmlns="http://www.w3.org/2000/svg" style="color: #2346F5" width="40" height="40" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        </button>&nbsp;&nbsp;

        <button type="submit" @mouseover="hoveredStar=5" @mouseleave="hoveredStar=0" @click="izaberiOcenu(5)" data-bs-dismiss="modal" style="border: 0px; background-color: white">
        <svg v-if="hoveredStar==0 || hoveredStar==1 || hoveredStar==2 || hoveredStar==3 || hoveredStar==4" xmlns="http://www.w3.org/2000/svg" style="color: #2346F5" width="40" height="40" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        <svg v-if="hoveredStar==5" xmlns="http://www.w3.org/2000/svg" style="color: #2346F5" width="40" height="40" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        </button><br><br>
      </div>
      
    </div>
  </div>
</div>

<!-- Modal Preporuci-->
<div class="modal fade" id="preporukaModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="preporukaModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" style="font-family: Arial">Izaberi korisnike</h4>
        <button type="submit" @click="zatvori()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-family: SansSerif; font-size: 1.5rem; max-height: 500px">
        <div class="container">
            <div class="row" v-for="k in korisniciZapreporuku" :key="k.korisnik.korisnickoIme" style="padding: 0px; margin-top: 0px" >
                <div class="col" style="padding:0px">
                    <img src="../assets/login.png" width="40" height="40" />
                </div>
                <div class="col-sm-7" style="text-align: left; color: #6E6D6D; font-size: 20px" >
                    
                    <div class="row"><div class="col">  <span style="font-size: 20px; font-weight:bold"> @{{k.korisnik.korisnickoIme}} </span></div></div></div>
                  
                 
                <div class="col-sm-3">
                    <button v-if="k.preporucio==0" type="submit" @click="preporuciKorisniku(k)" class="btn btn-primary" style="font-family: Arial">Preporuči</button>
                    <svg v-if="k.preporucio==1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" style="color: rgb(91, 156, 149)" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </div>
                <hr>
            </div>
        </div>
      </div>
      <div class="modal-footer mx-auto">
        
        
        
      </div>
    </div>
  </div>
</div>

</div>
</template>
<style>
#detalji{
    font-family: SansSerif;
    
}
.center-content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

}
</style>
    
<script>
import NavigacijaKupac from '../components/NavigacijaKupac.vue'
import korisniciKomentariOcene from '../data/korisniciKomentariOcene.js'
import {Modal} from 'bootstrap'
import korisnici from '../data/korisnici.js'
import preporuke from '../data/preporuke.js'
export default{
    name: 'Detalji',
    components: {NavigacijaKupac},
    data(){
        return {

            izabrana_knjiga: {},
            korisniciKomentari: [],
            korisnik: {},
            message: "",
            korisnikKomentarOcena: {},
            ocenio: 0,
            hoveredStar: 0,
            topComment: {},
            ukupnoKomentara: 0,
            korisniciZapreporuku: [],
            preporuceno: []
        }
    },
    methods:{
        preporuci(){
            let preporukaModal = new Modal(document.getElementById('preporukaModal'))
            preporukaModal.show()
        },
        preporuciKorisniku(kor){
            //alert('preporucio' + korisnik.korisnickoIme)
           let preporuka=0;
           let ind;
           this.preporuceno.forEach((prep,index)=>{
               if(prep.preporucenaKnjigaId==this.izabrana_knjiga.id && prep.username == kor.korisnik.korisnickoIme){
                   preporuka=1;
                   ind=index;
               }
           })
           if(preporuka == 1){
               //ako vec postoji preporuka za izabranu knjigu izabranom korisniku samo dodaj trenutnog korisnika u listu korisnika koji su preporucili
               //knjigu izabranom korisniku
               this.preporuceno[ind].korisnici.push(this.korisnik.korisnickoIme)

           }else{
               //izabranom korisniku niko nije preporucivao izabranu knjigu do sad
               this.preporuceno.push({
                   'id': this.preporuceno[this.preporuceno.length-1].id + 1,
                   'username': kor.korisnik.korisnickoIme,
                   'preporucenaKnjigaId': this.izabrana_knjiga.id,
                   'korisnici': [`${this.korisnik.korisnickoIme}`]
               })
           }
           localStorage.setItem('preporuke',JSON.stringify(this.preporuceno))
           kor.preporucio=1;
        },
        zatvori(){
            localStorage.setItem(`${this.korisnik.korisnickoIme}-${this.izabrana_knjiga.id}`, JSON.stringify(this.korisniciZapreporuku))
        },
        prikaziKomentare(){
            this.$router.push({path: "/kupac/detalji/komentari"})
        },
        oceni(){
            //alert(JSON.stringify(this.korisniciKomentari));
            let korisnikKomentar = this.korisniciKomentari.find(
                (korkom) => korkom.username == this.korisnik.korisnickoIme && korkom.id_knjige == this.izabrana_knjiga.id

            );
           // alert(JSON.stringify(korisnikKomentar));
            if(korisnikKomentar != null){
                alert("vec ocenjeno")
                
            }else{
            var ocenaModal = new Modal(document.getElementById('ocenaModal'))
            ocenaModal.show()}
        },
        izaberiOcenu(ocena){
            let izabranaOcena=0;
            switch(ocena){
               
                case 1: {
                     izabranaOcena=1;
                     break;}
                case 2: {izabranaOcena=2; break;}
                case 3: {izabranaOcena=3; break;}
                case 4: {izabranaOcena=4; break;}
                case 5: {izabranaOcena=5; break;}
            }
            this.korisnikKomentarOcena={
                'id': this.korisniciKomentari[this.korisniciKomentari.length-1].id + 1,
                'username' : this.korisnik.korisnickoIme,
                'id_knjige': this.izabrana_knjiga.id,
                'ocena': izabranaOcena,
                'komentar': "",
                'datum' : ""
            }
            this.korisniciKomentari.push(this.korisnikKomentarOcena)
            localStorage.setItem('korisniciKomentariOcene', JSON.stringify(this.korisniciKomentari))
            this.ocenio=1;

        }
    },
    mounted(){
        this.izabrana_knjiga=JSON.parse(localStorage.getItem('izabrana_knjiga'))
        this.korisnik=JSON.parse(localStorage.getItem('korisnik'))

        if(localStorage.getItem('korisniciKomentariOcene')!=null){
            this.korisniciKomentari=JSON.parse(localStorage.getItem('korisniciKomentariOcene'))
        }else{
            this.korisniciKomentari=korisniciKomentariOcene
        }
        this.korisnikKomentarOcena=this.korisniciKomentari.find(
            (korkomoc) => this.korisnik.korisnickoIme == korkomoc.username && this.izabrana_knjiga.id == korkomoc.id_knjige 
        )
        if(this.korisnikKomentarOcena == null){
            this.ocenio=0

        }else{
            this.ocenio=1
        }
        let komentariKnjige=[]
        this.korisniciKomentari.forEach(
            (kom) => { if(kom.id_knjige == this.izabrana_knjiga.id && kom.komentar != "") komentariKnjige.push(kom) }
        )
        this.ukupnoKomentara=komentariKnjige.length
        if(this.ukupnoKomentara>0){
            this.topComment=komentariKnjige[0]
        }else{
            this.topComment={

                'username': "No Name",
                'datum': 'xx.xx.xxxx.',
                'komentar': "Nema komentara za ovu knjigu",
                'ocena' : 0
            }
        }
        if(localStorage.getItem(`${this.korisnik.korisnickoIme}-${this.izabrana_knjiga.id}`)!= null){
            this.korisniciZapreporuku=JSON.parse(localStorage.getItem(`${this.korisnik.korisnickoIme}-${this.izabrana_knjiga.id}`))
        }else{
        korisnici.forEach(
            (korisnik) => {if(korisnik.korisnickoIme != this.korisnik.korisnickoIme && korisnik.tip == 0){
                    this.korisniciZapreporuku.push({'korisnik':korisnik, 'preporucio' : 0})
            }
            
            }
        )}
        if(localStorage.getItem('preporuke')!=null){
            
            this.preporuceno=JSON.parse(localStorage.getItem('preporuke'))
        }else{
            this.preporuceno=preporuke
        }
        


    }
}

</script>