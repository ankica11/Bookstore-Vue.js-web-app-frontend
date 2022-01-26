<template>
    <div id='proizvod'>
        <div class='card text-center'>
            <img class='card-img-top' :src="'/image/'+pr.slika">
            <div class='card-body'>
                <h4>{{pr.naziv}}</h4>
                <h6>{{pr.cena}}</h6>
                <p>{{pr.opis}}</p>
            </div>
        </div>
    </div>
</template>
<style>
    img{
        width: 50%;
        
        
    }


</style>

<script>
    export default{
        name: 'Proizvod',
        props: [
            'pr'
        ]
    }
</script>