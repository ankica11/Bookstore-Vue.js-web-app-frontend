<template>
<div id="knjiga-wrapper">

    
<div class="knjiga_img">
    
        <img  :src="'/image/'+knjiga.slika" style="width: 150px">
        
        
        
    
</div>
<div class="podaci">
    <h5 style="font-weight: bold">{{knjiga.naziv}}</h5>
    <h6>{{knjiga.autor}}</h6>
</div>
<img src="../assets/star.png" class="star-class" v-if="knjiga.na_promociji==1">
</div>
</template>

<script>
export default {
    name: 'Knjiga',
    props: [
        'knjiga'
    ]
}
</script>
<style>
.knjiga-img{
display: flex;
margin-bottom: 5px;
text-align: center;
min-height: 235px;
align-items: center;
justify-content: center;


}
.podaci{
text-align: center;
word-wrap: normal;
margin-top: 10px;
font-family: 'SansSerif';
}
.star-class{
    width: 35px;
    top: 0px;
    right: 0px;
    
    
    
}
</style>