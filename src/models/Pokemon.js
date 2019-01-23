/* eslint-disable */

class Pokemon {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.sprites = data.sprites
    this.type = data.types.map(item => {
      return item.type.name
    })
  }
}

export default Pokemon
