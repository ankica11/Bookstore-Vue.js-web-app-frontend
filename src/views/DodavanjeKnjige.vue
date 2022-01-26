<template>
<div class="dodavanjeKnjige">
    <NavigacijaProdavac></NavigacijaProdavac>
    <br><br><br><br>
    <br><br><br>
    <div class="pozadinawrapp">
    <div class="pozadina">
    <div class="container addbook" style="padding:0px">
        <div class="row mx-auto " style="width:100%">
            
           
          <div class="col-sm-6" style="padding:0px">
          </div>
        
          <div class="col-sm-6" style="padding: 0px"> 
          
              <div class="card mx-auto" style="width: 100%; ">
                          <!--<img src="../assets/perce9.jpg" class="card-img-top mx-auto" style=" height: 200px; width:300px;"> -->
                          <div class="card-body">
                            <br><span style="color: red">{{message}}</span><br><br>
                           
                            <!--<h5 class="card-title" style="font-weight: bold; font-size: 30px;padding-bottom: 20px; font-family: SansSerif; color: grey">Nova knjiga</h5> -->
                            <div class="row">
                                <div class="col-sm-7">
                                  <form class="was-validated">
                                  <div class="mb-3">
                                  
                                  <input type="text" id="naslov" class="form-control" name="naslov" v-model="naslov" placeholder="Naslov" style="opacity: 0.7" required>
                                  
                                  </div>
                                 
                                  <div class="mb-3">
                                  <input type="text" id="autor" class="form-control" name="autor" v-model="autor" placeholder="Autor" style="opacity: 0.7" required>
                                  </div>
                                  <div class="mb-3">
                                  <input type="text" id="godina" class="form-control" name="godina" v-model="godinaIzdanja" placeholder="Godina izdanja" style="opacity: 0.7" required>
                                  </div>
                                  <div class="mb-3">
                                  <input type="text" id="strane" class="form-control" name="brstrana" v-model="brojStrana" placeholder="Broj strana" style="opacity: 0.7" required>
                                  </div>
                                    <div class="mb-3 form-check form-switch">
                                    <input class="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" name="napromociji" v-model="naPromociji">
                                    <label class="form-check-label" for="flexSwitchCheckDefault" style="opacity: 0.7; color: black">Stavi na promociju</label>
                                    </div>
                                
                                  <div class="mb-2">
                                      <textarea class="form-control" id="opis" name="opis" v-model="opis" rows="3" placeholder="Opis" style="opacity: 0.7" required></textarea>
                                  </div>
                                  </form>
                                </div>
                                
                                <div class="col-sm-1"></div>
                                <div class="col-sm-4">
                                    <div class="card" style="height:10rem; width:100%; background-color: rgba(255,255,255,0.6); padding: 0px">
                                        <div class="card-body centerModal" style="padding: 0px">
                                            <button @click="dodajSliku()" style="border: 0px">
                                            <img src="../assets/addimg.png" id="nova_slika" style="height: 30px; width: 30px; inline: block;" class="align-middle">
                                            </button>
                                        </div>
                                  </div>
                                </div>
                            </div><br><br><br>
                            <div class="row">
                                <div class="col">
                                    <div class="d-grid gap-2">
                              <button class="btn btn-primary btn-block" style="opacity: 0.8" @click="dodajKnjigu()">Dodaj</button>
                              </div><br>
                             
                                </div>
                            </div> 
                            
                         </div>
                         
              </div>
        </div>

      </div>
    </div>
   
    <br><br><br>
    </div>
    </div>


<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-family: SansSerif; font-size: 1.5rem">
        Knjiga je uspešno dodata!<br>
        <span style="font-size:1rem">Možete je pogledati u sekciji "Svi naslovi"</span>
      </div>
      <div class="modal-footer mx-auto">
        
        <button type="button"  class="btn btn-primary" data-bs-dismiss="modal">U redu</button>
        
      </div>
    </div>
  </div>
</div>

