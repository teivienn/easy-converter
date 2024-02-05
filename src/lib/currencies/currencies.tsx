import { Iconify } from 'react-native-iconify';
import { Currencies } from '../../types';

export const currencies: Record<Currencies, { name: string; Icon: JSX.Element }> = {
  [Currencies.RUB]: {
    name: 'Российский рубль',
    Icon: <Iconify icon="circle-flags:ru" size={34} />,
  },
  [Currencies.BYN]: {
    name: 'Белорусский рубль',
    Icon: <Iconify icon="circle-flags:by" size={34} />,
  },
  [Currencies.USD]: {
    name: 'Американский доллар',
    Icon: <Iconify icon="circle-flags:us" size={34} />,
  },
  [Currencies.EUR]: {
    name: 'Евро',
    Icon: <Iconify icon="circle-flags:eu" size={34} />,
  },
  [Currencies.PLN]: {
    name: 'Польский злотый',
    Icon: <Iconify icon="circle-flags:pl" size={34} />,
  },
  [Currencies.CNY]: {
    name: 'Китайский юань',
    Icon: <Iconify icon="circle-flags:cn" size={34} />,
  },
  [Currencies.AUD]: {
    name: 'Австралийский доллар',
    Icon: <Iconify icon="circle-flags:au" size={34} />,
  },
  [Currencies.AZN]: {
    name: 'Азербайджанский манат',
    Icon: <Iconify icon="circle-flags:az" size={34} />,
  },
  [Currencies.GBP]: {
    name: 'Фунт стерлингов',
    Icon: <Iconify icon="circle-flags:gb" size={34} />,
  },
  [Currencies.AMD]: {
    name: 'Армянский драм',
    Icon: <Iconify icon="circle-flags:am" size={34} />,
  },
  [Currencies.BGN]: {
    name: 'Болгарский лев',
    Icon: <Iconify icon="circle-flags:bg" size={34} />,
  },
  [Currencies.BRL]: {
    name: 'Бразильский реал',
    Icon: <Iconify icon="circle-flags:br" size={34} />,
  },
  [Currencies.HUF]: {
    name: 'Венгерский форинт',
    Icon: <Iconify icon="circle-flags:hu" size={34} />,
  },
  [Currencies.VND]: {
    name: 'Вьетнамский донг',
    Icon: <Iconify icon="circle-flags:vn" size={34} />,
  },
  [Currencies.HKD]: {
    name: 'Гонконгский доллар',
    Icon: <Iconify icon="circle-flags:hk" size={34} />,
  },
  [Currencies.GEL]: {
    name: 'Грузинский лари',
    Icon: <Iconify icon="circle-flags:ge" size={34} />,
  },
  [Currencies.DKK]: {
    name: 'Датская крона',
    Icon: <Iconify icon="circle-flags:dk" size={34} />,
  },
  [Currencies.AED]: {
    name: 'Дирхам ОАЭ',
    Icon: <Iconify icon="circle-flags:ae" size={34} />,
  },
  [Currencies.EGP]: {
    name: 'Египетский фунт',
    Icon: <Iconify icon="circle-flags:eg" size={34} />,
  },
  [Currencies.INR]: {
    name: 'Индийская рупия',
    Icon: <Iconify icon="circle-flags:in" size={34} />,
  },
  [Currencies.IDR]: {
    name: 'Индонезийская рупия',
    Icon: <Iconify icon="circle-flags:id" size={34} />,
  },
  [Currencies.KZT]: {
    name: 'Казахстанский тенге',
    Icon: <Iconify icon="circle-flags:kz" size={34} />,
  },
  [Currencies.CAD]: {
    name: 'Канадский доллар',
    Icon: <Iconify icon="circle-flags:ca" size={34} />,
  },
  [Currencies.QAR]: {
    name: 'Катарский риал',
    Icon: <Iconify icon="circle-flags:qa" size={34} />,
  },
  [Currencies.KRW]: {
    name: 'Корейская вона',
    Icon: <Iconify icon="circle-flags:kr" size={34} />,
  },
  [Currencies.MDL]: {
    name: 'Молдавский лей',
    Icon: <Iconify icon="circle-flags:md" size={34} />,
  },
  [Currencies.NZD]: {
    name: 'Новозеландский доллар',
    Icon: <Iconify icon="circle-flags:nz" size={34} />,
  },
  [Currencies.NOK]: {
    name: 'Норвежская крона',
    Icon: <Iconify icon="circle-flags:no" size={34} />,
  },
  [Currencies.RON]: {
    name: 'Румынский лей',
    Icon: <Iconify icon="circle-flags:ro" size={34} />,
  },
  [Currencies.XDR]: {
    name: 'СДР (специальные права заимствования)',
    Icon: <Iconify icon="circle-flags:sd" size={34} />,
  },
  [Currencies.SGD]: {
    name: 'Сингапурский доллар',
    Icon: <Iconify icon="circle-flags:sg" size={34} />,
  },
  [Currencies.TJS]: {
    name: 'Таджикский сомони',
    Icon: <Iconify icon="circle-flags:tj" size={34} />,
  },
  [Currencies.THB]: {
    name: 'Тайский бат',
    Icon: <Iconify icon="circle-flags:th" size={34} />,
  },
  [Currencies.TRY]: {
    name: 'Турецкая лира',
    Icon: <Iconify icon="circle-flags:tr" size={34} />,
  },
  [Currencies.TMT]: {
    name: 'Туркменский манат',
    Icon: <Iconify icon="circle-flags:tm" size={34} />,
  },
  [Currencies.UZS]: {
    name: 'Узбекский сум',
    Icon: <Iconify icon="circle-flags:uz" size={34} />,
  },
  [Currencies.UAH]: {
    name: 'Украинский гривна',
    Icon: <Iconify icon="circle-flags:ua" size={34} />,
  },
  [Currencies.CZK]: {
    name: 'Чешская крона',
    Icon: <Iconify icon="circle-flags:cz" size={34} />,
  },
  [Currencies.SEK]: {
    name: 'Шведская крона',
    Icon: <Iconify icon="circle-flags:se" size={34} />,
  },
  [Currencies.CHF]: {
    name: 'Швейцарский франк',
    Icon: <Iconify icon="circle-flags:ch" size={34} />,
  },
  [Currencies.RSD]: {
    name: 'Сербский динар',
    Icon: <Iconify icon="circle-flags:rs" size={34} />,
  },
  [Currencies.ZAR]: {
    name: 'Южноафриканский рэнд',
    Icon: <Iconify icon="circle-flags:za" size={34} />,
  },
  [Currencies.JPY]: {
    name: 'Японская иена',
    Icon: <Iconify icon="circle-flags:jp" size={34} />,
  },
  [Currencies.KGS]: {
    name: 'Киргизский сом',
    Icon: <Iconify icon="circle-flags:kg" size={34} />,
  },
};
