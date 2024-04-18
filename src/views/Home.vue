<template>
	<div class="page">
		<section class="section hero">
			<div class="container">
				<div class="hero__wrapper">
					<div class="section__h1">
						<h1 class="section__font section__font--h1 hero__title">
							Музика,<br />
							яка чіпляє
						</h1>
					</div>
					<p class="section__font section__font--subtitle hero__subtitle">
						Щодня нові треки. Плейлісти для кожного.
					</p>
					<button class="btn hero__btn" type="button">
						<span class="btn__text btn__text--dark">Почати</span>
						<Icon class="hero__btn-icon" name="arrowDown" />
					</button>
					<button class="hero__scroll">
						<Icon class="hero__scroll-icon" name="mouse" />
						<p class="hero__scroll-text">Прокрутіть вниз по деталі</p>
					</button>
				</div>
			</div>
		</section>
		<section class="section about">
			<div class="about__wrapper">
				<div class="about__picture">
					<img class="about__img" src="/images/about.jpg" alt="about" />
				</div>
				<div class="about__content">
					<div class="section__h2">
						<h2 class="section__font section__font--h2">Про нас</h2>
					</div>
					<p class="section__font section__font--text">
						Shwifty — це сервіс, в якому добірки створюють наші власні музичні експерти. Ми самі
						змалечку виховували їх та виростили на таємному острові, що був повністю ізольований від
						поганої музики. Їх смак беззаперечний.
					</p>
					<button class="about__link">
						<p class="about__link-text">Переконайтесь в цьому прямо зараз</p>
						<Icon class="about__link-icon" name="arrowRight" />
					</button>
				</div>
			</div>
		</section>
		<section class="abilities">
			<div class="container">
				<div class="abilities__wrapper">
					<div class="section__h2">
						<h2 class="section__font section__font--h2">Можливості</h2>
					</div>
					<ul class="abilities__list">
						<li v-for="{ icon, text } in abilities" :key="icon" class="abilities__list-item">
							<Icon class="abilities__list-icon" :name="icon" />
							<p class="section__font section__font--text">{{ text }}</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="proposals">PROPOSALS</section>
	</div>
</template>

<script setup lang="ts">
import Icon from '@/components/common/Icon.vue'
interface Ability {
	icon: string
	text: string
}
const abilities: Ability[] = [
	{ icon: 'star', text: 'Лише музика, що варта уваги' },
	{ icon: 'playlist', text: 'Професійні авторські добірки' },
	{ icon: 'songs', text: 'Мільйони пісень, відібраних вручну' },
	{ icon: 'user', text: 'Адаптація під ваш смак' },
	{ icon: 'media', text: 'Медіатека, що оновлюється щосекунди' },
	{ icon: 'translate', text: 'Автопереклад текстів пісень українською' }
]
</script>

<style lang="scss" scoped>
.hero {
	background-image: url(/images/cover.jpg);
	background-size: 100%;
	background-repeat: no-repeat;
	&__wrapper {
		width: em(580);
		padding-top: em(264);
		padding-bottom: em(250);
		position: relative;
	}
	&__btn {
		width: em(180);
		height: em(48);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: em(8);
		margin-top: em(72);
	}
	&__btn-icon {
		width: em(18);
		height: em(20);
	}
	&__scroll {
		display: flex;
		justify-content: center;
		gap: em(10);
		align-items: center;
		position: absolute;
		left: 0;
		bottom: em(80);
		&-icon {
			width: em(18);
			height: em(29);
		}
		&-text {
			@include rbc-20-400;
		}
	}
}
.about {
	&__wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: em(20);
	}
	&__picture {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__img {
		width: 100%;
	}
	&__content {
		width: em(580);
		padding: em(46) 0 em(46) em(100);
	}
	&__link {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: em(20);
		margin-top: em(64);
		&-text {
			@include rb-20-700;
			color: $accent-color;
		}
		&-icon {
			width: em(20);
			height: em(15);
		}
	}
}
.abilities {
	&__wrapper {
		padding: em(64) 0;
		max-width: em(1080);
	}
	&__list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: em(32) em(120);
		&-item {
			display: flex;
			align-items: center;
			gap: em(10);
		}
		&-icon {
			width: em(54);
			height: em(54);
		}
	}
}
</style>
