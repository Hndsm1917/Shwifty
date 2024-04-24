<template>
  <div class="card">
    <div class="card__top">
      <div class="card__title">
        <h3 class="card__title-text">{{ $t('proposals.package') }} "{{ $t(data.title) }}"</h3>
      </div>
      <p class="card__text">{{ $t('proposals.includes') }}:</p>
      <ul class="card__list">
        <li v-for="item in data.available" :key="item" class="card__list-item">
          <Icon name="check" class="card__list-icon" />
          <p class="card__list-text">{{ $t(item) }}</p>
        </li>
      </ul>
    </div>
    <div class="card__bottom">
      <div class="card__line" />
      <p class="card__title-text">
        {{ data.price }} {{ $t('proposals.currency') }} / {{ $t('proposals.period') }}
      </p>
      <button type="button" class="btn card__btn">
        <span class="btn__text btn__text--dark">{{ $t('proposals.button') }}</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Icon from '@/components/common/Icon.vue'
import { useExchangeRatesStore } from '@/store/rates'
import { storeToRefs } from 'pinia'
import type { ProposalCard } from '@/configs/types'

const exchangeRatesStore = useExchangeRatesStore()
const { usdRates } = storeToRefs(exchangeRatesStore)

const props = defineProps<{ data: ProposalCard }>()
</script>
<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: em(64);
  &__title {
    padding-bottom: em(30);
    &-text {
      @include rbc-32-400;
    }
  }
  &__text {
    @include rb-20-400;
    color: $secondary-color;
  }
  &__list {
    padding-top: em(20);
    display: flex;
    flex-direction: column;
    gap: em(20);
    &-item {
      display: flex;
      align-items: center;
      gap: em(10);
    }
    &-icon {
      width: em(30);
      height: em(30);
    }
    &-text {
      @include rb-16-400;
    }
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    gap: em(30);
  }
  &__line {
    height: em(2);
    background-color: $secondary-color;
  }
  &__btn {
    width: 100%;
    height: em(52);
  }
}
</style>
