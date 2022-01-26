<template>
    <div id="nalog-kupac">
        <NavigacijaKupac></NavigacijaKupac>
        <br><br>
        <Nalog></Nalog>
       
        <!-- komponenta zajednickog naloga -->
  
    </div>
</template>
<script>
import NavigacijaKupac from '../components/NavigacijaKupac.vue'
import Nalog from '../components/Nalog.vue'
export default{
    name: 'NalogKupac',
    components: {NavigacijaKupac, Nalog}
}
</script>
<style>
#nalog-kupac{
    height: 100%;
    


}
</style>