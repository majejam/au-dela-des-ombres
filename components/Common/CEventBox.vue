<template>
  <section class="CEventBox">
    <div class="CEventBox__content">
        <div class="CEventBox__img" v-bind:style="{ backgroundImage: 'url(' + content.image + ')' }"></div>
        <div class="CEventBox__title-date-place">
          <c-text tag="h6" type="solid" class="CEventBox__title" :text="content.title" />
          <div class="row">
            <img class="CEventBox__icon first" src="images/icons/Location.svg" alt="Location icon" />
            <c-text tag="span" type="thin" :text="content.location" />
          </div>
          <div class="row">
            <img class="CEventBox__icon" src="images/icons/Check.svg" alt="Date icon" />
            <c-text tag="span" type="thin" :text="content.date" />
          </div>
        </div>
        <c-text class="CEventBox__text" tag="p" :text="content.text"/>
    </div>
    <c-button-event class="CEventBox__button" :content="content" />
  </section>
</template>

<script>
import CButtonEvent from './CButtonEvent.vue'
import CText from './CText.vue'
export default {
  components: { CButtonEvent, CText },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.CEventBox {
  display: flex;
  justify-content: space-between;

  &__content {
    display: flex;
    width: 83%;
  }

  &__img {
    width: 18%;
    height: 240px;
    margin-right: 24px;
    background-size: cover;
    background-position: center;
  }

  &__title-date-place {
    width: 28.2%;
    margin-right: 24px;

    .row {
      display: flex;
      align-items: center;
      padding: 8px 0px;
    }
  }

  &__title {
    margin-bottom: 24px;
    color: var(--purple-dark);
  }

  &__icon {
    margin-right: 8px;

    &.first {
      margin-right: 11px;
    }
  }

  &__text {
    width: 44.1%;
  }

  &__button {
    margin: 0;
  }
}

@media (max-width: 1050px) {
  .CEventBox {
    flex-direction: column;
    align-items: center;

    &__content {
      width: 100%;
      margin-bottom: 24px;
    }

    &__img {
      min-width: 150px;
    }

    &__button {
      max-width: 112px;
    }
  }
}

@media (max-width: 767px) {
  .CEventBox {
    align-items: flex-start;
    
    &__content {
      flex-direction: column;
    }

    &__img {
      margin-right: 0;
      margin-bottom: 24px;
      height: 200px;
    }

    &__title-date-place {
      width: 100%;
      margin-right: 0;
      margin-bottom: 24px;
    }

    &__title {
      margin-bottom: 16px;
    }

    &__text {
      width: 100%;
    }

    .row {
      padding: 4px 0px;
    }
  }
}
</style>
