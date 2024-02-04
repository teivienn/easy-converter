import { Currencies } from '../../types';

export type CurrencyDTO = {
  Date: Date;
  Timestamp: Date;
  Valute: ValuteDTO;
};

interface Valute {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export type ValuteDTO = {
  BYN: Valute;
  USD: Valute;
  EUR: Valute;
  KZT: Valute;
  CNY: Valute;
  PLN: Valute;
};

export type Rates = {
  [Currencies.RUB]: number;
  [Currencies.BYN]: number;
  [Currencies.EUR]: number;
  [Currencies.PLN]: number;
  [Currencies.USD]: number;
  [Currencies.CNY]: number;
};
