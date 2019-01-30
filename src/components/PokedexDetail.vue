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
      el.style.transition = 'all .5s'
      if (this.isZoom) {
        el.style.top = '0'
        // el.style.height = '100%'
        e.target.style.transform = 'rotate(180deg)'
        document.body.style.overflow = 'hidden'
      } else {
        el.style.top = '40%'
        // el.style.height = '50%'
        e.target.style.transform = 'rotate(0deg)'
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
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
}
.poke-detail-back {
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  position: fixed;
  background-color:rgba( 255, 255, 255, 0.7 );
  display: flex;
  justify-content: center;
  button {
    transition: all .5s;
    position:relative;
    top: -50px;
    align-self: flex-start;
    font-size: 2rem;
    margin: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
  }
}
.poke-detail-back:hover {
  button {
    top: 0;
    display: block;
  }
}
.poke-detail-wrapper {
  z-index: 4;
  top: 40%;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color:#FDFCFD;
  position: fixed;
}
.poke-detail-view {
  max-width: 37.5rem;
  max-height: 30rem;
  margin: 3rem auto;
  background-color:rgba( 255, 255, 255, 0.7 );
  overflow-y: scroll;
}
.poke-detail-init {
  display: flex;
  justify-content: center;
  position: relative;
}

.poke-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.poke-detail-title {
  h3 {
    display: inline-block;
    margin: 0;
    font-size: 2rem;
  }
  h4 {
    display: inline-block;
    margin: 0;
  }
}
.poke-detail-tag {
  margin: 10px;
}
.poke-type-tag {
  color: #FDFCFD;
  display: inline-block;
  span {
    padding: 5px;
    margin-right: 5px;
  }
}

.poke-img {
  display: flex;
  flex-direction: column;
}

.poke-image {
  display: inline-block;
  margin: 10px;
  img {
    width: 12rem;
  }
}

.poke-img-chang-btn {
  position: absolute;
  margin: 0px;
  button {
    margin: 10px;
    font-size: 1.3rem;
    opacity: .6;
  }
  button:hover {
    opacity: 1;
  }
}

.poke-detail-addinfo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.poke-add {
  margin: 10px 2rem;
  border: 1px solid rgba( 255, 255, 255, 0.7 );
  background-color: #FDFCFD;
  border-radius: 15px;
}

.poke-detail-profile {
  display: flex;
  justify-content: center;
  ul {
    padding: 0;
    width: 90%;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
  }
  li {
    display: inline-block;
  }
}

.zoom-enter-active,
.zoom-leave-active {
  transition: all .5s
}

.btn-zoom {
  transition: all .3s;
  text-align: center;
  button {
    z-index: 10;
    transition: all .5s;
    height: 30px;
    width: 30px;
    font-size: 1.5rem;
  }
}
.btn-zoom:hover {
  background-color:rgba( 255, 255, 255, 0.7 );
}
</style>
