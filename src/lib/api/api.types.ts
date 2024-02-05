import { Currencies } from '../../types';

export type CurrencyDTO = {
  Date: Date;
  Timestamp: Date;
  Valute: Record<string, Valute>;
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

export type RateDTO = {
  name: string;
  value: number;
};

export type RatesDTO = Record<Currencies, RateDTO>;
