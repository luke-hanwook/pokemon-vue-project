<template>
  <div class="poke-detail-container">
    <div class="poke-detail-back">
      <button @click="onClose" class="btn btn-close">&#x2715;</button>
    </div>

    <div class="poke-detail-wrapper" ref="pokeDetail">
      <div class="btn-zoom">
        <button @click="onZoom" class="btn">&#x25B4;</button>
      </div>

      <div class="poke-detail-view">
        <div class="poke-detail-init">
          <div class="poke-img">
            <div class="poke-img-chang-btn">
              <button class="btn" @click="isShiny = !isShiny">&#x2728;</button>
            </div>
            <div class="poke-image">
              <img :src="pokemon.front_shiny" alt="" v-if="isShiny">
              <img :src="pokemon.front_default" alt="" v-else>
            </div>
          </div>

          <div class="poke-content">
            <div class="poke-detail-title">
              <h3>{{pokemon.name}}</h3>
              <h4>#{{pokemon.id}}</h4>
            </div>

            <div class="poke-detail-tag">
              <div v-for="type in pokemon.type" :key="type.name" class="poke-type-tag">
                <span :style="`background-color: ${type.color}`">
                  {{type.name}}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="poke-detail-addinfo" v-if="show">
          <div class="poke-add poke-detail-profile">
            <ul>
              <li><strong>height: </strong>{{pokemon.height}}m</li>
              <li><strong>weight: </strong>{{pokemon.weight}}kg</li>
              <li><strong>abilities: </strong>{{abilites}}</li>
            </ul>
          </div>
          <PokemonSpecies :id="pokemon.id" :speciesUrl="pokemon.species.url"/>
          <evolutionChain />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PokemonSpecies from './PokemonSpecies.vue'
import evolutionChain from './EvolutionChain.vue'

export default {
  props: ['id'],
  components: { PokemonSpecies, evolutionChain },
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
    abilites () {
      return this.pokemon.abilities.join()
    }

  },
  created () {
    this.FETCH_POKEMON({id: this.id})
  },
  updated () {
    if (this.pokemon.type.length > 1) {
      this.$refs.pokeDetail.style.background = `linear-gradient(90deg, ${this.pokemon.type[0].color} 50%, ${this.pokemon.type[1].color} 50%)`
      // document.style.background = `linear-gradient(90deg, ${color[this.pokemon.type[0]]} 50%, ${color[this.pokemon.type[1]]} 50%)`
    } else {
      this.$refs.pokeDetail.style.background = this.pokemon.type[0].color
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
      const el = document.querySelector('.poke-detail-wrapper')
      const detailViewEl = document.querySelector('.poke-detail-view')
      // overflow-y: scroll;
      el.style.transition = 'all .5s'
      if (this.isZoom) {
        el.style.top = '0'
        // el.style.height = '100%'
        e.target.style.transform = 'rotate(180deg)'
        document.body.style.overflow = 'hidden'
        detailViewEl.style.overflowY = 'scroll'
        detailViewEl.classList.add('poke-detail-view-zoom')
      } else {
        el.style.top = '40%'
        // el.style.height = '50%'
        e.target.style.transform = 'rotate(0deg)'
        document.body.style.overflow = ''
        detailViewEl.style.overflowY = 'hidden'
        detailViewEl.classList.remove('poke-detail-view-zoom')
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
