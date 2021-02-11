<template>
  <section class="CCharacters">
    <c-heading class="CCharacters__title" :content="content" />
    <img class="CCharacters__sketch-image" src="images/film/ava_sketch.png" alt="Dessin d'Ava">
    <img class="CCharacters__sketch-image" src="images/film/antoine_sketch.png" alt="Dessin d'Antoine">
    <img class="CCharacters__sketch-image" src="images/film/prof_sketch.png" alt="Dessin de la prof">
    <div class="CCharacters__container">
      <c-characters-card
        v-for="(character, index) in content.list"
        :key="index"
        :character="character"
      />
    </div>
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
  mounted() {
    console.log(this.content)
  },
}
</script>

<style lang="scss">
.CCharacters {
  position: relative;
  padding: var(--col-main);
  background-color: var(--purple-dark);
  width: 100%;
  clip-path: polygon(0 0, 100% 2.5%, 100% 100%, 0 97.5%);

  &__title {
    padding-top: 120px;
    color: var(--main-white);
  }

  &__container {
    padding-top: 90px;
    padding-bottom: 240px;
    display: flex;
    flex-wrap: wrap;
  }

  &__sketch-image {
    position: absolute;
    mix-blend-mode: screen;

    &:first-of-type {
      top: -100px;
      right: 5%;
    }

    &:nth-of-type(2) {
      top: 400px;
      right: 0px;
    }

    &:nth-of-type(3) {
      bottom: 280px;
      left: 5%;
    }
  }
}
</style>
