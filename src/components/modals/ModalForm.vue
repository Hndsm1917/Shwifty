<template>
  <div class="modal-form">
    <div class="modal-form__container">
      <form class="modal-form__form" id="reg_form" @submit.prevent="submitForm">
        <div class="modal-form__wrapper">
          <h2 class="modal-form__title">{{ $t('form.title') }}</h2>

          <div class="modal-form__package">
            <p class="modal-form__label" for="package">
              {{ $t('form.choose_text') }}
              <span class="modal-form__package-type">{{ $t('packages.' + data.type) }}</span>
            </p>

            <button class="modal-form__package-btn" type="button" @click="changePack">
              {{ $t('form.change') }}
            </button>
          </div>

          <div class="modal-form__block">
            <label class="modal-form__label" for="username">{{ $t('form.name_label') }}</label>
            <input
              class="modal-form__input"
              type="text"
              name="username"
              id="username"
              :placeholder="$t('form.name_placeholder')"
              v-model="formData.name"
            />
          </div>

          <div class="modal-form__block">
            <label for="useremail" class="modal-form__label">{{ $t('form.email_label') }}</label>
            <input
              class="modal-form__input"
              type="email"
              name="useremail"
              id="useremail"
              placeholder="user@gmail.com"
              v-model="formData.email"
            />

            <Icon class="modal-form__icon" name="envelope" />
          </div>

          <div class="modal-form__agree">
            <label class="modal-form__label modal-form__label--agree" for="agree">
              <input class="modal-form__check" type="checkbox" name="agree" id="agree" v-model="formData.isAgree" />

              <span class="modal-form__custom-check">
                <Icon class="modal-form__check-icon" :class="{ visible: formData.isAgree }" name="checkbox" />
              </span>

              {{ $t('form.agree') }} &nbsp;

              <a class="modal-form__link" href="https://gsap.com/" target="_blank">{{ $t('form.conditions') }}</a>
            </label>
          </div>
        </div>

        <button class="btn modal-form__btn" type="submit" form="reg_form">
          <span class="btn__text btn__text--dark">{{ $t('form.register') }}</span>
        </button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, ref } from 'vue'
import Icon from '@/components/common/Icon.vue'

const formData = ref({
  name: '',
  email: '',
  isAgree: false
})

const props = defineProps<{
  data: any
}>()

const emit = defineEmits(['change', 'submitForm'])

const activateModal = inject('activateModal')

function changePack() {
  activateModal('ChangePack')
  //emit('change')
}

function submitForm() {
  activateModal('CheckFields', {
    name: formData.value.name,
    email: formData.value.email,
    agree: formData.value.isAgree,
    selectedPackage: props.data.type
  })
}
</script>
<style scoped lang="scss">
.modal-form {
  &__container {
    height: 100%;

    padding: em(70) 0 em(90) 0;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: em(64);
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: em(24);
  }
  &__title {
    @include rbc-32-400;
    text-align: center;
  }
  &__package {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: em(10) em(16);
    border-radius: em(4);
    border: em(2) solid $secondary-color;
    &-type {
      @include rb-16-500;
    }
    &-btn {
      @include rb-16-500;
      color: $accent-color;
    }
  }
  &__block {
    display: flex;
    flex-direction: column;
    gap: em(8);
    position: relative;
  }
  &__input {
    @include rb-16-500;
    padding: em(10) em(16);
    border-radius: em(4);
    &::placeholder {
      color: $secondary-color;
    }
    &:focus {
      outline: none;
      border: 2px solid $accent-color;
    }
  }
  &__label {
    @include rb-16-400;
    display: block;
    &--agree {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  &__icon {
    width: em(20);
    height: em(16);
    position: absolute;
    bottom: em(14);
    right: em(14);
  }
  &__link {
    text-decoration: underline;
    color: $accent-color;
  }
  &__btn {
    height: em(52);
  }
  &__agree {
  }
  &__check {
    width: em(0);
    height: em(0);
    opacity: 0;
    position: absolute;
    z-index: -10;
  }
  &__custom-check {
    display: inline-block;
    width: em(32);
    height: em(32);
    border: em(2) solid $secondary-color;
    border-radius: em(4);
    margin-right: em(6);
    position: relative;
  }
  &__check-icon {
    width: em(16);
    height: em(16);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 0.3s ease-in;
  }
}
.visible {
  transform: translate(-50%, -50%) scale(1);
}
</style>
