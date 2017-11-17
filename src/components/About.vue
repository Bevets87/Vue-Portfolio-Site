<template>
  <div class="about-container">
    <about-logo id="about-logo"> </about-logo>
    <about-text v-for="(section, index) in sections" :key="index" :text="section.text" :index="index"></about-text>
  </div>
</template>

<script>
import AboutText from './AboutText.vue'
import AboutLogo from './AboutLogo.vue'
export default {
  name: 'about',
  data() {
    return {
      sections: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pharetra lacus. Donec et semper erat, ut faucibus odio. Vestibulum at mauris sed diam porttitor facilisis eu at sem. Duis suscipit eget dolor vitae interdum. Aenean porttitor pellentesque urna ac auctor"
        },
        {
          text: "Vestibulum commodo, nunc a malesuada rutrum, augue urna mollis elit, at sagittis nisi felis ut nunc. Aliquam erat volutpat. Proin aliquam turpis nisi, ac semper mi tristique a. Sed laoreet accumsan turpis."
        },
        {
          text: "Duis suscipit eget dolor vitae interdum. Aenean porttitor pellentesque urna ac auctor. Vestibulum commodo, nunc a malesuada rutrum, augue urna mollis elit, at sagittis nisi felis ut nunc. Aliquam erat volutpat"
        }
      ]
    }
  },
  components: {
    AboutText,
    AboutLogo
  }
}
</script>

<style scoped lang="scss">
@import '../theme/typography';
.about-container {
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  z-index: 10;
  min-height: 100vh;
  width: 100vw;
  #about-logo {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }

}
</style>
