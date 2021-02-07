<template>
  <div class="container">
    <c-header :content="content.body.header" />
    <c-jumbotron :hero="content.body.hero" />
    <div class="content">
      <c-paragraph-image :content="content.body.paragraph" />
      <c-slider :content="content.body.slider" />
    </div>
    <c-footer />
  </div>
</template>

<script>
import CParagraphImage from '../components/Common/CParagraphImage.vue'
export default {
  components: { CParagraphImage },
  async asyncData({ store }) {
    return { content: store.state.content }
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
  margin: var(--col-main);
}
</style>
