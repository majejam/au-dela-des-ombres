<template>
  <div class="container">
    <c-header :content="global.header" />
    <c-jumbotron :hero="content.body.hero" />
    <c-paragraph-image :content="content.body.paragraph" />
    <c-characters :content="content.body.characters" />
    <c-slider :content="content.body.slider" />
    <c-footer :content="global.footer"/>
  </div>
</template>

<script>
import CCharacters from '../components/Film/CCharacters.vue'
export default {
  components: { CCharacters },
  async asyncData({ store }) {
    return { content: store.state.film, global: store.state.global }
  },
  head() {
    return {
      title: this.content.meta.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.content.meta.description,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.container {
  overflow-x: hidden;
}
</style>
