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
