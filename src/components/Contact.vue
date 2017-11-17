<template lang="html">
  <div class="contact-container">
    <contact-logo id="contact-logo"></contact-logo>
    <h1 id="contact-title"></h1>
    <div id="masonry-container">
      <h1><i class="fa fa-facebook-square" aria-hidden="true"></i></h1>
      <h1><i class="fa fa-imdb" aria-hidden="true"></i></h1>
      <h1><i class="fa fa-linkedin-square" aria-hidden="true"></i></h1>
      <h1><i class="fa fa-instagram" aria-hidden="true"></i></h1>
      <h1><i class="fa fa-envelope" aria-hidden="true"></i></h1>
    </div>
  </div>
</template>

<script>
import ContactLogo from './ContactLogo.vue'
import { TweenMax, TimelineMax } from 'gsap';
export default {
  data() {
    return {
      text: "Reach me at the following"
    }
  },
  computed: {
    splitText() {
      return this.text.split(' ').map(word => `<span style="opacity:0">${word}</span> `).join('')
    }
  },
  mounted() {
    const tl = new TimelineMax();
    const $masonryContainer = document.getElementById('masonry-container');
    const $contactTitle = document.getElementById('contact-title');
    $contactTitle.innerHTML = this.splitText;
    tl.add(TweenMax.staggerTo($contactTitle.children, 2, {opacity: 1}, 0.1), 1)
      .add(TweenMax.to($contactTitle, 1, {opacity: 0, display: 'none'}), 3)
      .add(TweenMax.to($masonryContainer, 2, {opacity: 1, display: 'flex'}), 4)
  },
  components: {
    ContactLogo
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/typography';
  .contact-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: black;
    z-index: 10;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    #contact-logo {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
    }
    h1 {
      font-size: 60px;
      font-family: $mainFont;
      color: white;
      text-align: center;
      margin: 0;
      padding: 0;
      @media (max-width: 768px) {
        font-size: 40px;
      }

    }
    #masonry-container {
      display: none;
      opacity: 0;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      width: 80vw;
      height: auto;


      h1 {
        font-size: 120px;
        @media (max-width: 768px) {
          font-size: 100px;
        }
      }
    }
  }
</style>
