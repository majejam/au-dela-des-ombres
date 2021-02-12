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

@media (max-width: 1080px) {
  .CPresseRight {
    padding-left: 48px;
  }
}

@media (max-width: 900px) {
  .CPresseRight {
    padding-left: var(--col-main-side);
    padding-right: var(--col-main-side);
    width: 100%;
    position: relative;
    top: 0;

    &__title {
      margin-top: 48px;
      margin-bottom: 32px;
    }
  }
}
</style>