<!-- Modal galerija -->
<div class="modal fade" id="galerija" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="galerijaLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
       <h4 class="modal-title" >Izaberi sliku</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="max-height: 500px">
        <div class="container-fluid mx-auto">
        <div class="row mx-auto" style="padding: 20px">
          <div class="col-sm-4" v-for="slika in slike" :key=slika.id style="padding: 10px">
          <button type="submit" @click="potvrdiSliku(slika.naziv)" data-bs-dismiss="modal" style="border: 0px">
          
               <img  :src="'/image/'+slika.naziv" style="width: 100px">
          </button>
        
          </div>
        </div>
      </div>
      </div>
      
      
      <div class="modal-footer mx-auto">
        
        <button type="button"  class="btn btn-primary" data-bs-dismiss="modal">Zatvori</button>
        
      </div>
    </div>
  </div>
</div>




    
</div>

</template>
<style>
html, body{
    height: 100%;
}
.dodavanjeKnjige{
    
    height: 70%;
    


    
}
.pozadinawrap{
   display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
}
.pozadina {
    height: 100%;
}
  .move-left {
    width: auto;
    box-shadow: none;
    
  }
  .centerModal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;}

   .closeModal{
    width: 100%;
    background-color: lightgray;
    text-align: right;
  }
  .addbook .card { background-color: rgba(245, 245, 245, 0.6); }

  .addbook{
    background-image: url("../assets/f13.jpg");
    background-size: cover;
    min-height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
   
    width: 45%;
 }

  

  

</style>

<script>
import NavigacijaProdavac from '../components/NavigacijaProdavac.vue'
import knjige from '../data/knjige.js'
import {Modal} from 'bootstrap'
import slike from '../data/slike.js'
 

    export default{
        name: 'DodavanjeKnjige',
        components: {NavigacijaProdavac},
        data () {
            return{
                naslov: "",
                autor: "",
                godinaIzdanja: "",
                brojStrana: "",
                opis: "",
                naPromociji: "",
                slika: "",
                sveKnjige: [],
                slike: [],
                message: ""
            }
        },
        methods:{
            dodajKnjigu(){
                //alert(this.naslov+this.autor+this.godinaIzdanja+this.brojStrana+this.opis+this.naPromociji);
                let naslov = document.getElementById('naslov')
                let autor= document.getElementById('autor')
                let godina = document.getElementById('godina')
                let strane = document.getElementById('strane')
                let opis = document.getElementById('opis')
                let valid=naslov.checkValidity() && autor.checkValidity() && godina.checkValidity() && strane.checkValidity() && opis.checkValidity();
                if(!valid){
                  
                 this.message="Popunite sva polja!"
                
                }else{
                this.sveKnjige.push({
                    'id' : this.sveKnjige[this.sveKnjige.length-1].id+1,
                    'naziv' : this.naslov,
                    'autor' : this.autor,
                    'godina_izdanja' : this.godinaIzdanja,
                    'broj_strana' : this.brojStrana,
                    'opis' : this.opis,
                    'na_promociji' : ((this.naPromociji==true) ? 1 : 0),
                    'slika' : (this.slika=="") ? 'book13a.jpg' : this.slika,
                    'prosecna_ocena' : 0
                })

                //alert(JSON.stringify(this.sveKnjige));
                localStorage.setItem('knjige',JSON.stringify(this.sveKnjige));

                this.naslov="";
                this.autor="";
                this.godinaIzdanja="";
                this.brojStrana="";
                this.opis="";
                this.naPromociji=false;
                this.slika="";
                this.message="";
                document.getElementById('nova_slika').src="/image/addimg.png";
                document.getElementById('nova_slika').style="height: 30px; width: 30px; inline: block;"

                //notify of success in new window
                //this.$modal.show('dodavanjeKnjigeModal')
                var myModal = new Modal(document.getElementById('staticBackdrop'))
                myModal.show()
                }
            },
            dodajSliku(){
                var galerijaModal=new Modal(document.getElementById('galerija'))
                galerijaModal.show()

                
            },
            potvrdiSliku(naziv){
              //alert(naziv);
              let slika=document.getElementById('nova_slika');
              slika.src=`/image/${naziv}`;
              slika.style="height: 150px; inline: block"
              this.slika=naziv;

            },
            potvrdi(){
                alert('radi');
                var myModal = new Modal(document.getElementById('staticBackdrop'))
                myModal.hide()
                
                
               
               
            }

        },
        mounted(){
            if(localStorage.getItem('knjige')!=null){
                this.sveKnjige=JSON.parse(localStorage.getItem('knjige'));
            }else{
                this.sveKnjige=knjige;
            }
            this.slike=slike;
        }
    }
</script>