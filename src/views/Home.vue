<template>
  <div class="home centarModal">
    <Navigacija></Navigacija>
    <br>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-5 col-xs-2" style="padding: 40px; text-align: left">
          <h1 style="font-size: 4rem; font-family: SansSerif">
            Knjižara Perce
          </h1>
          <p style="font-size: 1.5rem; font-family: SansSerif; text-align: justify">
            Nudimo vam veliki izbor knjiga, različitih žanrova i autora, za
            svačiji ukus ponešto se nađe. Dragi naši verni Percaroši, za vas smo
            pripremili i puno naslova na promociji. Provedite praznike čitajući
            knjige iz našeg pera i garantujemo da za vas nema zime!
          </p>
        </div>
        <div class="col col-lg-4 col-md-5 col-xs-2" style="padding: 1rem">
          <img src="../assets/headerBooks2.jpg" style="height: 18.75rem" />
        </div>
      </div>
      <br>
     <hr>
     <br>
     <br>
      <div class="row" style="padding: 30px">
        <div class="col" style="padding: 30px">
          <img src="../assets/login1.png" style="height: 400px"/>
        </div>
        <div class="col">
          <div class="card" style="width: 30rem;">
            <img src="../assets/login.png" class="card-img-top mx-auto" style=" height: 150px; width:150px;">
            <div class="card-body">
              <h5 class="card-title" style="font-weight: bold; font-size: 30px;padding-bottom: 20px;">Prijava</h5>
              <span style="color: red">{{message}}</span><br><br>
              <div class="mb-3">
              <input type="text" class="form-control" name="username" v-model="korisnickoime" placeholder="Korisničko ime"><br>
              </div>
              <div class="mb-3">
              <input type="password" class="form-control" name="password" v-model="lozinka" placeholder="Lozinka"><br>
              </div>
              <div class="d-grid gap-2">
              <button class="btn btn-primary btn-block" @click="potvrdiPrijavu()">Prijavi se</button>
              </div>
             
            </div>
          </div>
        </div>

      </div>
  
    </div>
    <br><br><br><br>

    

    <br />

    <modal name="prijavaModal">
      <div class="closeModal">
        <button @click="$modal.hide('prijavaModal')">x</button>
      </div>
      <div class="centerModal">
        {{korisnickoime}}<br>
        {{lozinka}}
      </div>
    </modal>
  </div>
</template>
<style>
.closeModal {
  width: 100%;
  background-color: rgb(64, 199, 165);
  text-align: right;
}
.centerModal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

<script>
import korisnici from "../data/korisnici.js";
import Navigacija from "../components/Navigacija.vue"
// @ is an alias to /src

export default {
  name: "Home",
  components: {Navigacija},
  data() {
    return {
      korisnickoime: "",
      lozinka: "",
      message: "",
      korisnici:[]
    };
  },
  methods: {
    login() {
      this.$modal.show("prijavaModal");
    },
    potvrdiPrijavu() {
      let korisnik = this.korisnici.find(
        (kor) => kor.korisnickoIme == this.korisnickoime && kor.lozinka == this.lozinka
      );
      if(korisnik==null){
        //pogresni kredencijali
        this.message="Pogrešno korisničko ime ili lozinka"
        this.lozinka=""

      }else{
      //alert (JSON.stringify(korisnik));
      localStorage.setItem("korisnik",JSON.stringify(korisnik))
      if (korisnik.tip == 1) {
        //admin
        this.$router.push("prodavac");
      } else {
        //korisnik
        this.$router.push("kupac");
      }
      }
    },
  },
  mounted(){
    if(localStorage.getItem('korisnici')!=null){
      this.korisnici=JSON.parse(localStorage.getItem('korisnici'))
    }else{
      this.korisnici=korisnici
    }
  }
};
</script>
