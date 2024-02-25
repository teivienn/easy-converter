import { useNavigation, useTheme } from '@react-navigation/native';
import { IconButton } from '../../../components/icon-button';
import { StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export const ManageValutes = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  return (
    <IconButton style={styles.button} onPress={() => navigate('valutes')}>
      <Feather name="plus" size={24} color={colors.text} />
    </IconButton>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 8,
  },
});
