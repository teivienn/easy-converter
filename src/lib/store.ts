import { create } from 'zustand';
import { RatesDTO } from './api/api.types';
import { Currencies } from '../types';
import { createJSONStorage, persist } from 'zustand/middleware';
import { stateStorage } from './stateStorage';

type Store = {
  rates: Array<keyof typeof Currencies>;
  main: number;
};

type Actions = {
  setRate: (rate: Currencies) => void;
  setMain: (value: number) => void;
};

export const useStore = create(
  persist<Store & Actions>(
    (set) => ({
      rates: [],
      main: 1,
      setRate: (value) =>
        set(({ rates }) => {
          if (!rates.includes(value)) {
            return { rates: [...rates, value] };
          } else {
            return { rates: rates.filter((rate) => rate !== value) };
          }
        }),
      setMain: (main) => set({ main }),
    }),
    {
      name: 'rates',
      storage: createJSONStorage(() => stateStorage),
    },
  ),
);

type AllRatesStore = {
  rates: RatesDTO | null;
  setRates: (rates: RatesDTO) => void;
};

export const useAllRates = create<AllRatesStore>((set) => ({
  rates: null,
  setRates: (rates) => set({ rates }),
}));
