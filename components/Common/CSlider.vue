<template>
  <section class="CSlider">
    <div class="CSlider__top">
      <c-heading class="CSlider__heading" :content="content" />
      <c-slider-button />
    </div>
    <c-swiper :images="content.images" />
  </section>
</template>

<script>
export default {
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.CSlider {
  margin-top: 80px;

  &__top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
}
</style>
