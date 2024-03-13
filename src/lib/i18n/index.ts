import { NativeModules } from 'react-native';
import { I18n } from 'i18n-js';
import ru from './ru.json';
import en from './en.json';

export const Locales = {
  En: 'en',
  Ru: 'ru',
};

const getCurrentLocale = (): keyof typeof Locales => {
  return NativeModules.I18nManager.localeIdentifier?.substring(0, 2) || Locales.En;
};

const i18n = new I18n({
  en,
  ru,
});

i18n.defaultLocale = getCurrentLocale();
i18n.enableFallback = !__DEV__;
i18n.locale = getCurrentLocale();

export const locale = i18n.locale as keyof typeof Locales;

export const translate = (scope: string) => i18n.t(scope);
