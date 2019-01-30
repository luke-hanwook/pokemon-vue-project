<template>
  <section>
    <div class="poke-list-wrap">
      <div class="poke-fixed-wrap">
        <PokeList />
      </div>
    </div>
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
.btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.747);
  position: fixed;
  top: 0;
  left: 0;
}
section {
  width: 100%;
  height: 100%;
}
.poke-list-wrap {
  left: 0;
  right: 0;
  position: fixed;
}
.poke-fixed-wrap {
  max-width: 37rem;
  max-height: 30rem;
  margin: 1.3rem auto;
  overflow-y: scroll;
}
.poke-list {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background-color: rgba(233, 233, 233, 1);
  position: relative;
}
.poke-cell {
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-image: url('../assets/sprites.png');
}
 .router-transition-enter-active,
 .router-transition-leave-active {
  transition: all .3s ease;
}
.router-transition-enter, .router-transition-leave-active {
  transform: translateY(100%);
}

</style>
