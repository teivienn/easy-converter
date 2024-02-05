import { ParamListBase } from '@react-navigation/native';

export interface ParamList extends ParamListBase {
  valutes: undefined;
  converter: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}
