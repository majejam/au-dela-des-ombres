<template>
  <div class="container">
    <c-header :content="global.header" />
    <c-home-hero :hero="content.body.hero" />
  </div>
</template>

<script>
import CHomeHero from '../components/Home/CHomeHero.vue'
export default {
  components: {CHomeHero },
  async asyncData({ store }) {
    return { content: store.state.home, global: store.state.global }
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
