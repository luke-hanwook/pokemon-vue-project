<script>
import { mapState, mapActions } from 'vuex'
import { pokeClasses } from '../PokeClass.js'
import Pokecell from './Pokecell.vue'

export default {
  components: { Pokecell },
  computed: {
    ...mapState({
      pokemons: 'pokemons'
    })
  },
  created () {
    this.FETCH_POKEMONS({url: this.pokemons.next}).finally((result) => { this.loading = false })
  },
  methods: {
    ...mapActions([
      'FETCH_POKEMONS'
    ])
  },
  render (CreateElement) {
    const elementMap = pokeClasses.map(result => {
      return new CreateElement('div', {
        'class': 'list-wrapper',
        key: result.id
      },
      [
        CreateElement(Pokecell, {
          props: {
            index: result.id,
            backgroundPosition: result.backgroundPosition
          }
        })
      ]
      )
    })

    return new CreateElement('div',
      {'class': 'poke-list'},
      [ elementMap ]
    )
  }
}
</script>

<style>

</style>
