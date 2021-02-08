<template>
  <section class="CPresseLeft">
    <c-text class="CPresseLeft__title" tag="h3" type="solid" text="Synopsis" />
    <c-text class="CPresseLeft__text" tag="p" text="Ava, une enfant introvertie, est souvent la tête dans les nuages. Pleine de tristesse, elle ne perçoit plus les couleurs. Poussée par Pipo, son compagnon imaginaire, elle est prête à tout pour réapprendre à colorer sa vision du monde. Sa quête du bonheur est parsemée d'embûches, le Dévoreur, une force gigantesque noire et difforme qui n’est rien d’autre que l'incarnation de son mal-être, ne cesse de la ronger de jour en jour."/>
    <div class="CPresseLeft__divider"></div>
    <div class="row">
      <div class="CPresseLeft__infos">
        <c-text tag="span" type="caption" text="Durée" />
        <c-text tag="span" type="thin" text="1h46" />
      </div>
      <div class="CPresseLeft__infos">
        <c-text tag="span" type="caption" text="Production" />
        <c-text tag="span" type="thin" text="Disney" />
      </div>
    </div>
    <c-text class="CPresseLeft__subtitle" tag="span" type="caption" text="Casting" />
    <c-text class="CPresseLeft__casting" tag="p" text="Damien Bonnard, Alexis Manenti, Djebril Zonga, Issa Perica, Al-Hassan Ly, Steve Tientcheu, Almamy Kanoute, Nizar Ben Fatma, Raymond Lopez, Luciano Lopez, Jaihson Lopez, Jeanne Balibar, Omar Soumare, Sana Joachaim et Lucas Omiri" />
    <div class="CPresseLeft__divider"></div>
    <c-text class="CPresseLeft__info-contact" tag="p" text="Pour toutes demandes, n’hésitez pas à contacter notre service presse qui vous répondra dans les plus brefs délais" />
    <div class="u-flex-center">
      <NuxtLink class="CPresseLeft__contact-btn u-flex-center" to="/contact">
        <c-text tag="span" type="custom" text="Contacter le service presse" />
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import CText from '../Common/CText.vue'
export default {
  components: {CText },
  props: {
  },
}
</script>

<style lang="scss">
.CPresseLeft {
  width: 50%;
  margin-top: 136px;
  margin-bottom: 128px;
  padding-right: 10.4%;

  &__title {
    color: var(--purple-dark);
    margin-bottom: 24px;
  }

  &__text {
    margin-bottom: 71px;
  }

  &__divider {
    width: 100%;
    height: 1px;
    margin-bottom: 72px;
    background: var(--grey-100);
  }

  .row {
    display: flex;
  }

  &__infos {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    &:first-of-type {
      margin-right: 48px;
    }

    span:first-of-type {
      margin-bottom: 8px;
    }
  }

  &__subtitle {
    display: block;
    margin-bottom: 8px;
  }

  &__casting {
    margin-bottom: 71px;
  }

  &__info-contact {
    margin-bottom: 32px;
  }

  &__contact-btn {
    display: flex;
    background: var(--main-red);
    color: var(--main-white);
    text-decoration: none;
    text-transform: uppercase;
    padding: 16px 24px;
    border-radius: 100px;
    background: #ffb514;

    margin: var(--pad-header);
    color: var(--purple-dark);

    box-shadow: 0px 0px 24px rgba(255, 181, 20, 0.4), inset 0px -8px 8px rgba(0, 0, 0, 0.05),
      inset 0px 6px 8px rgba(255, 255, 255, 0.3);
  }
}
</style>