<template>
  <div id="app">
    <div>{{helloworld}}</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      helloworld: 'pokemon api'
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}
</style>
