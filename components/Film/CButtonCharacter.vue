<template>
  <NuxtLink class="CButtonCharacter u-flex-center" :to="content.url">
    <c-text tag="span" type="custom" :text="content.text" />
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
.CButtonCharacter {
  height: 48px;
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

  &:hover {
    background: white;
  }
}
</style>
