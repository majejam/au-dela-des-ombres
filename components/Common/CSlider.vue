<template>
  <section class="CSlider">
    <c-heading :content="content" />
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
}
</style>
