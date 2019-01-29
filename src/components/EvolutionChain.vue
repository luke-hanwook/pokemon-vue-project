<template>
  <div class="poke-list">
    <div v-for="e in evolutionChain" :key="e.id" class="list-wrapper">
      <div class="poke-cell">
        <p>{{e.name}}</p>
        <p>{{e.id}}</p>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      evolutionChain: 'evolutionChain'
    })
  },
  updated () {
    this.evolutionChain.forEach((e, index) => {
      const els = this.$el.querySelectorAll('.poke-cell')
      console.log(Array.from(els)[index].style.backgroundPosition = getComputedStyle(document.querySelector(`.sprites-${e.id}`)).backgroundPosition)
    })
  }
}
</script>

<style>

</style>
