<template>
  <div id="app">
    <div class="pokedex-title">{{helloworld}}</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      helloworld: 'POKEDEX'
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  overflow: hidden;
}
.pokedex-title {
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin: 10px;
}
</style>
