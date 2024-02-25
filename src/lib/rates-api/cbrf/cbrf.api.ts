import config from 'react-native-config';
import type { CBRFResponseDTO } from './cbrf.dto';
import { CBRFMapper } from './cbrf.mapper';

export const CBRFApi = {
  getRates: async () => {
    const response = await fetch(config.API_URL!);
    const data: CBRFResponseDTO = await response.json();

    return CBRFMapper(data);
  },
};
