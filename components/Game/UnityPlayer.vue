<template>
  <div class="webgl-content">
    <div id="unity-container" v-bind:style="{ width: width + 'px', height: height + 'px' }"></div>
    <div v-if="loaded == false">
      <div
        class="unity-loader"
        :style="`transform: translate(-50%, -50%) scaleX(${progress})`"
      ></div>
    </div>
    <div class="footer" v-if="hideFooter !== true">
      <div class="fullscreen" @click.prevent="fullscreen">
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
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="vr_button" @click.prevent="VRToggle">VR</div>
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
      document.body.appendChild(script)
      this.eventBus.load = true
      script.onload = () => {
        this.eventBus.ready = true
        this.eventBus.$emit('onload')
      }
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
      this.gameInstance = UnityLoader.instantiate('unity-container', this.src, params)

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
<style lang="scss" scoped>
.webgl-content {
  position: relative;
  background: var(--purple-default);

  width: 1000px;
  height: 600px;
}

.fullscreen {
  color: black;
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

.vr_button {
  position: absolute;
  bottom: 24px;
  right: 50px;
  cursor: pointer;
  z-index: 20;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border: 1px black solid;
  border-radius: 8px;
  margin-right: 16px;
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
