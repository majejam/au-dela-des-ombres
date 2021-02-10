<template>
  <div class="container">
    <unity
      src="Game/Build/build.json"
      width="1000"
      height="600"
      unityLoader="Game/Build/UnityLoader.js"
    ></unity>
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'
export default {
  components: { Unity },
}
</script>

<style lang="scss">
.container {
  overflow-x: hidden;
}
</style>
