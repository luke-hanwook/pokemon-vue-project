<template>
    <div class="poke-add poke-description">
      <Loading v-if="isLoading"/>
      <div class="poke-description-wrapper" v-else>
        <div class="poke-genera">
          <p>{{pokemonDetail.genera}}</p>
          <div class="poke-generation">
            <span>{{pokemonDetail.generation}}</span>
          </div>
        </div>

        <div class="poke-text">
          <p>{{pokemonDetail.flavor_text_entries}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: [ 'id', 'speciesUrl' ],
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState({
      pokemonDetail: 'pokemonDetail'
    })
  },
  created () {
    this.fetchPokemonDetail(this.speciesUrl)
  },
  methods: {
    ...mapActions([
      'FETCH_POKEMON_DETAIL'
    ]),
    fetchPokemonDetail (url) {
      if (this.id !== this.pokemonDetail.id) {
        this.isLoading = true
        this.FETCH_POKEMON_DETAIL({url}).finally(_ => {
          this.isLoading = false
        })
      }
    }
  }
}
</script>

<style lang="scss">
p {
    margin: 0;
}
.poke-description {
  display: flex;
  justify-content: center;
}
.poke-description-wrapper {
  width: 90%;
  margin: 1rem;
}
.poke-genera {
  display: inline-block;
  display: flex;
  align-items: center;
  p {
    font-size: 1.2rem;
    font-weight: 900;
  }
}
.poke-generation {
  display: inline-block;
  margin: 10px;
  border: .5px solid rgb(107, 107, 107);
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .1), 0 1px 0 rgba(0, 0, 0, .1);
  span {
    margin: 5px;
  }
}
</style>
