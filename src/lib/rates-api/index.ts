import { RatesProvider, CurrencyCodes } from '../../types/index';
import { CBRFApi } from './cbrf/cbrf.api';
import { NBRBApi } from './nbrb/nbrb.api';
import type { RatesModel } from './rates-model';

export const RatesApi = {
  getRates: async (
    provider: RatesProvider,
  ): Promise<Record<CurrencyCodes, RatesModel>> => {
    if (provider === RatesProvider.CBRF) {
      return await CBRFApi.getRates();
    }

    if (provider === RatesProvider.NBRB) {
      return await NBRBApi.getRates();
    }

    return {} as Record<CurrencyCodes, RatesModel>;
  },
};
