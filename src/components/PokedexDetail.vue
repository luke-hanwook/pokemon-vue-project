<template>
  <div class="poke-detail-container" ref="pokeDetail">
    <button @click="onZoom">zoom in</button>
    <button @click="onClose">close</button>
    <div class="poke-detail-view">
      <div class="poke-detail-title">
        <h3>{{pokemon.name}}</h3>
        <h4>#{{pokemon.id}}</h4>
      </div>

      <div class="poke-detail-init">
        <div v-for="type in pokemon.type" :key="type">
          <span>
            {{type}}
          </span>
        </div>

        <div class="evolution-img">
          <img :src="pokemon.front_shiny" alt="" v-if="isShiny">
          <img :src="pokemon.front_default" alt="" v-else>
        </div>

        <button @click="isShiny = false">default</button>
        <button @click="isShiny = true">shiny</button>
      </div>

      <div class="poke-detail-addinfo" v-if="show">
        <div class="poke-detail-profile">
          <ul>
            <li><strong>height: </strong>{{pokemon.height}}m</li>
            <li><strong>weight: </strong>{{pokemon.weight}}kg</li>
            <li><strong>abilities: </strong>{{pokemon.abilities}}</li>
          </ul>
        </div>
        <PokemonSpecies :id="pokemon.id" :speciesUrl="pokemon.species.url"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import color from '../models/PokemonColor.js'
import PokemonSpecies from './PokemonSpecies.vue'

export default {
  props: ['id'],
  components: { PokemonSpecies },
  data () {
    return {
      isZoom: false,
      show: false,
      isShiny: false
    }
  },
  computed: {
    ...mapState({
      pokemon: 'pokemon',
      pokemonColor: '#FDFCFD'
    }),
    imageSprites () {
      return this.pokemon.sprites['front_default']
    }
  },
  created () {
    this.FETCH_POKEMON({id: this.id})
  },
  updated () {
    if (this.pokemon.type.length > 1) {
      this.$refs.pokeDetail.style.background = `linear-gradient(90deg, ${color[this.pokemon.type[0]]} 50%, ${color[this.pokemon.type[1]]} 50%)`
      // document.style.background = `linear-gradient(90deg, ${color[this.pokemon.type[0]]} 50%, ${color[this.pokemon.type[1]]} 50%)`
    } else {
      this.$refs.pokeDetail.style.background = color[this.pokemon.type[0]]
      // document.style.background = color[this.pokemon.type[0]]
    }
  },
  watch: {
    id (arg) {
      this.FETCH_POKEMON({id: arg})
    }
  },
  methods: {
    ...mapActions([
      'FETCH_POKEMON'
    ]),
    onClose () {
      this.$router.push('/')
      document.body.style.overflow = ''
    },
    onZoom (e) {
      this.show = !this.show
      this.isZoom = !this.isZoom
      const el = document.querySelector('.poke-detail-container')
      el.style.transition = 'all .5s'
      if (this.isZoom) {
        el.style.top = '0'
        // el.style.height = '100%'
        e.target.innerHTML = 'zoom out'
        document.body.style.overflow = 'hidden'
      } else {
        el.style.top = '50%'
        // el.style.height = '50%'
        e.target.innerHTML = 'zoom in'
        document.body.style.overflow = ''
      }
    },
    leave (el, done) {
      console.log('leave', el)
    },
    enter (el, done) {
      console.log('enter', el)
    }
  }
}
</script>

<style lang="scss">
.poke-detail-container {
  top: 50%;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color:#FDFCFD;
  position: fixed;
}
.poke-detail-view {
  max-width: 50rem;
  margin: auto;
  background-color:#FDFCFD;
}
.zoom-enter-active,
.zoom-leave-active {
  transition: all .5s
}
.evolution-img {
  display: inline;
}
.evolution-img img {
  border: 1px solid black;
}
</style>
