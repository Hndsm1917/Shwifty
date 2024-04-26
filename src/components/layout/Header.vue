<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__right">
          <div class="header__logo">
            <Icon name="logo" class="header__icon" />
            <p class="header__logo-text">Shwifty</p>
          </div>
          <div class="lang header__lang">
            <button
              v-for="lang in langs"
              :key="lang"
              @click="switchLang(lang)"
              class="lang__btn header__lang-btn"
              :class="{ 'header__lang-btn--active': locale === lang }"
              type="button"
            >
              {{ lang }}
            </button>
          </div>
        </div>
        <div class="header__left">
          <nav class="nav header__nav">
            <ul class="nav__list header__nav-list">
              <li v-for="{ path, text } in links" :key="text" class="nav__item header__nav-item">
                <button @click="scrollTo(path)" class="header__font header__font--link" type="button">
                  {{ t(text) }}
                </button>
              </li>
            </ul>
          </nav>
          <a class="header__font header__font--link" href="tel:+380555555555">+380 55 555 55 55</a>
          <button class="btn header__btn">
            <span class="btn__text">{{ t("header.download") }}</span>
          </button>
        </div>
      </div>
      <!-- <RouterLink to="/">Home</RouterLink> -->
      <!-- <RouterLink to="/about">About Us</RouterLink> -->
    </div>
  </header>
</template>
<script setup>
import Icon from '@/components/common/Icon.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const langs = ['en', 'ua']
const links = [
  { path: '', text: 'header.about' },
  { path: '', text: 'header.abilities' },
  { path: '', text: 'header.proposals' }
]
function scrollTo(path) {
  console.log(path)
}
function switchLang(lang) {
  if (lang === locale.value) return
  lang === 'en' ? (locale.value = 'en') : (locale.value = 'ua')
}
</script>
<style scoped lang="scss">
.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: em(58);
  }
  &__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: em(64);
  }
  &__logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: em(6);
  }

  &__icon {
    width: em(32);
    height: em(32);
  }
  &__logo-text {
    @include pld-24-700;
  }
  &__lang {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: em(10);
  }
  &__lang-btn {
    @include rbc-20-400;
    text-transform: uppercase;
    color: $secondary-color;
    &--active {
      color: $text-white;
      pointer-events: none;
    }
  }
  &__nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: em(30);
  }
  &__nav-item {
    @include rbc-20-400;
    text-transform: capitalize;
  }
  &__font {
    &--link {
      @include rbc-20-400;
      text-transform: capitalize;
    }
  }

  &__btn {
    width: em(180);
    height: em(40);
  }
}
</style>
