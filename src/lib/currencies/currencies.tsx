import { Iconify } from 'react-native-iconify';
import { Currencies } from '../../types';

export const currencies = [
  {
    name: Currencies.RUB,
    Icon: <Iconify icon="circle-flags:ru" size={34} />,
  },
  {
    name: Currencies.BYN,
    Icon: <Iconify icon="circle-flags:by" size={34} />,
  },
  {
    name: Currencies.USD,
    Icon: <Iconify icon="circle-flags:us" size={34} />,
  },
  {
    name: Currencies.EUR,
    Icon: <Iconify icon="circle-flags:eu" size={34} />,
  },
  {
    name: Currencies.PLN,
    Icon: <Iconify icon="circle-flags:pl" size={34} />,
  },
  {
    name: Currencies.CNY,
    Icon: <Iconify icon="circle-flags:cn" size={34} />,
  },
];
