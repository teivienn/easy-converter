import { createContext } from 'react';
import type { StoreState, StoreActions } from './store.types';

export const StoreContext = createContext<StoreState & StoreActions>({} as never);
