import Vue from 'vue'
import Router from 'vue-router'
import Pokedex from '@/components/Pokedex.vue'
import PokedexDetail from '@/components/PokedexDetail.vue'
// import NotFoundComponent from '@/components/NotFoundComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Pokedex,
      children: [
        {
          path: '/pokemon/:id',
          component: PokedexDetail,
          props: true
        }
      ]
    }
  ]
})
