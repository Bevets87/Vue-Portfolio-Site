<template lang="html">
  <div class="wrapper">
    <enter-animation ref="enter-animation"></enter-animation>
  </div>
</template>

<script>
import EnterAnimation from './EnterAnimation.vue';
import { TweenMax } from 'gsap';
export default {
  mounted() {
    const $enterAnimation = this.$refs['enter-animation']
    setTimeout(() => {
      TweenMax.to($enterAnimation.$el.parentNode, 4, {opacity: 0, display: 'none'})
    }, 6000)
  },
  components: {
    EnterAnimation
  }
}
</script>

<style lang="scss" scoped>
  @import '../theme/typography';
  .wrapper {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
  }

</style>
