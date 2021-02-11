<template>
  <div class="container Unity">
    <c-header :content="global.header" />
    <UnityPlayerV2
      class="Unity__canvas"
      src="UnityExport/teaser/Build"
      width="1000"
      height="600"
      unityLoader="UnityExport/teaser/Build/buildTestH4.loader.js"
    ></UnityPlayerV2>
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'
export default {
  components: { Unity },
  async asyncData({ store }) {
    return { global: store.state.global }
  },
}
</script>

<style lang="scss">
.container {
  overflow-x: hidden;
}

.Unity {
  display: flex;
  justify-content: center;

  background: var(--purple-dark);

  min-height: 100vh;

  &__canvas {
    margin-top: 150px;
  }
}
</style>
