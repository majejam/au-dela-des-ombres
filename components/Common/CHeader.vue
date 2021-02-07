<template>
  <header class="CHeader u-flex-center">
    <ul class="CHeader__links u-flex-center">
      <li v-for="(link, index) in links" :key="index" class="CHeader__link">
        <a
          class="CHeader__link--a"
          :href="link.href"
          :target="link.target"
          rel="noopener noreferrer"
          >{{ link.text }}</a
        >
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    links: {
      required: true,
      type: Array,
      validator: function (value) {
        return value.length !== 0
      },
    },
  },
}
</script>

<style lang="scss">
.CHeader {
  width: 100%;
  height: 50px;
  padding: var(--col-main);

  &__link {
    padding: var(--pad-main);

    &-a {
      color: var(--main-black);
    }
  }
}
</style>
