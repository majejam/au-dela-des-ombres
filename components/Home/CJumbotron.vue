<template>
  <section class="CJumbotron">
    <img class="CJumbotron__hero" src="images/jumbotron.png" alt="Image de l'accueil" />
    <div class="CJumbotron__text">
      <c-text tag="h2" type="solid" :text="hero.title" />
      <c-text class="CJumbotron__text--subtitle" tag="h6" type="solid" :text="hero.subtitle" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    hero: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.CJumbotron {
  width: 100%;
  height: 512px;
  position: relative;
  display: flex;
  align-items: center;

  &__hero {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }

  &__text {
    margin-left: var(--col-main-side);
    color: var(--grey-50);

    &--subtitle {
      margin-top: 8px;
    }
  }
}
</style>
