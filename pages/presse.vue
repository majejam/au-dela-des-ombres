<template>
  <div class="container">
    <c-header :content="global.header" />
    <c-heading-hero :hero="content.body.hero" />
    <c-presse-right :downloads="content.body.downloads" />
    <div class="content">
      <c-presse-left />
    </div>
    <c-footer />
  </div>
</template>

<script>
import CHeadingHero from '../components/Presse/CHeadingHero.vue'
import CPresseLeft from '../components/Presse/CPresseLeft.vue'
import CPresseRight from '../components/Presse/CPresseRight.vue'
export default {
  components: { CHeadingHero, CPresseLeft, CPresseRight },
  async asyncData({ store }) {
    console.log(store.state.presse)
    return { content: store.state.presse, global: store.state.global }
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
.content {
  padding: var(--col-main);
  overflow-x: hidden;
}
</style>
