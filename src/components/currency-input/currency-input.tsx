// import { View, Text, Image } from 'react-native';
// import { useStyles } from 'react-native-unistyles';
// import { stylesheet } from './styles';
// import Input from 'react-native-currency-input';
// import { CurrencyCodes } from '../../types';
// import { useAllRates, useStore } from '../../lib/store';

// type CurrencyInputProps = {
//   Icon: number;
//   name: CurrencyCodes;
// };

// export const CurrencyInput = ({ Icon, name }: CurrencyInputProps) => {
//   const { styles, theme } = useStyles(stylesheet);
//   // const [main, setMain] = useStore((store) => [store.main, store.setMain]);
//   // const rate = useAllRates((store) => store.rates?.[name].value) || 1;
//   // const nominal = useAllRates((store) => store.rates?.[name].nominal) || 1;

//   /*
//     перевод в главную валюту ((rate / nominal) * N)

//     перевод из главной валюты в текущую ((nominal / rate) * main)
//   */

//   const changeMain = (v: number | null) => {
//     if (v) {
//       setMain((rate / nominal) * v);
//     }
//   };

//   const value = (nominal / rate) * main;

//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <Image source={Icon} style={styles.icon} />
//         <Text style={styles.name}>{name}</Text>
//       </View>
//       <View style={styles.inputContainer}>
//         <Input
//           delimiter="."
//           separator=","
//           precision={2}
//           minValue={0}
//           value={value}
//           cursorColor={theme.colors.primary}
//           onChangeValue={changeMain}
//           style={styles.input}
//         />
//       </View>
//     </View>
//   );
// };
