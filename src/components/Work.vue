<template>
  <div class="photos">
    <div class="photo" v-for="(image,index) in images" :key="index">
      <div class="photo-title"><h1>{{image.title}}</h1></div>
      <img :src="image.img" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'work',
    mounted() {
      sr.reveal('.photo', {
        reset: true,
        viewFactor: 0
      })
      setTimeout(function(){
        window.scrollTo(0,1)
      }, 200)

    },
    data() {
      return {
        images: [
          {
            title: 'Title',
            img: 'http://www.kubipet.com/data/out/83/iwp780568093-hd-wallpapers.jpg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/67843/splashing-splash-aqua-water-67843.jpeg'
          },
          {
            title: 'Title',
            img: 'https://data.whicdn.com/images/131048626/original.jpg'
          },
          {
            title: 'Title',
            img: 'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg'
          },
          {
            title: 'Title',
            img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_67920257.jpg'
          },
          {
            title: 'Title',
            img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_63351521.jpg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/189349/pexels-photo-189349.jpeg'
          },
          {
            title: 'Title',
            img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_82250973.jpg'
          },
          {
            title: 'Title',
            img: 'https://www.google.com/photos/about/static/images/maggie-2.png'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'
          },
          {
            title: 'Title',
            img: 'http://www.kubipet.com/data/out/83/iwp780568093-hd-wallpapers.jpg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/67843/splashing-splash-aqua-water-67843.jpeg'
          },
          {
            title: 'Title',
            img: 'https://data.whicdn.com/images/131048626/original.jpg'
          },
          {
            title: 'Title',
            img: 'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg'
          },
          {
            title: 'Title',
            img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_67920257.jpg'
          },
          {
            title: 'Title',
            img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_63351521.jpg'
          },
          {
            title: 'Title',
            img: 'http://www.kubipet.com/data/out/83/iwp780568093-hd-wallpapers.jpg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/67843/splashing-splash-aqua-water-67843.jpeg'
          },
          {
            title: 'Title',
            img: 'https://data.whicdn.com/images/131048626/original.jpg'
          },
          {
            title: 'Title',
            img: 'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg'
          },
          {
            title: 'Title',
            img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_67920257.jpg'
          },
          {
            title: 'Title',
            img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_63351521.jpg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/189349/pexels-photo-189349.jpeg'
          },
          {
            title: 'Title',
            img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_82250973.jpg'
          },
          {
            title: 'Title',
            img: 'https://www.google.com/photos/about/static/images/maggie-2.png'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'
          },
          {
            title: 'Title',
            img: 'http://www.kubipet.com/data/out/83/iwp780568093-hd-wallpapers.jpg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/67843/splashing-splash-aqua-water-67843.jpeg'
          },
          {
            title: 'Title',
            img: 'https://data.whicdn.com/images/131048626/original.jpg'
          },
          {
            title: 'Title',
            img: 'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'
          },
          {
            title: 'Title',
            img: 'https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg'
          },
          {
            title: 'Title',
            img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_67920257.jpg'
          },
          {
            title: 'Title',
            img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_63351521.jpg'
          },


        ]
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../theme/typography';
@import '../theme/mixins';
.photos {
  position: absolute;
  top: 0;
  left: 0;
  @include column-count(4);

  column-gap: 0;
  @media(max-width: 1000px) {
    @include column-count(3);
  }
  @media(max-width: 768px) {
    @include column-count(2);
  }
  @media(max-width: 600px) {
    @include column-count(1);
  }
  .photo {
    position: relative;
    display: inline-block;
    width: 100%;
    cursor: pointer;
    &:hover {
      .photo-title {
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
    .photo-title {
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
}


</style>
