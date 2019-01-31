<template>
  <div class="poke-add poke-evolution-chain">
    <div v-for="e in evolutionChain" :key="e.id" class="evolution-list-wrapper">
      <div class="poke-cell"></div>
      <div class="poke-evo-name">
        <span>#{{e.id}}</span>
        <span>{{e.name}}</span>
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
      Array.from(els)[index].style.backgroundPosition = getComputedStyle(document.querySelector(`.sprites-${e.id}`)).backgroundPosition
    })
  }
}
</script>

<style lang="css">
.poke-evolution-chain {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.poke-evo-name {
  text-align: center;
}
.evolution-list-wrapper {
  margin: 10px;
}
</style>
