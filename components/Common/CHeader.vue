<template>
  <header class="CHeader u-flex-right">
    <ul class="CHeader__links u-flex-center">
      <li v-for="(link, index) in content.links" :key="index" class="CHeader__link">
        <NuxtLink class="CHeader__link--a u-flex-center" :to="link.href">
          <c-text tag="span" :text="link.text" />
        </NuxtLink>
      </li>
      <c-button-header :content="content" />
    </ul>
    <div class="CHeader__mobile">
      <ul class="CHeader__linksMobile u-flex-center">
        <li v-for="(link, index) in content.links" :key="index" class="CHeader__linkMobile">
          <NuxtLink class="CHeader__linkMobile--aMobile u-flex-center" :to="link.href">
            <c-text tag="span" :text="link.text" />
          </NuxtLink>
        </li>
        <c-button-header :content="content" />
      </ul>
      <div class="CHeader__mobile-toggle">
        <a id="hamburger">
          <span class="first-child">&nbsp;</span>
          <span class="second-child">&nbsp;</span>
          <span class="third-child">&nbsp;</span>
          <span class="fourth-child">&nbsp;</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import CButtonHeader from './CButtonHeader.vue'
export default {
  components: { CButtonHeader },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
  mounted() {
    this.$headerMobile = this.$el.querySelector('.CHeader__mobile')
    this.$toggleIcon = this.$el.querySelector('.CHeader__mobile-toggle')

    let navClose = true;
    this.$toggleIcon.addEventListener('click', () => {
      if(navClose) {
        this.$headerMobile.classList.add('open')
        document.body.classList.add('stop-scroll')
      } else {
        this.$headerMobile.classList.remove('open')
        document.body.classList.remove('stop-scroll')
      }
      navClose = !navClose
    })
  }
}
</script>

<style lang="scss">
.CHeader {
  position: absolute;
  z-index: 10;
  top: 24px;
  width: 100%;
  height: 48px;
  padding: var(--col-header);

  &__link {
    padding: var(--pad-header);

    &--a {
      color: var(--grey-50);
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  &__mobile {
    display: none;

    &-toggle {
      position: absolute;
      top: 0;
      right: var(--col-main-side);

      a { 
        cursor: pointer;
        display: block;
        height: 100%;
        width: 100%;
      }

      span {
        background: var(--grey-50);
        display: block;
        width: 30px;
        height: 2px;
        margin-bottom: 3px;
        transition: all 0.3s ease;
      }
    }

    // Click to open
    &.open {
      .CHeader__mobile-toggle {
        span {
          background: var(--purple-dark);
          margin-bottom: 5px;

          &.first-child {
            width: 30px;
            margin-top: 11px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
          }

          &.second-child {
            width: 0px;
            opacity: 0;
          }

          &.third-child {
            width: 0px;
            opacity: 0;
          }

          &.fourth-child {
            width: 30px;
            margin-top: -21px;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
          }
        }
      }
    }
  }
}

@media (max-width: 1138px) {
  .CHeader {
    height: 96px;

    &__links {
      justify-content: flex-end;
      flex-wrap: wrap;
    }

    &__link {
      margin-bottom: 8px;
    }
  }
}

@media (max-width: 767px) {
  .CHeader {
    &__links {
      display: none;
    }

    &__mobile {
      display: block;

      &.open {
        .CHeader__linksMobile {
          display: flex;
        }
      }
    }

    &__linksMobile {
      display: none;
      background: white;
      width: 100vw;
      position: absolute;
      top: -24px;
      left: 0;
      width: 100%;
      height: 100vh;
      padding: 15vh var(--col-main-side);
      flex-direction: column;
      justify-content: space-between;
    }

    &__linkMobile {
      padding: var(--pad-header);

      &--aMobile {
        color: var(--purple-dark);
        text-transform: uppercase;
        text-decoration: none;
      }
    }
  }
}
</style>
