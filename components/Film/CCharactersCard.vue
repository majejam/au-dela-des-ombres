<template>
  <section class="CCharactersCard">
    <img class="CCharactersCard__background" src="images/film/card.svg" alt="card" />
    <div class="CCharactersCard__icon">
      <img :src="character.image.url" alt="">
    </div>
    <div class="CCharactersCard__content">
      <c-text
        class="CCharactersCard__content__title"
        tag="h4"
        type="solid"
        :text="character.name"
      />
      <c-text
        class="CCharactersCard__content__type"
        tag="span"
        type="body"
        :text="character.title"
      />
      <c-text tag="p" class="CCharactersCard__content__paragraph" :text="character.description" />
      <c-button-character :content="character.link" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    character: {
      required: false,
      type: Object,
    }
  },
}
</script>

<style lang="scss">
.CCharactersCard {
  height: 400px;
  margin-top: 100px;
  position: relative;
  width: 33%;
  transform: rotateZ(-1deg);

  &:nth-of-type(2n) {
    transform: rotateZ(1deg);
  }

  &:nth-of-type(2) {
    margin-right: 33%;
    margin-bottom: 110px;
  }

  &:nth-of-type(3) {
    margin-bottom: 110px;
  }

  &:nth-of-type(6) {
    margin-left: 33%;
  }

  &__background {
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__icon {
    position: absolute;
    top: 0%;
    left: 50%;
    background: var(--main-white);
    width: 128px;
    height: 128px;
    transform: translate(-50%, -72%);
    border-radius: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    text-align: center;
    padding: 74px 34px;
    max-width: 365px;
    margin: 0 auto;

    &__title {
      margin-bottom: 8px;
      display: block;
      color: var(--purple-dark);
    }

    &__type {
      margin-bottom: 12px;
      display: block;
    }
    &__paragraph {
      margin-bottom: 18px;
      display: block;
    }
  }
}

@media (max-width: 1430px) {
  .CCharactersCard {
    width: 50%;
    &:nth-of-type(2) {
      margin-right: 0;
    }

    &:nth-of-type(6) {
      margin-left: 0;
      margin-bottom: 110px;
    }

    &:nth-of-type(7) {
      margin-left: 25%;
    }
  }
}

@media (max-width: 920px) {
  .CCharactersCard {
    width: 100%;
    margin-bottom: 80px;

    &:nth-of-type(7) {
      margin-left: 0;
    }

    &__content {
      max-width: 300px;
    }
  }
}

@media (max-width: 767px) {
  .CCharactersCard {
    margin-bottom: 24px;

  &:nth-of-type(2) {
    margin-bottom: 0px;
  }

  &:nth-of-type(3) {
    margin-bottom: 0px;
  }

    &:nth-of-type(6) {
      margin-bottom: 0px;
    }

    &__container {
      padding-top: 40px;
    }

    &__background {
      height: 320px;
      transform: scaleY(1.1);
      top: 24px;
    }
  }
}
</style>
