<template>
    <div id="detalji">
        <h2>{{izabranProizvod.naziv}}</h2>
        <p>{{izabranProizvod.opis}}</p>
        <b>{{izabranProizvod.ocena}}</b>
    </div>
</template>


<script>
import proizvodi from '../data/proizvodi.js'
    export default{
        name: 'DetaljiProizvoda',
        data(){
            return{
                //svi podaci komponente tj kao polja u ts fajlu angulara
                sviProizvodi : proizvodi,
                izabranProizvod: {}
            }
        },
        mounted(){
            //pri ucitavanju i inicijalizaciji komponente se izvrsava
            //izvrsava se pri kreiranju kao konstruktor neki ili oninit u angularu
            let id = Number(this.$route.params.id);
            let proizvod = this.sviProizvodi.find(pr=>pr.id==id);
            this.izabranProizvod=proizvod;
        }

    }
</script>