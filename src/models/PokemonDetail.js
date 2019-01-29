import PokemonGeneration from './PokemonGeneration.js'

class PokemonDetail {
  constructor (data) {
    this.genera = data.genera.filter(genus => {
      return genus.language.name === 'en'
    })[0].genus
    this.flavor_text_entries = data.flavor_text_entries.filter(text => {
      return text.language.name === 'en'
    })[0].flavor_text
    this.generation = PokemonGeneration[data.generation.name]
    this.evolution_chain = data.evolution_chain
  }
}

export default PokemonDetail
