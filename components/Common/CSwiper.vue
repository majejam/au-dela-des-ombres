<template>
  <!-- Slider main container -->
  <div>
    <div class="CSwiper swiper-container" ref="Swiper">
      <!-- Additional required wrapper -->
      <div class="CSwiper__wrapper swiper-wrapper">
        <!-- Slides -->
        <div v-for="(image, index) in images" :key="index" class="CSwiper__slide swiper-slide">
          <img class="CSwiper__image" :src="image.url" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Bus from '@/plugins/Bus'
export default {
  props: {
    images: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      swiper: null,
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.Swiper, {
      speed: 400,
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 1,
    })
    Bus.$on('Prev', () => {
      this.swiper.slidePrev(500)
    })
    Bus.$on('Next', () => {
      this.swiper.slideNext(500)
    })
  },
}
</script>

<style lang="scss">
.CSwiper {
  margin: 80px 0;
  overflow: visible;

  &__wrapper {
    display: flex;
    justify-content: flex-start;
  }

  &__slide {
    height: auto !important;
  }

  &__image {
    width: 100%;
    height: auto;
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2);
  }

  &__button {
    height: 40px;
    width: 40px;
    background: blue;
    cursor: pointer;
  }
}
</style>
