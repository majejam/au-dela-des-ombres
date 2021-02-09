<template>
  <section class="CJumbotron">
    <img class="CJumbotron__hero" :src="hero.image" alt="Image de l'accueil" />
    <div v-if="hero.overlay" class="CJumbotron__overlay"></div> 
    <div class="CJumbotron__text">
      <c-text v-if="hero.caption" class="CJumbotron__text--caption" tag="span" type="caption" :text="hero.caption"/>
      <c-text tag="h2" type="solid" :text="hero.title" />
      <c-text class="CJumbotron__text--subtitle" tag="h6" type="solid" :text="hero.subtitle" />
    </div>
    <c-button-film :content="hero" />
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

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(180deg, rgba(46, 14, 89, 0.9) 0%, rgba(46, 14, 89, 0.75) 66.67%, rgba(46, 14, 89, 0.5) 100%);
  }

  &__text {
    margin-left: var(--col-main-side);
    color: var(--grey-50);

    &--caption {
      display:inline-block;
      padding: 8px;
      background: var(--main-red);
      box-shadow: 0px 0px 24px rgba(238, 56, 78, 0.4);
      border-radius: 8px;
      margin-bottom: 16px;
    }

    &--subtitle {
      margin-top: 8px;
    }
  }
}
</style>
