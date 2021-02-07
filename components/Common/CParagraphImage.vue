<template>
  <section class="CParagraphImage">
    <div class="col CParagraphImage__left">
      <c-text
        tag="span"
        class="CParagraphImage__left__overline"
        type="overline"
        :text="content.overline"
      />
      <c-text
        tag="h3"
        type="sketch"
        class="CParagraphImage__left__title CParagraphImage__left__title--m"
        :text="content.title_upper"
      />
      <c-text
        tag="h3"
        type="solid"
        class="CParagraphImage__left__title"
        :text="content.title_downer"
      />
      <c-text tag="p" class="CParagraphImage__left__p" :text="content.paragraph" />
    </div>
    <div class="col CParagraphImage__right">
      <img
        class="CParagraphImage__right--image"
        :src="content.image.url"
        :alt="content.image.alt"
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
}
</script>

<style lang="scss">
.CParagraphImage {
  margin-top: 110px;
  display: flex;

  &__left {
    padding-top: 70px;

    &__overline {
      text-transform: uppercase;
      color: var(--purple-dark);
    }

    &__title {
      color: var(--purple-dark);

      &--m {
        margin-top: 8px;
      }
    }

    &__p {
      margin-top: 24px;
      max-width: 500px;
    }
  }

  &__right {
    &--image {
      width: 100%;
    }
  }
}
</style>
