import { ScrollView, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Radio } from '~/components/core-ui/Radio';
import { useVerticalTabViewContext } from '~/components/vertical-tab-view';
import { useStore } from '~/lib/app-store';
import { translate } from '~/lib/i18n';
import { RatesProvider } from '~/types';

export const SettingsScreen = () => {
  const { headerHeight } = useVerticalTabViewContext();
  const { styles } = useStyles(stylesheet);
  const { provider, setProvider } = useStore();

  const isCBRF = provider === RatesProvider.CBRF;
  const isNBRB = provider === RatesProvider.NBRB;

  return (
    <ScrollView style={styles.scroll}>
      <View style={[styles.header, { height: headerHeight - 20 }]}>
        <Text style={styles.headerText}>{translate('settings')}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{translate('chose_data_provider')}</Text>
        <View style={styles.radioContainer}>
          <Radio
            value={isCBRF}
            onChange={() => setProvider(RatesProvider.CBRF)}
            label={translate('providers.cbrf')}
          />
          <Radio
            value={isNBRB}
            onChange={() => setProvider(RatesProvider.NBRB)}
            label={translate('providers.nbrb')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  scroll: {
    paddingHorizontal: 16,
  },
  headerText: {
    textAlign: 'right',
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.text,
  },
  content: {
    marginTop: 40,
  },
  title: {
    textTransform: 'uppercase',
    color: theme.colors.primary,
  },
  radioContainer: {
    rowGap: 20,
    marginTop: 20,
  },
}));
