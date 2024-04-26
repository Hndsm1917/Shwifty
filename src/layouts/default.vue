<template>
  <div class="layout">
    <resize class="layout__resize">
      <Header class="layout__header" />

      <main class="layout__main">
        <router-view v-slot="{ Component }">
          <transition>
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <ModalWrapper class="layout__modal" v-if="modalState.isModalActive" v-model:modalState="modalState" />
    </resize>

    <Footer class="layout__footer" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, provide } from 'vue'
import { useExchangeRatesStore } from '@/store/rates'

import Resize from '@/components/layout/Resize.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import ModalWrapper from '@/components/layout/Modal.vue'

import type { ModalState } from '@/types/types'

const exchageRatesStore = useExchangeRatesStore()

const modalState = ref<ModalState>({
  componentName: '',
  isModalActive: false,
  modalData: null
})

provide('activateModal', activateModal)
provide('closeModal', closeModal)

onBeforeMount(() => {
  exchageRatesStore.getPrivatExchangeRates()
})

function activateModal(name: string, data: any | null = null) {
  modalState.value.isModalActive = true
  modalState.value.modalData = data
  modalState.value.componentName = name

  document.querySelector('body')?.classList.add('noscroll')
}

function closeModal() {
  modalState.value.isModalActive = false
  modalState.value.modalData = null
  modalState.value.componentName = ''

  document.querySelector('body')?.classList.remove('noscroll')
}
</script>

<style scoped lang="scss">
.layout {
  &__resize {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: em(70);
    position: relative;
  }

  &__footer {
    flex: 0 0 auto;
  }
  &__main {
    flex: 1 1 auto;
  }
  &__header {
    position: fixed;
    top: em(64);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 10;
  }

  &__modal {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: $modal-bg;
    z-index: 20;
  }
}
</style>
