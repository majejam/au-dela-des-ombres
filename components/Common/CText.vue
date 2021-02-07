<template>
  <component
    :is="tag"
    :class="['Text', type ? `Text--${type}` : false, { 'u-no-select': !selectable }]"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      required: false,
      type: String,
      default: 'p',
    },
    type: {
      required: false,
      type: String,
    },
    text: {
      required: false,
      type: [String, Number],
    },
    selectable: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.Text {
  font-family: var(--font-text);

  &--bold {
    font-family: var(--font-text-bold);
  }

  &--solid {
    font-family: var(--font-heading-solid);
  }

  &--sketch {
    font-family: var(--font-heading-sketch);
  }
}

h1 {
  font-size: 101px;
  line-height: 120px;
}

h2 {
  font-size: 63px;
  line-height: 80px;
}

h3 {
  font-size: 50px;
  line-height: 64px;
}

h4 {
  font-size: 36px;
  line-height: 48px;
}

h5 {
  font-size: 25px;
  line-height: 32px;
}

h6 {
  font-size: 21px;
  line-height: 24px;
}
</style>
