<template>
  <div class="modal-form">
    <div class="modal-form__container">
      <form class="modal-form__form" id="reg_form" @submit="submitForm">
        <div class="modal-form__wrapper">
          <h2 class="modal-form__title">{{ $t('form.title') }}</h2>

          <div class="modal-form__package">
            <p class="modal-form__label" for="package">
              {{ $t('form.choose_text') }}
              <span
                data-cy-modal-selector="package"
                :data-cy-modal-val="data.type"
                class="modal-form__package-type"
              >
                {{ $t('packages.' + data.type) }}
              </span>
            </p>

            <button
              class="modal-form__package-btn"
              type="button"
              @click="changePack"
            >
              {{ $t('form.change') }}
            </button>
          </div>

          <div class="modal-form__block">
            <label class="modal-form__label" for="name">
              {{ $t('form.name_label') }}
            </label>
            <input
              class="modal-form__input"
              type="text"
              name="name"
              id="username"
              :placeholder="$t('form.name_placeholder')"
              :class="[
                { 'modal-form__input--error': errors.name },
                { 'modal-form__input--valid': !errors.name && meta.touched }
              ]"
              v-model="name"
              v-bind="nameAttrs"
            />
            <div>{{ errors.name }}</div>
          </div>

          <div class="modal-form__block">
            <label for="useremail" class="modal-form__label">{{
              $t('form.email_label')
            }}</label>
            <input
              class="modal-form__input"
              type="email"
              name="useremail"
              id="useremail"
              placeholder="user@gmail.com"
              v-model="email"
              v-bind="emailAttrs"
            />

            <div>{{ errors.email }}</div>

            <Icon class="modal-form__icon" name="envelope" />
          </div>

          <div class="modal-form__agree">
            <label
              class="modal-form__label modal-form__label--agree"
              for="isAgree"
            >
              <input
                class="modal-form__check"
                type="checkbox"
                name="isAgree"
                id="isAgree"
                v-model="isAgree"
                v-bind="isAgreeAttrs"
              />

              <span class="modal-form__custom-check">
                <Icon
                  class="modal-form__check-icon"
                  :class="{ visible: isAgree }"
                  name="checkbox"
                />
              </span>

              {{ $t('form.agree') }} &nbsp;

              <a
                class="modal-form__link"
                href="https://gsap.com/"
                target="_blank"
                >{{ $t('form.conditions') }}</a
              >
            </label>
            <div>{{ errors.isAgree }}</div>
          </div>
        </div>

        <button
          :disabled="!meta.valid"
          class="btn modal-form__btn"
          :class="{ 'btn--disabled': !meta.valid }"
          type="submit"
          form="reg_form"
        >
          <span class="btn__text btn__text--dark">
            {{ $t('form.register') }}
          </span>
        </button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import Icon from '@/components/common/Icon.vue'

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

const activateModal = inject('activateModal')
const props = defineProps<{
  data: any
}>()

const { errors, defineField, meta, handleSubmit } = useForm({
  initialValues: {
    name: props.data.name ?? '',
    email: props.data.email ?? '',
    isAgree: props.data.isAgree ?? false
  },

  validationSchema: toTypedSchema(
    yup.object({
      email: yup.string().email().required(),
      name: yup.string().min(6).required(),
      isAgree: yup.boolean().required().isTrue()
    })
  )
})

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')
const [isAgree, isAgreeAttrs] = defineField('isAgree')

function changePack() {
  activateModal('ChangePack')
}

function submitForm() {
  return handleSubmit(({ name, email, isAgree }) => {
    activateModal('CheckFields', {
      name: name,
      email: email,
      agree: isAgree,
      selectedPackage: props.data.type
    })
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
    transition: 150ms ease-out;
  }
}
.visible {
  transform: translate(-50%, -50%) scale(1);
}
</style>
