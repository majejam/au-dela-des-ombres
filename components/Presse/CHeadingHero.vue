<template>
  <section class="CHeadingHero">
    <div class="CHeadingHero__overlay"></div> 
    <div class="CHeadingHero__content">
      <c-text class="CHeadingHero__title" tag="h2" type="solid" :text="hero.title" />
      <div class="row">
        <NuxtLink class="CHeadingHero__button u-flex-center" to="">
          <c-text tag="span" type="custom" text="Télécharger le dossier de presse" />
        </NuxtLink>
        <NuxtLink class="CHeadingHero__button u-flex-center" to="">
          <c-text tag="span" type="custom" text="Contacter le service presse" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: { },
  props: {
    hero: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.CHeadingHero {
  width: 100%;
  height: 512px;
  position: relative;
  display: flex;
  align-items: center;

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #2E0E59 0%, #4E4BA6 100%);
  }

  &__content {
    margin-left: var(--col-main-side);
    margin-right: var(--col-main-side);
    color: var(--grey-50);

    .row {
      display: flex;
    }
  }

  &__title {
    margin-bottom: 24px;
  }

  &__button {
    display: flex;
    background: var(--main-red);
    color: var(--main-white);
    text-decoration: none;
    text-transform: uppercase;
    padding: 16px 24px;
    border-radius: 100px;
    background: #ffb514;

    color: var(--purple-dark);

    box-shadow: 0px 0px 24px rgba(255, 181, 20, 0.4), inset 0px -8px 8px rgba(0, 0, 0, 0.05),
      inset 0px 6px 8px rgba(255, 255, 255, 0.3);

    &:first-of-type {
      margin-right: 13px;
    }
  }
}

@media (max-width: 767px) {
  .CHeadingHero {
    padding-top: 40px;

    .row {
      flex-direction: column;

      a {
        margin-right: 0;

        &:first-of-type {
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
