import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useStore } from '../../../../lib/app-store';
import { useMemo, useState } from 'react';
import { CurrencyCodes, RatesProvider } from '../../../../types';

export const ExchangeScreen = () => {
  const { rates, currencies, setCurrency, setProvider } = useStore();

  const [baseRate, setBaseRate] = useState(0);

  const data = useMemo(() => {
    return currencies.map((key) => {
      return rates[key];
    });
  }, [currencies, rates]);

  return (
    <ScrollView style={{ paddingTop: 20 }}>
      <TouchableOpacity onPress={() => setCurrency(CurrencyCodes.BYN)}>
        <Text>add byn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrency(CurrencyCodes.RUB)}>
        <Text>add RUB</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setProvider(RatesProvider.NBRB)}>
        <Text>NBRB</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setProvider(RatesProvider.CBRF)}>
        <Text>CBRF</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(data)}</Text>
    </ScrollView>
  );
};
