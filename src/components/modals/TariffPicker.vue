<template>
	<div class="modal">
		<div class="modal__wrapper">
			<div class="modal__container">
				<button class="modal__close-btn" @click="close" type="button">
					<Icon name="cross" class="modal__close-icon" />
				</button>

				<ModalForm
					:pack="props.package"
					v-show="content === 'form'"
					@change="change"
					@submitForm="checkForm"
				/>
				<ChangePack v-show="content === 'change'" @changePack="changePackType" />
				<CheckFields
					v-show="content === 'check'"
					:package="props.package"
					:name="formPayload.name"
					:email="formPayload.email"
					:agree="formPayload.agree"
					@return="toForm"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import Icon from '@/components/common/Icon.vue'
import ModalForm from '@/components/modals/ModalForm.vue'
import ChangePack from '@/components/modals/ChangePack.vue'
import CheckFields from '@/components/modals/CheckFields.vue'

const content = ref('form')
const formPayload = ref({ name: '', email: '', agree: false })
const props = defineProps(['package'])
const emit = defineEmits(['checkForm', 'changePackType'])
function change() {
	content.value = 'change'
}
function checkForm(data) {
	content.value = 'check'
	emit('checkForm')
	console.log(data)
	formPayload.value = {
		name: data.name,
		email: data.email,
		agree: data.agree
	}
	console.log(formPayload.value.name)
}
function toForm() {
	content.value = 'form'
}
function changePackType(data: string) {
	console.log(data)
	emit('changePackType', data)
	content.value = 'form'
}
const close = inject('closeModal')
</script>

<style scoped lang="scss">
.modal {
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: $modal-bg;
	z-index: 20;

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
