<template>
  <section class="CCharacters">
    <c-heading class="CCharacters__title" :content="content" />
    <div class="CCharacters__container">
      <c-characters-card
        v-for="(character, index) in content.list"
        :key="index"
        :character="character"
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
  mounted() {
    console.log(this.content)
  },
}
</script>

<style lang="scss">
.CCharacters {
  padding: var(--col-main);
  background-color: var(--purple-dark);
  width: 100%;
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);

  &__title {
    padding-top: 120px;
    color: var(--main-white);
  }

  &__container {
    padding-top: 90px;
    padding-bottom: 120px;
  }
}
</style>
