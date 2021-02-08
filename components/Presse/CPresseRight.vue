<template>
  <section class="CPresseRight">
    <c-text class="CPresseRight__title" tag="h3" type="sketch" text="Ressources" />
    <div v-for="(downloadData, index) in downloads.download" :key="index">
      <c-download-box :content="downloadData" />
    </div>
  </section>
</template>

<script>
import CText from '../Common/CText.vue'
import CDownloadBox from './CDownloadBox.vue'
export default {
  components: {CText, CDownloadBox },
  props: {
    downloads: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.CPresseRight {
  position: absolute;
  width: 49.2%;
  right: 0;
  top: 464px;
  padding-left: 96px;
  background: var(--purple-dark);

  &__title {
    color: var(--grey-50);
    margin-top: 96px;
    margin-bottom: 64px;
  }
}
</style>