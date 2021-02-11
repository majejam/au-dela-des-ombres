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
      <a class="fullscreen" ref="fullscreen">Fullscreen</a>
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
      script.setAttribute('src', this.unityLoader)
      script.setAttribute('async', '')
      script.setAttribute('defer', '')
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
            this.gameInstance = unityInstance
            //loadingBar.style.display = 'none'
            this.$refs.fullscreen.onclick = () => {
              unityInstance.SetFullscreen(1)
            }
          })
          .catch(message => {
            alert(message)
          })

        console.log(this.gameInstance)
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
    this.eventBus.$on('onload', () => {
      console.log(this.gameInstance)
    })
  },
}
</script>

<style scoped>
.unity-canvas {
}
</style>
