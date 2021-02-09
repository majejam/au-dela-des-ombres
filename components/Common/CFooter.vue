<template>
  <footer class="CFooter u-flex-center">
    <div class="CFooter__purple">
      <ul class="CFooter__links">
        <li v-for="(link, index) in content.links" :key="index" class="CFooter__link">
          <NuxtLink class="CFooter__link--a u-flex-center" :to="link.href">
            <c-text tag="span" type="custom" :text="link.text" />
          </NuxtLink>
        </li>
      </ul>
      <div class="row">
        <img class="CFooter__logo-disney" src="images/logos/disney.svg" alt="Logo Disney">
        <div class="column">
          <ul class="CFooter__linksMl">
            <li v-for="(linkMl, index) in content.linksMl" :key="index" class="CFooter__linkMl">
              <NuxtLink class="CFooter__linkMl--a u-flex-center" :to="linkMl.href">
                <c-text tag="span" type="custom" :text="linkMl.text" />
              </NuxtLink>
            </li>
          </ul>
          <c-text tag="span" type="custom" text="© 2021  -  Disney · Pixar  -   All rights reserved" />
        </div>
      </div>
    </div>
    <div class="CFooter__red">
      <c-text class="CFooter__red--title" tag="h6" type="solid" text="Retrouvez les aventures d'Ava sur" />
      <ul class="CFooter__linksMedia">
        <li v-for="(linkMedia, index) in content.linksMedia" :key="index" class="CFooter__linkMedia">
          <NuxtLink class="CFooter__linkMedia--a u-flex-center" :to="linkMedia.href" target="_blank">
            <img :src="linkMedia.icon" :alt="linkMedia.alt">
          </NuxtLink>
        </li>
      </ul>
      <c-text class="CFooter__red--info" tag="span" type="caption" text="Et abonnez-vous à notre newsletter pour ne rien rater" />
      <form action="#">
        <div class="CFooter__input-container">
          <input class="CFooter__newsletter-input" type="text" placeholder="Entrez votre adresse mail..." name="mail" required>
          <button class="CFooter__newsletter-btn u-flex-center" type="submit">
            <c-text tag="span" type="custom" text="Valider" />
          </button>
        </div>
      </form>
    </div>
  </footer>
</template>

<script>
  export default {
    components: {},
    props: {
      content: {
        required: true,
        type: Object,
      },
    },
  }
</script>

<style lang="scss">
.CFooter {
  position: relative;
  width: 100%;
  padding-top: 64px;
  height: 328px;

  .row {
    display: flex;
  }

  &__purple {
    width: 100%;
    height: calc(100%);
    background: var(--purple-dark);
    padding: 64px 40px;
  }

  &__links {
    width: 40%;
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
  }

  &__link {
    margin-right: 32px;

    &:first-of-type {
      margin-bottom: 24px;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &--a {
      color: var(--grey-50);
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  &__logo-disney {
    margin-right: 32px;
  }

  &__linksMl {
    margin-bottom: 8px;
    display: flex;
  }

  &__linkMl {
    margin-right: 16px;

    &:last-of-type {
      margin-right: 0;
    }

    &--a {
      color: var(--purple-default);
      text-decoration: none;
    }
  }

  .column {
    span {
      color: var(--purple-default);
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 0.4px;
    }
  }

  &__red {
    position: absolute;
    width: 49%;
    height: 288px;
    right: 0;
    top: 0;
    background: var(--red-dark);
    color: var(--grey-50);
    padding: 40px;

    &--title {
      margin-bottom: 24px;
    }

    &--info {
      display: block;
      margin-bottom: 16px;
    }
  }

  &__linksMedia {
    margin-bottom: 40px;
    display: flex;
  }

  &__linkMedia {
    margin-right: 40px;
  }

  &__input-container {
    width: 100%;
    height: 56px;
    padding: 8px;
    background: var(--grey-50);
    border-radius: 100px;
    display: flex;
    justify-content: space-between;
  }

  &__newsletter-btn {
    display: flex;
    text-decoration: none;
    text-transform: uppercase;
    padding: 16px 24px;
    border-radius: 100px;
    background: #ffb514;

    cursor:pointer;

    margin: 0;
    color: var(--purple-dark);

    box-shadow: 0px 0px 24px rgba(255, 181, 20, 0.4), inset 0px -8px 8px rgba(0, 0, 0, 0.05),
      inset 0px 6px 8px rgba(255, 255, 255, 0.3);
  }

  &__newsletter-input {
    width: 70%;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
