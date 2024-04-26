<template>
  <div class="change-pack">
    <div class="change-pack__container">
      <div class="change-pack__wrapper">
        <h2 class="change-pack__title">Оберіть свій пакет</h2>

        <div v-for="pack in proposals" :key="pack.type" class="change-pack__pack">
          <div class="change-pack__content">
            <p class="change-pack__pack-type">{{ t(pack.title) }}</p>

            <p class="change-pack__pack-price">
              {{ calcPrice(pack.price) }} {{ t('proposals.currency') }}/{{ t('proposals.period') }}
            </p>
          </div>

          <button class="change-pack__btn" type="button" @click="changePack(pack)">
            <span class="change-pack__btn-text">{{ t('proposals.button') }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import proposals from '@/configs/proposals'
import { useExchangeRatesStore } from '@/store/rates'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { inject } from 'vue'

import type { ProposalCard } from '@/configs/types'

const exchangeRatesStore = useExchangeRatesStore()
const { locale, t } = useI18n()
const { usdRates } = storeToRefs(exchangeRatesStore)

const activateModal = inject('activateModal')

function changePack(pack: ProposalCard) {
  activateModal('ModalForm', pack)
}

function calcPrice(initPrice: number) {
  if (usdRates.value?.sale) {
    const price = Math.round(initPrice / Number(usdRates.value.sale))
    return locale.value === 'en' ? price : initPrice
  }

  return initPrice
}
</script>
<style scoped lang="scss">
.change-pack {
  &__container {
    height: 100%;
    padding: em(70) 0 em(121) 0;
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
  &__pack {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: em(10) em(16);
    border: em(2) solid $secondary-color;
    border-radius: em(4);
    &-type {
      @include rb-16-500;
    }
    &-price {
      @include rb-16-300;
    }
  }
  &__btn {
    &-text {
      @include rb-16-500;
      color: $accent-color;
    }
  }
}
</style>
