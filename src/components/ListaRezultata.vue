<template>
<div class="container">
    <div class="row mx-auto">
        <div class="col-sm-2" v-for="r in rezultatPretrage" :key="r.id">
            <RezultatKnjiga :knjiga="r"></RezultatKnjiga>
        </div>
    </div>
</div>

</template>

<script>
import RezultatKnjiga from '../components/RezultatKnjiga.vue'
export default {
    name: 'ListaPreporuka',
    components: {RezultatKnjiga},
    data(){
        return{
            rezultatPretrage: [],
            pretraga: ""
        }
    },
    mounted(){
        this.rezultatPretrage=JSON.parse(localStorage.getItem('rezultat_pretrage'))
        this.pretraga=JSON.parse(localStorage.getItem('pretraga'))
    }
}
</script>
    
