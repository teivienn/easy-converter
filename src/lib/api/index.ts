import config from 'react-native-config';
import { RatesDTO, CurrencyDTO } from './api.types';

export const getRates = async (): Promise<RatesDTO> => {
  const response = await fetch(config.API_URL!);
  const data: CurrencyDTO = await response.json();

  const rates: Record<string, { value: number; name: string }> = {
    RUB: {
      value: 1,
      name: 'Российский рубль',
    },
  };

  for (const [key, value] of Object.entries(data.Valute)) {
    rates[key] = {
      value: value.Value,
      name: value.Name,
    };
  }

  return rates as RatesDTO;
};
