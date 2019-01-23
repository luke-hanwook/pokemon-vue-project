import * as api from '../api'
import Pokemon from '../models/Pokemon.js'

const actions = {
  FETCH_POKEMONS ({commit}) {
    return api.pokemon.fetch().then(data => {
      let arr = []
      data.results.forEach((element, i) => {
        arr.push(api.common.get(`/pokemon/${i + 1}`))
      })

      Promise.all(arr).then(pokemons => {
        commit('SET_POKEMONS', pokemons.map(item => new Pokemon(item)))
      })
    })
  }
}

export default actions
