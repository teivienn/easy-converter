import { createContext } from 'react';

type VerticalTabContextState = {
  headerHeight: number;
};

export const VerticalTabContext = createContext<VerticalTabContextState>({} as never);
