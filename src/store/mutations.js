const mutations = {
  SET_POKEMONS (state, pokemons) {
    state.pokemons = pokemons
  },
  SET_POKEMON (state, pokemon) {
    state.pokemon = pokemon
  },
  SET_POKEMON_DETAIL (state, pokemonDetail) {
    state.pokemonDetail = pokemonDetail
  },
  SET_EVOLUTION_CHAIN (state, chain) {
    state.evolutionChain = chain
  }
}

export default mutations
