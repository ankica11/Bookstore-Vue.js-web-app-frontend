<template>
<div id="preporuceno">
<NavigacijaKupac></NavigacijaKupac>
<br/><br/>
<div class="container">
    <div class="row">
        <div class="col">
            <img src="../assets/recom.jpg" style="width: 35%">
        </div>
        
    </div>
    <div class="row">
        <div class="col">
            <ListaPreporuka></ListaPreporuka>
        </div>
       
    </div>
</div>


</div>
</template>
<script>
import NavigacijaKupac from '../components/NavigacijaKupac.vue'
import ListaPreporuka from '../components/ListaPreporuka.vue'
export default{
    name: 'Preporuceno',
    components: {NavigacijaKupac, ListaPreporuka}
}
</script>