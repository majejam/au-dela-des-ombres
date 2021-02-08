<template>
  <div class="CSliderButton">
    <button @click="bus.$emit('Prev')" class="CSliderButton__prev">
      <img class="CSliderButton__image" src="images/icons/left_arrow.svg" alt="left button" />
    </button>
    <button @click="bus.$emit('Next')" class="CSliderButton__next">
      <img class="CSliderButton__image" src="images/icons/right_arrow.svg" alt="right button" />
    </button>
  </div>
</template>

<script>
import Bus from '@/plugins/Bus'
export default {
  data() {
    return {
      bus: Bus,
    }
  },
}
</script>

<style lang="scss">
.CSliderButton {
  button {
    width: 52px;
    height: 24px;
    padding: 0;
    cursor: pointer;
    outline: none;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
