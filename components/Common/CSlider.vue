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
  padding: var(--col-main);

  &__top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    color: var(--purple-dark);
  }
}

@media (max-width: 767px) {
  .CSlider {
    margin-top: 40px;
  }
}
</style>
