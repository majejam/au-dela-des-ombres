<template>
  <div class="webgl-content">
    <canvas
      ref="canvas"
      id="unity-container"
      v-bind:style="{ width: width + 'px', height: height + 'px' }"
    >
    </canvas>
    <div v-if="loaded == false">
      <div class="unity-loader">
        <div class="bar">
          <div class="fill" v-bind:style="{ width: progress * 100 + '%' }"></div>
        </div>
      </div>
    </div>
    <div class="footer" v-if="hideFooter !== true">
      <a class="fullscreen" @click.prevent="fullscreen">Fullscreen</a>
      <a class="fullscreen" @click.prevent="VRToggle">VR</a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: ['src', 'module', 'width', 'height', 'externalProgress', 'unityLoader', 'hideFooter'],
  name: 'UnityWebGL',
  data() {
    return {
      gameInstance: null,
      loaded: false,
      progress: 0,
      error: null,
    }
  },
  methods: {
    fullscreen() {
      this.gameInstance.SetFullscreen(1)
    },
    VRToggle() {
      document.dispatchEvent(new CustomEvent('toggleVR', {}))
    },
    message(gameObject, method, param) {
      if (param === null) {
        param = ''
      }
      if (this.gameInstance !== null) {
        this.gameInstance.SendMessage(gameObject, method, param)
      } else {
        console.warn(
          "vue-unity-webgl: you've sent a message to the Unity content, but it wasn\t instantiated yet."
        )
      }
    },
  },
  beforeMount() {
    if (!this.eventBus) {
      this.eventBus = new Vue({
        data: {
          ready: false,
          load: false,
        },
      })
    }

    if (typeof UnityLoader === 'undefined' && this.unityLoader && !this.eventBus.load) {
      const script = document.createElement('SCRIPT')
      console.log(this.unityLoader)
      script.setAttribute('src', this.unityLoader)
      script.setAttribute('async', '')
      script.setAttribute('defer', '')
      console.log(script)
      this.eventBus.load = true

      var config = {
        dataUrl: this.src + '/buildTestH4.data',
        frameworkUrl: this.src + '/buildTestH4.framework.js',
        codeUrl: this.src + '/buildTestH4.wasm',
        streamingAssetsUrl: 'StreamingAssets',
        companyName: 'DefaultCompany',
        productName: 'Ava_Transmedia',
        productVersion: '0.1',
      }

      script.onload = () => {
        createUnityInstance(this.$refs.canvas, config, progress => {
          //progressBarFull.style.width = 100 * progress + '%'
        })
          .then(unityInstance => {
            //loadingBar.style.display = 'none'
          })
          .catch(message => {
            alert(message)
          })
      }
      document.body.appendChild(script)
    } else {
      this.eventBus.ready = true
      this.eventBus.load = true
    }
  },
  mounted() {
    document.addEventListener(
      'onVRSupportedCheck',
      function (event) {
        console.log('VR ?')
      },
      false
    )
    const instantiate = () => {
      if (typeof UnityLoader === 'undefined') {
        let error =
          'The UnityLoader was not defined, please add the script tag ' +
          'to the base html and embed the UnityLoader.js file Unity exported or use "unityLoader" attribute for path to UnityLoader.js.'
        console.error(error)
        this.error = error
        return
      }
      if (this.src === null) {
        let error = 'Please provice a path to a valid JSON in the "src" attribute.'
        console.error(error)
        this.error = error
        return
      }
      let params = {}
      if (this.externalProgress) {
        params.onProgress = UnityProgress
      } else {
        params.onProgress = (gameInstance, progress) => {
          this.loaded = progress === 1
          this.progress = progress
        }
      }
      if (this.module) {
        params.Module = this.module
      }
      var config = {
        dataUrl: this.src + '/buildTestH4.data',
        frameworkUrl: this.src + '/buildTestH4.framework.js',
        codeUrl: this.src + '/buildTestH4.wasm',
        streamingAssetsUrl: 'StreamingAssets',
        companyName: 'DefaultCompany',
        productName: 'Ava_Transmedia',
        productVersion: '0.1',
      }

      this.gameInstance = UnityLoader.createUnityInstance(this.$refs.canvas, config, params)

      console.log(this.gameInstance)
    }

    if (this.eventBus.ready) {
      instantiate()
    } else {
      this.eventBus.$on('onload', () => {
        instantiate()
      })
    }
  },
}
</script>

<style scoped>
.unity-canvas {
}
</style>
