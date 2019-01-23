<template>
    <div>
      <div v-if="loading">loading...</div>
      <div
        v-else
        :class="`poke-cell`"
        :style="`background-image: url(${p.sprites.front_default})`"
        v-for="p in pokemons"
        :key="p.id">
        {{p.id}}: {{p.name}}
      </div>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      hello: 'pokemon',
      loading: false
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    ...mapState({
      pokemons: 'pokemons'
    })
  },
  methods: {
    ...mapActions([
      'FETCH_POKEMONS'
    ]),
    fetchData () {
      this.loading = true
      this.FETCH_POKEMONS().finally((result) => { this.loading = false })
    }
  }
}
</script>

<style>
  .poke-cell {
    width: 120px;
    height: 120px;
    border: 1px solid black;
    display: inline-block;
  }
</style>
