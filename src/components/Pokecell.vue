<template>
  <div class="list-wrapper">
    <div class="poke-id-wrapper">
      <div class="poke-id">#{{index}}</div>
    </div>
    <router-link :to="`/pokemon/${index}`">
      <button :class="`btn poke-cell sprites-${index}`" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['index', 'backgroundPosition'],
  mounted () {
    this.$el.querySelector('.poke-cell').style.backgroundPosition = this.backgroundPosition
  }
}
</script>

<style lang="scss">
.list-wrapper {
  margin: 10px;
  display: flex;
}
.poke-id {
  display: inline-block;
  padding: 5px;
  background-color: rgba(94, 84, 84, 0.527);
  color: rgb(255, 255, 255);
}
.poke-id-wrapper {
  height: 16px;
  width: 120px;
  position: absolute;
  text-align: right;
}
</style>
