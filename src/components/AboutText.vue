<template lang="html">
  <div>
    <p ref="text-block"></p>
  </div>
</template>

<script>
import { TweenMax } from 'gsap'
export default {
  props: {
    text: String,
    index: Number
  },
  computed: {
    splitText() {
      return this.text.split(' ').map(word => `<span style="opacity:0">${word}</span> `).join('')
    }
  },
  mounted() {
    const $textBlock = this.$refs['text-block']
    $textBlock.innerHTML = this.splitText
    let index = this.index
    sr.reveal($textBlock, {
      afterReveal: function (domEl) {
        console.dir(domEl)
        TweenMax.to(domEl.parentNode, 0, {marginTop: index === 0 ? '15vh' : '0'})
        TweenMax.to(domEl, 0, {left: index % 2 === 0 ? '20' : 'none', right: index % 2 === 0 ? 'none' : '20'})
        TweenMax.staggerTo(domEl.children, 1, {opacity: 1}, 0.05)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/typography';
div {
  position: relative;
  width: 90vw;
  height: 100vh;
  margin-left: 5vw;

  p {
    display: block;
    position: absolute;
    top: 0;
    color: white;
    width: 60%;
    height: auto;
    font-family: $mainFont;
    font-size: 27px;
    text-align: center;
    @media(max-width: 768px) {
      width: 100%;
      font-size: 24px;
    }
  }
}

</style>
