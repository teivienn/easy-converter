import { ScrollView, Text, View, Linking, TouchableOpacity } from 'react-native';
import { useVerticalTabViewContext } from '../../../components/vertical-tab-view';
import { translate } from '../../../lib/i18n';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const AboutScreen = () => {
  const { headerHeight } = useVerticalTabViewContext();
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView style={styles.scroll}>
      <View style={[styles.header, { height: headerHeight - 20 }]}>
        <Text style={styles.headerText}>{translate('about')}</Text>
      </View>
      <Text style={styles.textVersion}>v - 1.0.1</Text>

      <View style={styles.content}>
        <Text style={styles.title}>{translate('data_providers')}</Text>
        <TouchableOpacity
          style={styles.providerButton}
          onPress={() => Linking.openURL('https://www.cbr.ru/')}
        >
          <Text style={styles.valueText}>{translate('providers.cbrf')}</Text>
          <Text>{translate('data_provider_info_site')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.providerButton}
          onPress={() => Linking.openURL('https://www.nbrb.by/')}
        >
          <Text style={styles.valueText}>{translate('providers.nbrb')}</Text>
          <Text>{translate('data_provider_info_site')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{translate('source_code')}</Text>
        <TouchableOpacity
          style={styles.providerButton}
          onPress={() => Linking.openURL('https://github.com/teivienn/easy-converter')}
        >
          <Text style={styles.valueText}>GitHub</Text>
          <Text>{translate('go_to_repository')}</Text>
        </TouchableOpacity>
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
  textVersion: {
    textAlign: 'right',
    color: theme.colors.text,
    opacity: 0.7,
  },
  title: {
    textTransform: 'uppercase',
    color: theme.colors.primary,
  },
  valueText: {
    color: theme.colors.text,
    marginTop: 10,
  },
  content: {
    marginTop: 40,
  },
  providerButton: {
    marginBottom: 10,
  },
}));
