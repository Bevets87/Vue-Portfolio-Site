<template lang="html">
  <div ref="photo" class="photo-container">
    <div class="title-container"><h1>{{image.title}}</h1></div>
    <img :src="image.img" />
  </div>
</template>

<script>

export default {
  props: {
    image: Object
  },
  mounted() {

  }

}
</script>

<style lang="scss" scoped>
@import '../theme/typography';
.photo-container {
  cursor: pointer;
  min-height: 200px;
  width: 100%;

  &:hover {
    .title-container {
      opacity: 1;
      h1 {
        &:before {
          display: block;
          content: '';
          width: 100%;
          height: 1px;
          background: white;
        }
      }
    }
  }
  .title-container {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0,0,0,0.8);
    opacity: 0;
    transition: all 0.4s ease-in;
    h1 {
      font-family: $mainFont;
      color: white;
      font-size: 30px;
    }
  }

}
</style>
