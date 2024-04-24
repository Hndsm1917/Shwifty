import en from './en.json'
import ua from './ua.json'
import { createI18n } from 'vue-i18n'

export default createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages: Object.assign({ en, ua })
})
