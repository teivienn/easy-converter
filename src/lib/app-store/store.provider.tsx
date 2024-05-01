import { useMemo, type PropsWithChildren, useEffect, useContext } from 'react';
import { StoreContext } from './store.context';
import { CurrencyCodes, type RatesProvider } from '../../types';
import type { StoreState, StoreActions } from './store.types';
import type { RatesModel } from '../rates-api/rates-model';
import { RatesApi } from '../rates-api';
import BootSplash from 'react-native-bootsplash';
import {
  useArrayCache,
  useBooleanCache,
  useObjectCache,
  useStringCache,
} from '../../hooks/cache';
import { useLatestCallback } from '../../hooks/use-latest-callback';

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [onboard, setOnboard] = useBooleanCache('onboard');
  const [provider, setProvider] = useStringCache('provider') as [
    RatesProvider,
    (value: RatesProvider) => void,
  ];
  const [currencies, setCurrencies] = useArrayCache<CurrencyCodes[]>('currencies');
  const [rates, setRates] = useObjectCache<Record<CurrencyCodes, RatesModel>>('rates');

  useEffect(() => {
    if (provider) {
      const get = async () => {
        setRates(await RatesApi.getRates(provider));
      };

      get().finally(() => {
        BootSplash.hide({ fade: true });
      });
    } else {
      BootSplash.hide({ fade: true });
    }
  }, [provider, setRates]);

  const setCurrency = useLatestCallback((currency: CurrencyCodes) => {
    let data = currencies || [];

    if (!data?.includes(currency)) {
      data = [...data, currency];
    } else {
      data = data.filter((it) => it !== currency);
    }

    setCurrencies(data);
  });

  const value = useMemo<StoreState & StoreActions>(
    () => ({
      provider,
      rates: rates || ({} as StoreState['rates']),
      setCurrency,
      setProvider,
      currencies: currencies || [
        CurrencyCodes.USD,
        CurrencyCodes.KZT,
        CurrencyCodes.BYN,
        CurrencyCodes.GEL,
      ],
      onboard: !!onboard,
      setOnboard,
    }),
    [provider, rates, setProvider, onboard, setOnboard, currencies, setCurrency],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
