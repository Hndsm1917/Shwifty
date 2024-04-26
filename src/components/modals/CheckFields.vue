<template>
	<div class="check-fields">
		<div class="check-fields__container">
			<div class="check-fields__content">
				<h2 class="check-fields__title">{{ $t('check.title') }}</h2>
				<div class="check-fields__item">
					<p class="check-fields__item-name">{{ $t('form.choose_text') }}</p>
					<p class="check-fields__item-value">{{ $t('packages.' + props.package) }}</p>
				</div>
				<div class="check-fields__item">
					<p class="check-fields__item-name">{{ $t('form.name_label') }}</p>
					<p class="check-fields__item-value">{{ props.name }}</p>
				</div>
				<div class="check-fields__item">
					<p class="check-fields__item-name">{{ $t('form.email_label') }}</p>
					<p class="check-fields__item-value">{{ props.email }}</p>
				</div>
				<div class="check-fields__agree">
					<p class="check-fields__item-text">
						{{ $t('check.agree') }}
						<a class="check-fields__item-link" href="https://gsap.com/" target="_blank">{{
							$t('check.conditions')
						}}</a>
					</p>
				</div>
			</div>
			<div class="check-fields__content">
				<button class="btn btn--secondary check-fields__btn" @click="returnToForm">
					<span class="btn__text">{{ $t('check.return') }}</span>
				</button>
				<button class="btn check-fields__btn">
					<span class="btn__text btn__text--dark">{{ $t('check.confirm') }}</span>
				</button>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const props = defineProps(['package', 'name', 'email', 'agree'])
const emit = defineEmits(['return'])
function returnToForm() {
	emit('return')
}
</script>
<style scoped lang="scss">
.check-fields {
	&__container {
		height: 100%;
		padding: em(70) 0 em(121) 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: em(64);
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: em(24);
	}
	&__item {
		@include rb-16-400;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: em(20) 0 em(10);
		border-bottom: em(1) solid $secondary-color;
		&-name {
			color: $secondary-color;
		}
		&-value {
			@include rb-16-500;
		}
		&-link {
			color: $accent-color;
			text-decoration: underline;
		}
	}
	&__title {
		@include rbc-32-400;
		text-align: center;
	}
	&__btn {
		height: em(52);
	}
}
</style>
