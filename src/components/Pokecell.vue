<template>
  <router-link :to="`/pokemon/${index}`">
    <button :class="`poke-cell sprites-${index}`">
      #{{index}}
    </button>
  </router-link>
</template>

<script>
export default {
  props: ['index', 'backgroundPosition'],
  mounted () {
    this.$el.querySelector('.poke-cell').style.backgroundPosition = this.backgroundPosition
  }
}
</script>

<style>
</style>
