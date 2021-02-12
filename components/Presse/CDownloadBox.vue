<template>
  <section class="CDownloadBox">
    <c-text class="CDownloadBox__title" tag="h4" type="solid" :text="content.title" />
    <div class="row">
      <div class="column">
        <div v-for="(imageData, index) in content.images" :key="index">
          <img :src="imageData" alt="">
        </div>
      </div>
      <div class="column">
        <div class="top">
          <c-text tag="span" type="caption" text="Dimensions" />
          <c-text tag="span" type="thin" :text="content.dimension" />
          <c-text tag="span" type="caption" text="Formats" />
          <c-text tag="span" type="thin" :text="content.format" />
        </div>
        <div class="bottom">
          <NuxtLink class="CDownloadBox__download-btn u-flex-center" to="">
            <c-text tag="span" type="custom" text="Télécharger" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CText from '../Common/CText.vue'
export default {
  components: { CText },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.CDownloadBox {
  margin-bottom: 64px;
  color: var(--grey-50);

  &__title {
    margin-bottom: 24px;
  }

  .row {
    display: flex;
  }

  .column {
    display: flex;
    flex-direction: column;

    span {
      display: block;

      &:nth-of-type(1) {
        margin-bottom: 8px;
      }

      &:nth-of-type(2) {
        margin-bottom: 24px;
      }

      &:nth-of-type(3) {
        margin-bottom: 8px;
      }
    }
  }

  .column:first-of-type {
    margin-right: 24px;

    & div:not(:last-of-type) {
      img {
        margin-bottom: 14px;
      }
    }
  }

  .column:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__download-btn {
    display: flex;
    background: var(--main-red);
    color: var(--main-white);
    text-decoration: none;
    text-transform: uppercase;
    padding: 16px 24px;
    border-radius: 100px;
    background: #ffb514;

    color: var(--purple-dark);

    box-shadow: 0px 0px 24px rgba(255, 181, 20, 0.4), inset 0px -8px 8px rgba(0, 0, 0, 0.05),
      inset 0px 6px 8px rgba(255, 255, 255, 0.3);

    &:hover {
      background: white;
    }

    span {
      margin-bottom: 0 !important;
    }
  }
}

@media (max-width: 500px) {
  .CDownloadBox {
    margin-bottom: 48px;
    .row {
      flex-direction: column;
      .column {
        margin-bottom: 16px;

        .top {
          margin-bottom: 32px;
        }

        .bottom {
          width: 200px;
        }
      }

      .column span:nth-of-type(2) {
          margin-bottom: 8px;
      }
    }
  }
}
</style>
