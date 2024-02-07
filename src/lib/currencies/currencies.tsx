import { Currencies } from '../../types';

import ru from '../../assets/icon-flags/ru.png';
import by from '../../assets/icon-flags/by.png';
import us from '../../assets/icon-flags/us.png';
import eu from '../../assets/icon-flags/eu.png';
import pl from '../../assets/icon-flags/pl.png';
import cn from '../../assets/icon-flags/cn.png';
import au from '../../assets/icon-flags/au.png';
import az from '../../assets/icon-flags/az.png';
import gb from '../../assets/icon-flags/gb.png';
import am from '../../assets/icon-flags/am.png';
import bg from '../../assets/icon-flags/bg.png';
import br from '../../assets/icon-flags/br.png';
import hu from '../../assets/icon-flags/hu.png';
import vn from '../../assets/icon-flags/vn.png';
import hk from '../../assets/icon-flags/hk.png';
import ge from '../../assets/icon-flags/ge.png';
import dk from '../../assets/icon-flags/dk.png';
import ae from '../../assets/icon-flags/ae.png';
import eg from '../../assets/icon-flags/eg.png';
import india from '../../assets/icon-flags/in.png';
import id from '../../assets/icon-flags/id.png';
import kz from '../../assets/icon-flags/kz.png';
import ca from '../../assets/icon-flags/ca.png';
import qa from '../../assets/icon-flags/qa.png';
import kr from '../../assets/icon-flags/kr.png';
import md from '../../assets/icon-flags/md.png';
import nz from '../../assets/icon-flags/nz.png';
import no from '../../assets/icon-flags/no.png';
import ro from '../../assets/icon-flags/ro.png';
import sd from '../../assets/icon-flags/sd.png';
import sg from '../../assets/icon-flags/sg.png';
import tj from '../../assets/icon-flags/tj.png';
import th from '../../assets/icon-flags/th.png';
import tr from '../../assets/icon-flags/tr.png';
import tm from '../../assets/icon-flags/tm.png';
import uz from '../../assets/icon-flags/uz.png';
import ua from '../../assets/icon-flags/ua.png';
import cz from '../../assets/icon-flags/cz.png';
import se from '../../assets/icon-flags/se.png';
import ch from '../../assets/icon-flags/ch.png';
import rs from '../../assets/icon-flags/rs.png';
import za from '../../assets/icon-flags/za.png';
import jp from '../../assets/icon-flags/jp.png';
import kg from '../../assets/icon-flags/kg.png';

export const currencies: Record<Currencies, { name: string; Icon: number }> = {
  [Currencies.RUB]: {
    name: 'Российский рубль',
    Icon: ru,
  },
  [Currencies.BYN]: {
    name: 'Белорусский рубль',
    Icon: by,
  },
  [Currencies.USD]: {
    name: 'Американский доллар',
    Icon: us,
  },
  [Currencies.EUR]: {
    name: 'Евро',
    Icon: eu,
  },
  [Currencies.PLN]: {
    name: 'Польский злотый',
    Icon: pl,
  },
  [Currencies.CNY]: {
    name: 'Китайский юань',
    Icon: cn,
  },
  [Currencies.AUD]: {
    name: 'Австралийский доллар',
    Icon: au,
  },
  [Currencies.AZN]: {
    name: 'Азербайджанский манат',
    Icon: az,
  },
  [Currencies.GBP]: {
    name: 'Фунт стерлингов',
    Icon: gb,
  },
  [Currencies.AMD]: {
    name: 'Армянский драм',
    Icon: am,
  },
  [Currencies.BGN]: {
    name: 'Болгарский лев',
    Icon: bg,
  },
  [Currencies.BRL]: {
    name: 'Бразильский реал',
    Icon: br,
  },
  [Currencies.HUF]: {
    name: 'Венгерский форинт',
    Icon: hu,
  },
  [Currencies.VND]: {
    name: 'Вьетнамский донг',
    Icon: vn,
  },
  [Currencies.HKD]: {
    name: 'Гонконгский доллар',
    Icon: hk,
  },
  [Currencies.GEL]: {
    name: 'Грузинский лари',
    Icon: ge,
  },
  [Currencies.DKK]: {
    name: 'Датская крона',
    Icon: dk,
  },
  [Currencies.AED]: {
    name: 'Дирхам ОАЭ',
    Icon: ae,
  },
  [Currencies.EGP]: {
    name: 'Египетский фунт',
    Icon: eg,
  },
  [Currencies.INR]: {
    name: 'Индийская рупия',
    Icon: india,
  },
  [Currencies.IDR]: {
    name: 'Индонезийская рупия',
    Icon: id,
  },
  [Currencies.KZT]: {
    name: 'Казахстанский тенге',
    Icon: kz,
  },
  [Currencies.CAD]: {
    name: 'Канадский доллар',
    Icon: ca,
  },
  [Currencies.QAR]: {
    name: 'Катарский риал',
    Icon: qa,
  },
  [Currencies.KRW]: {
    name: 'Корейская вона',
    Icon: kr,
  },
  [Currencies.MDL]: {
    name: 'Молдавский лей',
    Icon: md,
  },
  [Currencies.NZD]: {
    name: 'Новозеландский доллар',
    Icon: nz,
  },
  [Currencies.NOK]: {
    name: 'Норвежская крона',
    Icon: no,
  },
  [Currencies.RON]: {
    name: 'Румынский лей',
    Icon: ro,
  },
  [Currencies.XDR]: {
    name: 'СДР (специальные права заимствования)',
    Icon: sd,
  },
  [Currencies.SGD]: {
    name: 'Сингапурский доллар',
    Icon: sg,
  },
  [Currencies.TJS]: {
    name: 'Таджикский сомони',
    Icon: tj,
  },
  [Currencies.THB]: {
    name: 'Тайский бат',
    Icon: th,
  },
  [Currencies.TRY]: {
    name: 'Турецкая лира',
    Icon: tr,
  },
  [Currencies.TMT]: {
    name: 'Туркменский манат',
    Icon: tm,
  },
  [Currencies.UZS]: {
    name: 'Узбекский сум',
    Icon: uz,
  },
  [Currencies.UAH]: {
    name: 'Украинский гривна',
    Icon: ua,
  },
  [Currencies.CZK]: {
    name: 'Чешская крона',
    Icon: cz,
  },
  [Currencies.SEK]: {
    name: 'Шведская крона',
    Icon: se,
  },
  [Currencies.CHF]: {
    name: 'Швейцарский франк',
    Icon: ch,
  },
  [Currencies.RSD]: {
    name: 'Сербский динар',
    Icon: rs,
  },
  [Currencies.ZAR]: {
    name: 'Южноафриканский рэнд',
    Icon: za,
  },
  [Currencies.JPY]: {
    name: 'Японская иена',
    Icon: jp,
  },
  [Currencies.KGS]: {
    name: 'Киргизский сом',
    Icon: kg,
  },
};
