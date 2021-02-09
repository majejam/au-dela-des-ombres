<template>
  <section class="CHomeHero">
    <div class="CHomeHero__background" v-bind:style="{ backgroundImage: 'url(' + hero.background + ')' }" />
    <div class="CHomeHero__overlay"></div>
    <img class="CHomeHero__perso" src="images/home/ava-et-pipo.png" alt="Ava et pipo">
    <ul class="CHomeHero__linksMedia">
      <li v-for="(linkMedia, index) in hero.linksMedia" :key="index" class="CHomeHero__linkMedia">
        <NuxtLink class="CHomeHero__linkMedia--a u-flex-center" :to="linkMedia.href" target="_blank">
          <img :src="linkMedia.icon" :alt="linkMedia.alt">
        </NuxtLink>
      </li>
    </ul>
    <div class="CHomeHero__text">
      <img src="images/home/disney-pixar.png" alt="logo disney et pixar">
      <img class="CHomeHero__title" src="images/home/title.png" alt="Titre de la page hihihi">
      <NuxtLink class="CHomeHero__button u-flex-center" to="/teaser">
        <c-text tag="span" type="custom" text="Teaser" />
      </NuxtLink>
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
.CHomeHero {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &__background {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-size: cover;
      background-position: center;
    }

    &__overlay {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 22.92%, rgba(0, 0, 0, 0.15) 83.85%, rgba(0, 0, 0, 0.5) 100%);
    }

    &__perso {
      position: absolute;
      z-index: 5;
      width: 53%;
      left: 0;
      bottom: 0;
    }

    &__linksMedia {
      position: absolute;
      right: 40px;
      bottom: 40px;
      display: flex;
    }

    &__linkMedia {
      margin-right: 40px;

      &:last-of-type {
        margin-right: 0;
      }
    }

    &__text {
      width: 100%;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        margin-bottom: 16px;
      }
    }

    &__title {
      width: 50.1%;
      margin-bottom: 56px !important;
    }

    &__button {
      width: 364px;
      height: 64px;
      display: flex;
      text-decoration: none;
      text-transform: uppercase;
      padding: 16px 24px;
      border-radius: 100px;
      background: #ffb514;

      margin: var(--pad-header);
      color: var(--purple-dark);

      box-shadow: 0px 0px 24px rgba(255, 181, 20, 0.4), inset 0px -8px 8px rgba(0, 0, 0, 0.05),
        inset 0px 6px 8px rgba(255, 255, 255, 0.3);
    }
}
</style>
