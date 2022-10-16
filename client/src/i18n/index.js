import {createI18n} from 'vue-i18n';
import {locale} from '@/config';
import en from './en.json';

export default createI18n({
  locale,
  allowComposition: true,
  fallbackLocale: locale,
  messages: {
    en
  }
});