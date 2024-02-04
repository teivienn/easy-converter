import { createStackNavigator } from '@react-navigation/stack';
import { Converter } from '../modules/converter';

const Stack = createStackNavigator();

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
    </Stack.Navigator>
  );
};
