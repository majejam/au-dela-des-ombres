<template>
  <div class="container">
    <c-header :links="content.body.header.links" />
    <c-jumbotron :hero="content.body.hero" />
    <div class="content"></div>
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
  margin: var(--col-main);
}
</style>
