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
    const els = Array.from(this.$el.querySelectorAll('.poke-cell'))
    this.evolutionChain.forEach((e, index) => {
      let spriteId = e.id
      if (e.id > 151) {
        spriteId = 1
      } else {
        els[index].style.opacity = '1'
      }
      els[index].style.backgroundPosition = getComputedStyle(document.querySelector(`.sprites-${spriteId}`)).backgroundPosition
    })
  }
}
</script>

<style lang="scss">
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
  div.poke-cell {
    opacity: .5;
  }
}
</style>
