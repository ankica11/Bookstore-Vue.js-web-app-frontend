<template>
    <div id="preporucenaKnjiga">
        <div class="preporucena-img" >
            <a @click="prikaziDetalje(preporucena.knjiga)">
            <img  :src="'/image/'+preporucena.knjiga.slika" style="width: 150px" data-bs-toggle="tooltip" data-bs-placement="right" :title='preporucena.knjiga.naziv + ", " + preporucena.knjiga.autor'>
            </a>
        </div>
        <div class="korisnici" v-if="preporucena.preporuka.korisnici.length>0" data-bs-toggle="tooltip" data-bs-placement="top" :title='preporucena.preporuka.korisnici'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" style="color: #2346F5" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>&nbsp;
           <span v-if="preporucena.preporuka.korisnici.length==1">{{preporucena.preporuka.korisnici[0]}}</span>
           <span v-if="preporucena.preporuka.korisnici.length==2">{{preporucena.preporuka.korisnici[0]}}, {{preporucena.preporuka.korisnici[1]}}</span>
           <span v-if="preporucena.preporuka.korisnici.length>2">{{preporucena.preporuka.korisnici[0]}}, {{preporucena.preporuka.korisnici[1]}} i još {{preporucena.preporuka.korisnici.length-2}}</span>
        </div>

    </div>
</template>
<script>
export default {
    name: 'PreporucenaKnjiga',
    props: [
        'preporucena'
    ],
    methods: {
        prikaziDetalje(knjiga){
          localStorage.setItem('izabrana_knjiga',JSON.stringify(knjiga))
          this.$router.push({path:"/kupac/detalji"})
        }
    }
}
</script>

<style>
.preporucena-img{
display: flex;
margin-bottom: 5px;
text-align: center;
min-height: 235px;
align-items: center;
justify-content: center;

}

.korisnici{
text-align: center;
word-wrap: normal;
margin-top: 10px;
font-family: 'Arial';
font-weight: bold;
font-size: 14px;
margin-bottom: 20px;
}
</style>