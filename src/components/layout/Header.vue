<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<div class="header__right">
					<div class="logo header__logo">
						<Icon name="logo" class="logo__icon" />
						<p class="logo__text header__logo-text">Shwifty</p>
					</div>
					<div class="lang header__lang">
						<button class="lang__btn header__lang-btn">en</button>
						<button class="lang__btn header__lang-btn header__lang-btn--active">ua</button>
					</div>
				</div>
				<div class="header__left">
					<nav class="nav header__nav">
						<ul class="nav__list header__nav-list">
							<li class="nav__item header__nav-item">про нас</li>
							<li class="nav__item header__nav-item">можливості</li>
							<li class="nav__item header__nav-item">пропозиції</li>
						</ul>
					</nav>
					<a class="header__link" href="tel:+380555555555">+380 55 555 55 55</a>
					<button class="btn header__btn">Завантажити</button>
				</div>
			</div>
			<!-- <RouterLink to="/">Home</RouterLink> -->
			<!-- <RouterLink to="/about">About Us</RouterLink> -->
		</div>
	</header>
</template>
<script setup>
import Icon from '../common/Icon.vue'
</script>
<style scoped lang="scss">
.header {
	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 64px;
	}
	&__right {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 58px;
	}
    &__left {
        display: flex;
		justify-content: space-between;
		align-items: center;

    }
	&__logo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 6px;
	}
	&__logo-text {
		@include pld-24-700;
	}
	&__lang {
		text-transform: uppercase;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}
	&__lang-btn {
		@include rbc-20-400;
		text-transform: uppercase;
		font-family: $ff-RobotoCondensed;
		color: $secondary-color;
		&--active {
			color: $text-white;
		}
	}
	&__nav-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 30px;
	}
	&__nav-item {
		@include rbc-20-400;
		text-transform: capitalize;
		font-family: $ff-RobotoCondensed;
	}
}

.logo {
	&__text {
		font-family: $ff-Playfair;
	}
}
</style>
