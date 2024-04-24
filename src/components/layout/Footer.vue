<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__block">
          <div class="footer__copyright">2022 &copy; {{ t("footer.copyright") }}</div>
        </div>

        <div class="footer__block">
          <div class="footer__author">
            {{ t("footer.author") }} <br />
            <a class="footer__link" href="#">{{ t("footer.name") }}</a>
          </div>
        </div>

        <ul class="footer__menu-list">
          <li class="footer__menu-item">
            <a class="footer__menu-link" href="#">
              <Icon class="footer__menu-icon" name="facebook" />
            </a>
          </li>
          <li class="footer__menu-item">
            <a class="footer__menu-link" href="#">
              <Icon class="footer__menu-icon" name="youtube" />
            </a>
          </li>
          <li class="footer__menu-item">
            <a class="footer__menu-link" href="#">
              <Icon class="footer__menu-icon" name="insta" />
            </a>
          </li>
        </ul>

        <div class="footer__text-block">
          <div class="footer__text">
            {{ t("footer.text_1") }} <br />
            {{ t("footer.text_2") }} <br />
            {{ t("footer.text_3") }} &nbsp;
            <a class="footer__link" href="#">{{ t("footer.text_4") }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import Icon from '@/components/common/Icon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<style scoped lang="scss">
.footer {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: em(120);
  }
  &__block {
    width: em(180);
  }
  &__text-block {
    width: em(280);
  }
  &__copyright,
  &__author,
  &__text {
    @include rb-12-400;
  }
  &__copyright,
  &__author {
    color: $secondary-color;
  }
  &__link {
    color: $accent-color;
    text-decoration: underline;
  }
  &__menu-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: em(42);
  }
  &__menu-icon {
    width: em(32);
    height: em(32);
  }
}
</style>
