<template>
    <div>
      <div>
        {{pokemonDetail.generation}}
      </div>

      <div>
        <p>{{pokemonDetail.genera}}</p>
        <p>{{pokemonDetail.flavor_text_entries}}</p>
      </div>

      <evolutionChain />
    </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import evolutionChain from './EvolutionChain.vue'

export default {
  props: [ 'id', 'speciesUrl' ],
  components: { evolutionChain },
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
        this.FETCH_POKEMON_DETAIL({url})
      }
    }
  }
}
</script>

<style>

</style>
