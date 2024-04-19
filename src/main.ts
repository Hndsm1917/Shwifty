import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { createI18n, useI18n } from 'vue-i18n'

import '@/assets/scss/index.scss'

import App from './App.vue'
import router from './router'

import { languages, defaultLocale } from './i18n'

// Why use Object.assign()
const messages = Object.assign(languages)
// legacy: false => working with Composition API
// locale => default language when loading the app
// fallbackLocale => language if alternative is not provided 
//messages => all our languages
const i18n = createI18n({
	legacy: false,
	locale: defaultLocale,
	fallbackLocale: 'en',
	messages: messages
})
const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
	store.router = markRaw(router)
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
