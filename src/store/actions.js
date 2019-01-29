import * as api from '../api'
import Pokemon from '../models/Pokemon.js'
import PokemonDetail from '../models/PokemonDetail.js'

const actions = {
  FETCH_POKEMONS ({commit, state}, {url}) {
    let list = state.pokemons.list || []
    return api.common.fetch(url).then(data => {
      list = list.concat(data.results)
      commit('SET_POKEMONS', { next: data.next, prev: data.previous, list: list })
    })
  },
  FETCH_POKEMON ({commit}, {id}) {
    return api.pokemon.get(id).then(data => {
      commit('SET_POKEMON', new Pokemon(data))
    })
  },
  FETCH_POKEMON_DETAIL ({commit, dispatch, state}, {url}) {
    return api.common.fetch(url).then(data => {
      commit('SET_POKEMON_DETAIL', new PokemonDetail(data))
      return data
    }).then(_ => {
      dispatch('FETCH_EVOLUTION_CHAIN', {url: _.evolution_chain.url})
    })
  },
  FETCH_EVOLUTION_CHAIN ({commit}, {url}) {
    return api.common.fetch(url).then(data => {
      var arr = []
      const getElement = function (c) {
        if (c.species) {
          let urlSplits = c.species.url.split('/')
          arr.push({
            id: urlSplits[urlSplits.length - 2],
            name: c.species.name
          })
        }
        if (c.evolves_to.length > 0) {
          getElement(c.evolves_to[0])
        }
      }

      getElement(data.chain)

      commit('SET_EVOLUTION_CHAIN', arr)
    })
  }
}

export default actions
