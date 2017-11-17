<template lang="html">
  <div class="menu-container">
    <div class="menu-item-container">
      <h2 @click="exit()">
      <router-link
          class="menu-item"
          to="/">
          work
      </router-link>
      </h2>
    </div>
    <div class="menu-item-container">
      <h2 @click="exit()">
      <router-link
        class="menu-item" to="/about">
          about
      </router-link>
      </h2>
    </div>
    <div class="menu-item-container">
      <h2  @click="exit()">
      <router-link
        class="menu-item" to="/contact">
          contact
      </router-link>
    </h2>
    </div>
  </div>

</template>

<script>

export default {
  methods: {
    exit() {
      this.$emit('exit');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../theme/typography';
  .menu-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.99);
    z-index: 100;
    .menu-item-container {
      width: 100vw;
      height: 33.333vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;


    }
    h2 {


      font-size: 60px;

      width: 300px;

      @media (max-width: 768px) {
        font-size: 50px;
      }
      .menu-item {
        font-family: $mainFont;
        color: white;
        &:after {
          display:block;
          content: '';
          border: 1px solid white;
          transform: scaleX(0);
          transition: transform 250ms ease-in-out;
        }
        &:hover:after {
          transform: scaleX(0.7);

        }

      }
    }
  }
</style>
