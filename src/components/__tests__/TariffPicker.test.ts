import TariffPicker from '@/components/modals/TariffPicker.vue'
import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

test('check form input', async () => {
	const modal = mount(TariffPicker)
	const input = modal.find('input[type=email]')

	await input.setValue('my@mail.com')
})