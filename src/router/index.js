import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detaljiProizvoda/:id',
    name: 'DetaljiProizvoda',
    component: () => import('../views/DetaljiProizvoda.vue')
  },
  {
    path: '/prodavac',
    name: 'Prodavac',
    component: () => import('../views/Prodavac.vue')
  },
  {
    path: '/prodavac/pocetna',
    name: 'ProdavacPocetna',
    component: () => import('../components/ProdavacPocetna.vue')
  },
  {
    path: '/prodavac/dodajKnjigu',
    name: 'DodavanjeKnjige',
    component: () => import('../views/DodavanjeKnjige.vue')
  },
  {
    path: '/prodavac/nalog',
    name: 'NalogProdavac',
    component: () => import('../views/NalogProdavac.vue')
  },
  {
    path: '/kupac',
    name: 'KupacPocetna',
    component: () => import('../views/KupacPocetna.vue')
  },
  {
    path: '/kupac/preporuceno',
    name: 'Preporuceno',
    component: () => import('../views/Preporuceno.vue')
  },
  {
    path: '/kupac/nalog',
    name: 'NalogKupac',
    component: () => import('../views/NalogKupac.vue')
  },
  {
    path: '/kupac/detalji',
    name: 'Detalji',
    component: () => import('../views/Detalji.vue')
  },
  {
    path: '/kupac/detalji/komentari',
    name: 'Komentari',
    component: () => import('../views/Komentari.vue')
  },
  {
    path: '/prodavac/rezultat',
    name: 'Rezultat',
    component: () => import('../views/RezultatPretrage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
