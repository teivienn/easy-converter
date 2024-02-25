import type { CurrencyCodes, RatesProvider } from '../../types';
import type { RatesModel } from '../rates-api/rates-model';

export type StoreState = {
  provider: RatesProvider;
  rates: Record<CurrencyCodes, RatesModel>;
  currencies: CurrencyCodes[];
  onboard: boolean;
};

export type StoreActions = {
  setProvider: (provider: RatesProvider) => void;
  setCurrency: (currency: CurrencyCodes) => void;
  setOnboard: (value: boolean) => void;
};
