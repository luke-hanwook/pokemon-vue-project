<template>
  <section>
    <PokeList />
    <transition name="router-transition">
      <router-view />
    </transition>
  </section>
</template>

<script>
import PokeList from './PokeList.vue'

export default {
  components: { PokeList },
  data () {
    return {
      loading: false,
      currentOffSetTopOfEl: 0,
      initOffSetTopOfEl: 0
    }
  },
  created () {
    console.log('pokedex created')
    // this.fetchData()
    // window.addEventListener('scroll', () => {
    //   this.bottomVisible()
    // })
  },
  updated () {
    // console.log('updated')
    // this.calScrollTop()
  },
  watch: {
    // '$route' (to, from) {
    //   const toDepth = to.path.split('/').length
    //   const fromDepth = from.path.split('/').length
    //   this.transitionName = toDepth > fromDepth ? 'router-transition' : 'slide-down'
    // },
    // currentOffSetTopOfEl (px) {
    //   if (px <= 0) {
    //     console.log('fetch')
    //     this.fetchData(this.pokemons.next)
    //   }
    // },
    // initOffSetTopOfEl (px) {
    //   if (px > 0) {
    //     this.fetchData(this.pokemons.next)
    //   }
    // }
  },
  methods: {
    // ...mapActions([
    //   'FETCH_POKEMONS'
    // ]),
    // fetchData () {
    //   this.loading = true
    //   this.FETCH_POKEMONS({url: this.pokemons.next}).finally((result) => { this.loading = false })
    // },
    // calScrollTop () {
    //   let offsetTopOfLastEl = this.$refs.pokeList.lastElementChild.offsetTop
    //   let visible = document.documentElement.clientHeight
    //   let scrollY = window.pageYOffset
    //   let offsetOfScroll = visible + scrollY
    //   let curOffset = offsetTopOfLastEl - offsetOfScroll
    //   if (curOffset < 0) {
    //     console.log('init')
    //     this.initOffSetTopOfEl = visible - offsetTopOfLastEl
    //   }
    // },
    // bottomVisible () {
    //   let lastElOfPokeList = this.$refs.pokeList.lastElementChild
    //   if (lastElOfPokeList) {
    //     let scrollY = window.pageYOffset
    //     let visible = document.documentElement.clientHeight
    //     let offsetOfScroll = visible + scrollY - (lastElOfPokeList.offsetTop + 360)
    //     this.currentOffSetTopOfEl = offsetOfScroll
    //   }
    // }
  }
}
</script>

<style lang="scss">
.list-wrapper {
  display: inline-block;
  /* width: 100%;
  height: 100%; */
}
.poke-list {
  position: relative;
}
 .router-transition-enter-active,
 .router-transition-leave-active {
  transition: all .5s ease;
}
.router-transition-enter, .router-transition-leave-active {
  transform: translateY(100%);
}
</style>
