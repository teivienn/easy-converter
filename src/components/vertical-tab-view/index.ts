export * from './tab-view';
export * from './scene-map';
import { useContext } from 'react';
import { VerticalTabContext } from './context';

export const useVerticalTabViewContext = () => {
  return useContext(VerticalTabContext);
};
