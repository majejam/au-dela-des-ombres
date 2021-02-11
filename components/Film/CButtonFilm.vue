<template>
  <NuxtLink class="CButtonFilm u-flex-center" :to="content.cta_url">
    <img class="CButtonFilm__image" :src="content.cta_icon" alt="Play icon" />
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
.CButtonFilm {
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

@media (max-width: 420px) {
  .CButtonFilm {
    width: calc(100% - 2*var(--col-main-side));
    height: 64px;
    bottom: -32px;

    &__image {
      width: 30px;
      margin-right: 8px;
    }
  }
}
</style>
