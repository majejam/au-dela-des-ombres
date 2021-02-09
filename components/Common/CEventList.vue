<template>
  <section class="CEventList">
    <c-heading class="CEventList__heading" :content="content" />
    <div v-for="(eventData, index) in content.event" :key="index">
        <c-event-box :content="eventData" />
        <div v-if="index != content.event.length - 1" class="CEventList__divider"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.CEventList {
  margin-top: 144px;
  margin-bottom: 144px;

  &__heading {
    margin-bottom: 104px;
  }

  &__divider {
    width: 100%;
    height: 1px;
    background: var(--grey-100);
    margin-bottom: 56px;
    margin-top: 55px;
  }
}
</style>
