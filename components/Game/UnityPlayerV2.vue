<template>
  <div class="webgl-content">
    <canvas
      ref="canvas"
      id="unity-container"
      v-bind:style="{ width: width + 'px', height: height + 'px' }"
    >
    </canvas>
    <div class="unity-loader" :style="`transform: translate(-50%, -50%) scaleX(${progress})`"></div>
    <div class="footer" v-if="hideFooter !== true">
      <div class="fullscreen" ref="fullscreen">
        <svg
          class="svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8V4M3 4H7M3 4L7 8M15 8V4M15 4H11M15 4L11 8M3 12V16M3 16H7M3 16L7 12M15 16L11 12M15 16V12M15 16H11"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
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
          this.progress = progress
          console.log(progress)
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

<style lang="scss" scoped>
.webgl-content {
  position: relative;
  background: var(--purple-default);

  width: 1000px;
  height: 600px;
}

.fullscreen {
  color: white;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 20;

  .svg {
    width: 32px;
    height: 32px;
  }
}

#unity-container {
  position: absolute;
  z-index: 10;
}

.unity-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  transform-origin: left;
  transition: 0.3s linear transform;
  width: 25%;
  height: 2px;
  background: white;
}
</style>
