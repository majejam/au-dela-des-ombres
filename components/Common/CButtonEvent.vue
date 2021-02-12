<template>
  <NuxtLink class="CButtonEvent u-flex-center" :to="content.redirection">
    <c-text tag="span" type="custom" text="Détails" />
  </NuxtLink>
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
.CButtonEvent {
  height: 48px;
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

  &:hover {
    background: white;
  }
}
</style>