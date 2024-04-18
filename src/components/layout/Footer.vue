<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__wrapper">
				<div class="footer__block">
					<div class="footer__copyright">2022 &copy; Всі права захищено</div>
				</div>

				<div class="footer__block">
					<div class="footer__author">
						Дизайн стоворено студенткою <br />
						<a class="footer__link" href="#">Iриною Трофименко</a>
					</div>
				</div>

				<ul class="footer__menu-list">
					<li class="footer__menu-item">
						<a class="footer__menu-link" href="#">
							<Icon class="footer__menu-icon" name="facebook" />
						</a>
					</li>
					<li class="footer__menu-item">
						<a class="footer__menu-link" href="#">
							<Icon class="footer__menu-icon" name="youtube" />
						</a>
					</li>
					<li class="footer__menu-item">
						<a class="footer__menu-link" href="#">
							<Icon class="footer__menu-icon" name="insta" />
						</a>
					</li>
				</ul>

				<div class="footer__text-block">
					<div class="footer__text">
						Цей проект створено в межах курсу <br />
						“Основи вебдизайну” <br />
						від &nbsp; <a class="footer__link" href="#">Креативної практики</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
<script setup>
import Icon from '@/components/common/Icon.vue'
</script>
<style scoped lang="scss">
.footer {
	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: em(120);
	}
	&__block {
		width: em(180);
	}
	&__text-block {
		width: em(280);
	}
	&__copyright,
	&__author,
	&__text {
		@include rb-12-400;
	}
	&__copyright,
	&__author {
		color: $secondary-color;
	}
	&__link {
		color: $accent-color;
		text-decoration: underline;
	}
	&__menu-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: em(42);
	}
	&__menu-icon {
		width: em(32);
		height: em(32);
	}
}
</style>
