<template>
	<div class="layout">
		<resize class="layout__resize">
			<main class="layout__main">
				<router-view v-slot="{ Component }">
					<transition>
						<component :is="Component" />
					</transition>
				</router-view>
			</main>
		</resize>
	</div>
</template>

<script setup lang="ts">
import Resize from '@/components/layout/Resize.vue'
</script>

<style scoped lang="scss">
.layout {

}
</style>
