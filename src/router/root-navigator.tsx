import { createStackNavigator } from '@react-navigation/stack';
import { Converter } from '../modules/converter';
import { Valutes } from '../modules/valutes';
import { ParamList } from './types';

const Stack = createStackNavigator<ParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="converter"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '500',
        },
      }}
    >
      <Stack.Screen
        name="converter"
        component={Converter}
        options={{ title: 'Easy Converter' }}
      />
      <Stack.Screen
        name="valutes"
        component={Valutes}
        options={{ title: 'Выбор валют' }}
      />
    </Stack.Navigator>
  );
};
