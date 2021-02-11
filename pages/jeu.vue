<template>
  <div class="container Unity">
    <c-header :content="global.header" />
    <UnityPlayer
      class="Unity__canvas"
      src="UnityExport/game/Build/WebXR_Beat_Them_All_WebGL_6.json"
      width="1000"
      height="600"
      unityLoader="UnityExport/game/Build/UnityLoader.js"
    />
  </div>
</template>

<script>
export default {
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
