<template>
  <div>
    <c-text tag="span" class="CHeading__overline" type="overline" :text="content.overline" />
    <c-text
      tag="h3"
      type="sketch"
      class="CHeading__title CHeading__title--m"
      :text="content.title_upper"
    />
    <c-text tag="h3" type="solid" class="CHeading__title" :text="content.title_downer" />
  </div>
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
.CHeading {
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
}
</style>
