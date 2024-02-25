import { ParamListBase } from '@react-navigation/native';

export interface ParamList extends ParamListBase {
  settings: undefined;
  currencies: undefined;
  explore: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}
