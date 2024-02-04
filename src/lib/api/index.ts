import config from 'react-native-config';
import { Rates, CurrencyDTO } from './api.types';

export const getRates = async (): Promise<Rates> => {
  const response = await fetch(config.API_URL!);
  const data: CurrencyDTO = await response.json();

  const rates: Record<string, number> = {
    RUB: 1,
  };

  for (const [key, value] of Object.entries(data.Valute)) {
    rates[key] = value.Value;
  }

  console.log(rates, 'rates');

  return rates as Rates;
};
