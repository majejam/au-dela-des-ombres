<template>
  <div class="container">
    <c-header :content="global.header" />
    <c-jumbotron :hero="content.body.hero" />
    <div class="content">
      <c-event-list :content="content.body.events" />
    </div>
    <c-footer :content="global.footer" />
  </div>
</template>

<script>
import CEventBox from '../components/Common/CEventBox.vue'
import CEventList from '../components/Common/CEventList.vue'
export default {
  components: { CEventList, CEventBox },
  async asyncData({ store }) {
    return { content: store.state.event, global: store.state.global }
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
