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
      <Footer class="layout__footer" />

      <TariffPicker
          v-if="isModalShow"
          :package="modalData"
          @checkForm="checkData"
          @changePackType="changeModalData"
      />
    </resize>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import Resize from '@/components/layout/Resize.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import TariffPicker from '@/components/modals/TariffPicker.vue'

import { onBeforeMount } from 'vue'
import { useExchangeRatesStore } from '@/store/rates'

const isModalShow = ref(false)
const exchageRatesStore = useExchangeRatesStore()
const modalData = ref(null)

function openModal(data) {
	isModalShow.value = true
	document.querySelector('body')?.classList.add('noscroll')
	modalData.value = data
}
function closeModal() {
	isModalShow.value = false
	document.querySelector('body')?.classList.remove('noscroll')
}
function checkData() {
	console.log("Let's check form ")
}
function changeModalData(data) {
	modalData.value = data
}

provide('openModal', openModal)
provide('closeModal', closeModal)

onBeforeMount(() => {
  exchageRatesStore.getPrivatExchangeRates()
})
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
}
</style>
