<template>
    <div id='listaProizvoda'>
        <div class='row justify-content-center'>
            <div class='col-sm-3' v-for="proizvod in proizvodi" :key="proizvod.id">
                <router-link :to='/detaljiProizvoda/+proizvod.id'>
                     <Proizvod :pr="proizvod"></Proizvod>
                </router-link>
               
                
            </div>
            
        </div>
    </div>
</template>

<script>
import Proizvod from './Proizvod.vue'

export default{
    name: 'ListaProizvoda',
    components: {
        Proizvod
    },
    data(){
        return{
            proizvodi: [
                {
                    id: 1,
                    naziv: 'Pedigree',
                    cena: '1000din',
                    opis: 'For young adults',
                    slika: 'img1.png',
                    ocena: 5
                },
                {
                    id: 2,
                    naziv: 'Pedigree',
                    cena: '3000din',
                    opis: 'For adults',
                    slika: 'img2.png',
                    ocena: 5
                },
                {
                    id: 3,
                    naziv: 'Meow Mix',
                    cena: '1000din',
                    opis: 'Chicken',
                    slika: 'img1.png',
                    ocena: 5
                },
                {
                    id: 4,
                    naziv: 'Meow Mix',
                    cena: '1200din',
                    opis: 'For young adults',
                    slika: 'img2.png',
                    ocena: 3
                },
                 {
                    id: 5,
                    naziv: 'Pedigree',
                    cena: '1000din',
                    opis: 'For young adults',
                    slika: 'img1.png',
                    ocena: 2
                },
                {
                    id: 6,
                    naziv: 'Pedigree',
                    cena: '3000din',
                    opis: 'For adults',
                    slika: 'img2.png',
                    ocena: 1
                },
                {
                    id: 7,
                    naziv: 'Meow Mix',
                    cena: '1000din',
                    opis: 'Chicken',
                    slika: 'img1.png',
                    ocena: 5
                },
                {
                    id: 8,
                    naziv: 'Meow Mix',
                    cena: '1200din',
                    opis: 'For young adults',
                    slika: 'img2.png',
                    ocena: 5
                }
            ]
        }
    }
   
}
</script>
