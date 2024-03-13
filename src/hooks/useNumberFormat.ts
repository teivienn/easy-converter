import { useMemo } from 'react';
import { Locales, locale } from '../lib/i18n';

const IntlLocales = {
  [Locales.En]: 'en-US',
  [Locales.Ru]: 'ru-Ru',
};

export const useNumberFormat = (value = 0) => {
  const intl = useMemo(() => {
    return new Intl.NumberFormat(IntlLocales[locale], {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, []);

  return intl.format(value);
};
