import { useNavigation, useTheme } from '@react-navigation/native';
import { IconButton } from '../../../components/icon-button';
import { Iconify } from 'react-native-iconify';
import { StyleSheet } from 'react-native';

export const ManageValutes = () => {
  const { navigate } = useNavigation();
  const theme = useTheme();

  return (
    <IconButton style={styles.button} onPress={() => navigate('valutes')}>
      <Iconify icon="material-symbols:add-rounded" scale={25} color={theme.colors.text} />
    </IconButton>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 8,
  },
});
