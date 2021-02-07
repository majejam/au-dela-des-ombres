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
  color: blue;

  &--bold {
    font-weight: bold;
  }
}
</style>
