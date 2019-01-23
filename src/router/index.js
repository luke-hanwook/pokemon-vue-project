import Vue from 'vue'
import Router from 'vue-router'
import Pokedex from '@/components/Pokedex.vue'
// import PokedexDetail from '@/components/PokedexDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Pokedex
    }
  ]
})
