<template>
  <section class="CParagraphImage">
    <div class="col CParagraphImage__left">
      <c-heading class="CParagraphImage__left__heading" :content="content" />
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
  padding: var(--col-main);
  display: flex;

  &__left {
    padding-top: 70px;

    &__heading {
      color: var(--purple-dark);
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
