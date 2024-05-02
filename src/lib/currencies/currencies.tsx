import { CurrencyCodes } from '../../types';

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

export const currencies: Record<CurrencyCodes, { name: string; Icon: number }> = {
  [CurrencyCodes.RUB]: {
    name: 'Российский рубль',
    Icon: ru,
  },
  [CurrencyCodes.BYN]: {
    name: 'Белорусский рубль',
    Icon: by,
  },
  [CurrencyCodes.USD]: {
    name: 'Американский доллар',
    Icon: us,
  },
  [CurrencyCodes.EUR]: {
    name: 'Евро',
    Icon: eu,
  },
  [CurrencyCodes.PLN]: {
    name: 'Польский злотый',
    Icon: pl,
  },
  [CurrencyCodes.CNY]: {
    name: 'Китайский юань',
    Icon: cn,
  },
  [CurrencyCodes.AUD]: {
    name: 'Австралийский доллар',
    Icon: au,
  },
  [CurrencyCodes.AZN]: {
    name: 'Азербайджанский манат',
    Icon: az,
  },
  [CurrencyCodes.GBP]: {
    name: 'Фунт стерлингов',
    Icon: gb,
  },
  [CurrencyCodes.AMD]: {
    name: 'Армянский драм',
    Icon: am,
  },
  [CurrencyCodes.BGN]: {
    name: 'Болгарский лев',
    Icon: bg,
  },
  [CurrencyCodes.BRL]: {
    name: 'Бразильский реал',
    Icon: br,
  },
  [CurrencyCodes.HUF]: {
    name: 'Венгерский форинт',
    Icon: hu,
  },
  [CurrencyCodes.VND]: {
    name: 'Вьетнамский донг',
    Icon: vn,
  },
  [CurrencyCodes.HKD]: {
    name: 'Гонконгский доллар',
    Icon: hk,
  },
  [CurrencyCodes.GEL]: {
    name: 'Грузинский лари',
    Icon: ge,
  },
  [CurrencyCodes.DKK]: {
    name: 'Датская крона',
    Icon: dk,
  },
  [CurrencyCodes.AED]: {
    name: 'Дирхам ОАЭ',
    Icon: ae,
  },
  [CurrencyCodes.EGP]: {
    name: 'Египетский фунт',
    Icon: eg,
  },
  [CurrencyCodes.INR]: {
    name: 'Индийская рупия',
    Icon: india,
  },
  [CurrencyCodes.IDR]: {
    name: 'Индонезийская рупия',
    Icon: id,
  },
  [CurrencyCodes.KZT]: {
    name: 'Казахстанский тенге',
    Icon: kz,
  },
  [CurrencyCodes.CAD]: {
    name: 'Канадский доллар',
    Icon: ca,
  },
  [CurrencyCodes.QAR]: {
    name: 'Катарский риал',
    Icon: qa,
  },
  [CurrencyCodes.KRW]: {
    name: 'Корейская вона',
    Icon: kr,
  },
  [CurrencyCodes.MDL]: {
    name: 'Молдавский лей',
    Icon: md,
  },
  [CurrencyCodes.NZD]: {
    name: 'Новозеландский доллар',
    Icon: nz,
  },
  [CurrencyCodes.NOK]: {
    name: 'Норвежская крона',
    Icon: no,
  },
  [CurrencyCodes.RON]: {
    name: 'Румынский лей',
    Icon: ro,
  },
  [CurrencyCodes.XDR]: {
    name: 'СДР (специальные права заимствования)',
    Icon: sd,
  },
  [CurrencyCodes.SGD]: {
    name: 'Сингапурский доллар',
    Icon: sg,
  },
  [CurrencyCodes.TJS]: {
    name: 'Таджикский сомони',
    Icon: tj,
  },
  [CurrencyCodes.THB]: {
    name: 'Тайский бат',
    Icon: th,
  },
  [CurrencyCodes.TRY]: {
    name: 'Турецкая лира',
    Icon: tr,
  },
  [CurrencyCodes.TMT]: {
    name: 'Туркменский манат',
    Icon: tm,
  },
  [CurrencyCodes.UZS]: {
    name: 'Узбекский сум',
    Icon: uz,
  },
  [CurrencyCodes.UAH]: {
    name: 'Украинский гривна',
    Icon: ua,
  },
  [CurrencyCodes.CZK]: {
    name: 'Чешская крона',
    Icon: cz,
  },
  [CurrencyCodes.SEK]: {
    name: 'Шведская крона',
    Icon: se,
  },
  [CurrencyCodes.CHF]: {
    name: 'Швейцарский франк',
    Icon: ch,
  },
  [CurrencyCodes.RSD]: {
    name: 'Сербский динар',
    Icon: rs,
  },
  [CurrencyCodes.ZAR]: {
    name: 'Южноафриканский рэнд',
    Icon: za,
  },
  [CurrencyCodes.JPY]: {
    name: 'Японская иена',
    Icon: jp,
  },
  [CurrencyCodes.KGS]: {
    name: 'Киргизский сом',
    Icon: kg,
  },
};
