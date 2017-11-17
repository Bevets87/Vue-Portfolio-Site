<template>
  <div>
    <landing-overlay></landing-overlay>
    <navbar @toggleNavMenu="toggleNavMenu()"></navbar>
    <router-view v-if="!navMenuOpened"></router-view>
  </div>
</template>

<script>
  import LandingOverlay from './components/LandingOverlay.vue';
  import Navbar from './components/Navbar.vue';
  export default {
    data() {
      return {
        navMenuOpened: false
      }
    },
    methods: {
      toggleNavMenu() {
        this.navMenuOpened = !this.navMenuOpened;
      }
    },
    components: {
      LandingOverlay,
      Navbar
    }
  }
</script>


<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    text-align: center;
  }
</style>
