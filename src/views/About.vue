<template>
  <div class="about">
    <Navigacija></Navigacija>
    <br>
    <br>
    <br>
    <br>
    <br>
   
  <div class="container">
    <div class="row">
      <div class="col-sm-1">

      </div>
      <div class="col-sm-5"  style="padding: 30px; text-align: left">
        <h1 style="font-size: 4rem; font-family: SansSerif">
            O nama
          </h1>
          <p style="font-size: 1.3rem; font-family: SansSerif; text-align: justify">
            Perce postoji već 20 godina. Naš lanac knjižara obuhvata više od 100
            objekata širom Srbije. Ove godine dostigli smo neverovatnu brojku od 500.000
            vernih članova čitalaca. Veliki doprinos našem razvoju 
            u poslednjih 5 godina ostvarila je i naša rado i često posećena web aplikacija.
            Svakako ništa od ovoga ne bi bilo moguće da nije našeg velikog i složnog
            tima, koji čine kako rukovodstvo, menadžeri, marketing stručnjaci, tako i 
            veliki broj radnika u knjižarama na 100 različitih lokacija. Hvala vam na poverenju
            i drago nam je što ste toliko godina i vi deo naše male bajke!
            <br>
            <br>
            Vaše Perce
          </p>
      </div>
      <div class="col-sm-5" style="text-align: center">
        <img src="../assets/perce4.jpg" style="height: 500px; padding: 40px;" />
      </div>
    </div>
  </div>
   
  </div>
</template>
<script>
import Navigacija from "../components/Navigacija.vue"
   export default{
     name: 'About',
     components: {Navigacija}
   }
</script>
