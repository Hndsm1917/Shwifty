<template>
	<div class="layout">
		<resize class="layout__resize">
			<Header class="layout__header"/>
			<main class="layout__main">
				<router-view v-slot="{ Component }">
					<transition>
						<component :is="Component" />
					</transition>
				</router-view>
			</main>
			<Footer class="layout__footer" />
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
	&__resize {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		padding-bottom: em(70);
	}

	&__footer {
		flex: 0 0 auto;
	}
	&__main {
		flex: 1 1 auto;
	}
	&__header {
		// flex: 0 0 auto;
		position: fixed;
		top: em(64);
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		z-index: 10;
	}
}
</style>
