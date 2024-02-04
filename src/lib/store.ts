import { create } from 'zustand';
import { Rates } from './api/api.types';

type Store = {
  rates: Rates;
  main: number;
};

type Actions = {
  setRates: (rates: Rates) => void;
  setMain: (value: number) => void;
};

export const useStore = create<Store & Actions>((set) => ({
  rates: {
    BYN: 1,
    RUB: 1,
    USD: 1,
    EUR: 1,
    PLN: 1,
    CNY: 1,
  },
  main: 1,
  setRates: (rates) => set({ rates }),
  setMain: (main) => set({ main }),
}));
