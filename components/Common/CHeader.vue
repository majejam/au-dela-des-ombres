<template>
  <header class="CHeader u-flex-right">
    <ul class="CHeader__links u-flex-center">
      <li v-for="(link, index) in content.links" :key="index" class="CHeader__link">
        <NuxtLink class="CHeader__link--a u-flex-center" :to="link.href">
          <c-text tag="span" :text="link.text" />
        </NuxtLink>
      </li>
      <c-button-header :content="content" />
    </ul>
  </header>
</template>

<script>
import CButtonHeader from './CButtonHeader.vue'
export default {
  components: { CButtonHeader },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.CHeader {
  position: absolute;
  z-index: 2;
  top: 24px;
  width: 100%;
  height: 48px;
  padding: var(--col-header);

  &__link {
    padding: var(--pad-header);

    &--a {
      color: var(--grey-50);
      text-transform: uppercase;
      text-decoration: none;
    }
  }
}
</style>
