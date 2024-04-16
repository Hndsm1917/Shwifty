<template>
	<div class="layout">
		<resize class="layout__resize">
			<Header />
			<main class="layout__main">
				<router-view v-slot="{ Component }">
					<transition>
						<component :is="Component" />
					</transition>
				</router-view>
			</main>
			<Footer />
		</resize>
	</div>
</template>

<script setup lang="ts">
import Resize from '@/components/layout/Resize.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<style scoped lang="scss">
.layout {
}
</style>
