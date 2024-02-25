import { Text, View, useColorScheme } from 'react-native';
import { AppIconLight } from '../../assets/icons/app-icon-light';
import { AppIconDark } from '../../assets/icons/app-icon-dark';
import { stylesheet } from './styles';
import { useStyles } from 'react-native-unistyles';
import { ProviderButton } from './ui/provider-button';
import { CBRFIcon } from '../../assets/icons/cbrf-icon';
import { NBRBIcon } from '../../assets/icons/nbrb-icon';
import { translate } from '../../lib/i18n';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../../lib/app-store';
import { RatesProvider } from '../../types';

export const Onboarding = () => {
  const { navigate } = useNavigation();
  const { setProvider, setOnboard } = useStore();

  const scheme = useColorScheme() || 'light';
  const { styles } = useStyles(stylesheet);
  const iconColor = scheme === 'light' ? '#383737' : '#ffffff';

  const onSetProvider = (provider: RatesProvider) => () => {
    setProvider(provider);
    navigate('explore');
    setOnboard(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {scheme === 'light' ? <AppIconLight /> : <AppIconDark />}
      </View>
      <Text style={styles.welcomeMessageTitle}>
        {translate('onboarding-screen.welcome')}
      </Text>
      <Text style={styles.welcomeMessage}>
        {translate('onboarding-screen.description')}
      </Text>

      <View style={styles.groupContainer}>
        <ProviderButton
          onPress={onSetProvider(RatesProvider.CBRF)}
          text={translate('providers.cbrf')}
          icon={<CBRFIcon color={iconColor} />}
        />

        <ProviderButton
          onPress={onSetProvider(RatesProvider.NBRB)}
          text={translate('providers.nbrb')}
          icon={<NBRBIcon color={iconColor} />}
        />
      </View>
    </View>
  );
};
