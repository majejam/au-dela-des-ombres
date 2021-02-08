<template>
  <NuxtLink class="CButtonHome u-flex-center" :to="content.cta_url">
    <img class="CButtonHome__image" :src="content.cta_icon" alt="Play icon" />
    <c-text tag="span" type="custom" :text="content.cta" />
  </NuxtLink>
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
.CButtonHome {
  position: absolute;
  right: var(--col-main-side);
  bottom: -44px;
  background: var(--main-red);
  width: 364px;
  height: 88px;
  color: var(--main-white);
  text-decoration: none;
  text-transform: uppercase;

  &__image {
    margin-right: 24px;
  }
}
</style>
