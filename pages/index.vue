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
export default {
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
  padding: var(--col-main);
  overflow-x: hidden;
}
</style>
