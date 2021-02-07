<template>
  <div class="container">
    <c-header :links="content.body.header.links" />
    <div class="content">
      <c-text tag="h2" type="bold" :text="content.body.content.text" />
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
  margin: var(--col-main);
}
</style>
