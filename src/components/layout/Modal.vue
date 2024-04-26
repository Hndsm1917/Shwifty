<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__container">
        <button class="modal__close-btn" @click="close" type="button">
          <Icon name="cross" class="modal__close-icon" />
        </button>

        <component :is="components[modalState.componentName]" :data="modalState.modalData" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Icon from '@/components/common/Icon.vue'

import ModalForm from '@/components/modals/ModalForm.vue'
import ChangePack from '@/components/modals/ChangePack.vue'
import CheckFields from '@/components/modals/CheckFields.vue'

import type { ModalState } from '@/types/types'

const components = {
  ModalForm,
  ChangePack,
  CheckFields
}
const close = inject('closeModal')

defineProps<{
  modalState: ModalState
}>()
</script>

<style scoped lang="scss">
.modal {
  &__wrapper {
    padding-top: em(104);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }

  &__container {
    width: em(780);
    background-color: $bg-color;
    border-radius: em(24);
    padding: 0 em(200);
    position: relative;
  }

  &__close-btn {
    position: absolute;
    top: em(41);
    right: em(41);
  }

  &__close-icon {
    width: em(18);
    height: em(18);
  }
}
</style>
