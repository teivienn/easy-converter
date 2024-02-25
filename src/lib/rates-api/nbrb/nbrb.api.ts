import { subDays } from '../../../utils/sub-days';
import { DateFormatter } from '../../DateFormatter';
import type { NBRBResponseDTO } from './nbrb.dto';
import { NBRBMapper } from './nbrb.mapper';

export const NBRBApi = {
  getRates: async () => {
    const [previous, current] = await Promise.all<NBRBResponseDTO>([
      fetch(
        `https://api.nbrb.by/exrates/rates?periodicity=0&ondate=${DateFormatter.nbrb(
          subDays(new Date(), 1),
        )}`,
      ).then((response) => response.json()),
      fetch('https://api.nbrb.by/exrates/rates?periodicity=0').then((response) =>
        response.json(),
      ),
    ]);

    return NBRBMapper(previous, current);
  },
};
