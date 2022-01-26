<template>
<div id="nalog-prodavac">
    <NavigacijaProdavac></NavigacijaProdavac>
    <br><br>
    <Nalog></Nalog>
</div>
</template>
<script>
import NavigacijaProdavac from  '../components/NavigacijaProdavac.vue'
import Nalog from '../components/Nalog.vue'
export default{
    name: 'NalogProdavac',
    components: {NavigacijaProdavac, Nalog}
}
</script>
<style>
#nalog-prodavac{
    height: 100%;
    


}
</style>