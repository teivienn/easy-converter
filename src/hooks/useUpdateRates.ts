import { useState } from 'react';
import { getRates } from '../lib/api';
import { useAllRates } from '../lib/store';

export const useUpdateRates = () => {
  const [loading, setLoading] = useState(false);
  const setRates = useAllRates((store) => store.setRates);

  const refetch = async () => {
    setLoading(true);
    try {
      setRates(await getRates());
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    refetch,
  };
};
