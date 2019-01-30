/* eslint-disable */
import PokemonColor from './PokemonColor.js'

class Pokemon {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.front_default = data.sprites.front_default
    this.front_shiny = data.sprites.front_shiny
    this.type = data.types.map(item => {
      return {
        name: item.type.name,
        color: PokemonColor[item.type.name]
      }
    })
    this.species = data.species
    this.height = data.height / 10
    this.weight = data.weight / 10
    this.abilities = data.abilities.map(result => {
      return result.ability.name
    })
  }
}

export default Pokemon
