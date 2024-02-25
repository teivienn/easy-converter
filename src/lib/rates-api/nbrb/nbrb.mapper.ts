import { CurrencyCodes } from '../../../types/index';
import type { RatesModel } from '../rates-model';
import type { NBRBResponseDTO } from './nbrb.dto';

export const NBRBMapper = (previous: NBRBResponseDTO, current: NBRBResponseDTO) => {
  const rates: Record<string, RatesModel> = {
    BYN: {
      nominal: 1,
      rate: 1,
      change: 0,
      code: CurrencyCodes.BYN,
    },
  };

  const getChange = (code: string, currentRate: number) => {
    const previousRate = previous.find(
      (it) => it.Cur_Abbreviation === code,
    )?.Cur_OfficialRate;

    if (previousRate) {
      return currentRate - previousRate;
    }

    return 0;
  };

  current.forEach((data) => {
    rates[data.Cur_Abbreviation] = {
      nominal: data.Cur_Scale,
      rate: data.Cur_OfficialRate,
      change: getChange(data.Cur_Abbreviation, data.Cur_OfficialRate),
      code: data.Cur_Abbreviation,
    };
  });

  return rates as Record<CurrencyCodes, RatesModel>;
};
