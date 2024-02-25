import { CurrencyCodes } from '../../../types/index';
import type { RatesModel } from '../rates-model';
import type { CBRFResponseDTO } from './cbrf.dto';

export const CBRFMapper = (data: CBRFResponseDTO) => {
  const rates: Record<string, RatesModel> = {
    RUB: {
      nominal: 1,
      rate: 1,
      change: 0,
      code: CurrencyCodes.RUB,
    },
  };

  for (const [key, value] of Object.entries(data.Valute)) {
    rates[key] = {
      rate: value.Value,
      code: value.CharCode,
      nominal: value.Nominal,
      change: value.Value - value.Previous,
    };
  }

  return rates as Record<CurrencyCodes, RatesModel>;
};
