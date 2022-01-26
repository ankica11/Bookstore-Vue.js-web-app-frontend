<template>
<div id="knjiga-rezultat">
<div class="knjiga_rezultat">
    
        <img  :src="'/image/'+knjiga.slika" style="width: 150px">
        
    
</div>
<div class="podaci-rezultat">
    <h5 style="font-weight: bold">{{knjiga.naziv}}</h5>
    <h6>{{knjiga.autor}}</h6>
    
    <button v-if="knjiga.na_promociji==0" type="button" @click="staviNaPromociju()" style="border: 0px; background-color: white" data-bs-toggle="tooltip" data-bs-placement="right" title='Stavi na promociju'>
    <svg  xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="40" height="40" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
    </svg>
    </button>

    <button v-if="knjiga.na_promociji==1"  type="button" @click="skiniSaPromocije()" style="border: 0px; background-color: white" data-bs-toggle="tooltip" data-bs-placement="right" title="Skini sa promocije">
    <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="40" height="40" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    </button>

</div>
</div>
</template>

<script>
import knjige from '../data/knjige.js'
export default {
    name: 'RezultatKnjiga',
    data(){
        return{
            sveKnjige:[]
        }
    },
    props: [
        'knjiga'
    ],
    methods: {
        staviNaPromociju(){
            this.knjiga.na_promociji=1
            this.sveKnjige.forEach((k)=>{
                if(k.id==this.knjiga.id) k.na_promociji=1;
            })
            localStorage.setItem('knjige',JSON.stringify(this.sveKnjige))
        },
        skiniSaPromocije(){
            this.knjiga.na_promociji=0
           this.sveKnjige.forEach((k)=>{
                if(k.id==this.knjiga.id) k.na_promociji=0;
            })
            localStorage.setItem('knjige',JSON.stringify(this.sveKnjige))
        }
    },
    mounted(){
        if(localStorage.getItem('knjige')!=null){
            this.sveKnjige=JSON.parse(localStorage.getItem('knjige'))
        }else{
            this.sveKnjige=knjige
        }

    }
}
</script>
<style>
.knjiga-rezultat{
display: flex;
margin-bottom: 5px;
text-align: center;
min-height: 235px;
align-items: center;
justify-content: center;

}
.podaci-rezultat{
text-align: center;
word-wrap: normal;
margin-top: 10px;
font-family: 'SansSerif';
}
</style>