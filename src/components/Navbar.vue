<template>
  <div>
  <nav>
    <main-logo id="logo"></main-logo>
    <div id="burger" v-on:click="open">
      <div id="wrapper-menu" :class="{open:isOpened}" >
        <div class="line-menu half start"></div>
        <div class="line-menu"></div>
        <div class="line-menu half end"></div>
      </div>
    </div>

  </nav>
  <transition @enter="enter" @leave="leave" >
    <nav-menu @exit="exit()" v-if="isOpened"></nav-menu>
  </transition>
  </div>


</template>

<script>
  import { TweenMax } from 'gsap'
  import MainLogo from './MainLogo.vue'
  import NavMenu from './NavMenu.vue'
  export default {
    name: 'navbar',
    data() {
      return {
        isOpened: false
      }
    },
    methods: {
      open() {
        this.$emit('toggleNavMenu');
        this.isOpened = !this.isOpened;

      },
      enter(el, done) {

        TweenMax.to(document.querySelectorAll('.line-menu'), 0.5, {backgroundColor: 'white'})
        TweenMax.staggerFrom(el.children, 0.5, {opacity: 0, ease:'ease-in-out'}, 0.1);
        done()
      },
      leave(el, done) {
        TweenMax.staggerTo(el.children, 0.5, {opacity: 0, ease:'ease-in-out'}, 0.1)
        setTimeout(() => {
          TweenMax.to(document.querySelectorAll('.line-menu'), 0.5, {backgroundColor: 'black'})
          done()
        },700);

      },
      exit() {
        this.$emit('toggleNavMenu')
        this.isOpened = false;
      }
    },
    components: {
      MainLogo,
      NavMenu
    },

  }
</script>

<style scoped lang="scss">
  @import '../theme/typography';
  nav {
    width: 100vw;
    height: 100px;

    #logo {
      position: fixed;
      top: 5px;
      left: 0;
      z-index: 10;

    }

    #burger {
      position:fixed;
      top: 0;
      right: 5px;
      z-index: 1000;
    }

  }
  #wrapper-menu {
    padding: 4px;
    width: 75px;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    transition: transform 330ms ease-out;

  }

  #wrapper-menu.open {
    transform: rotate(-45deg);
  }

  .line-menu {
    background-color: black;
    border-radius: 5px;
    width: 100%;
    height: 6px;
    border: 1px solid white;
  }

  .line-menu.half {
    width: 50%;
  }

  .line-menu.start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }

  .open .line-menu.start {
    transform: rotate(-90deg) translateX(3px);
  }

  .line-menu.end {
    align-self: flex-end;
    transition: transform 200ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }

  .open .line-menu.end {
    transform: rotate(-90deg) translateX(-3px);
  }



</style>
