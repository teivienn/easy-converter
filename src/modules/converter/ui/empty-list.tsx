import { Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const EmptyList = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <>
      <View style={styles.container}>
        <Svg width={280} height={279} viewBox="0 0 280 279" fill="none">
          <Path
            d="M64 177.5l.623.783L64 177.5zM209.5 114l.558.83-.558-.83zM273.806.908a1 1 0 00-1.398-.214l-7.253 5.329a1 1 0 001.184 1.612l6.447-4.737 4.737 6.447a1 1 0 001.612-1.184L273.806.908zM1.5 278l.965.264v-.002l.002-.008.01-.034.038-.136.155-.542c.14-.478.35-1.187.634-2.103a202.748 202.748 0 012.607-7.798 260.302 260.302 0 0110.948-26.098c9.998-20.611 25.544-45.585 47.764-63.26l-1.246-1.566c-22.554 17.941-38.259 43.217-48.317 63.953a262.444 262.444 0 00-11.033 26.3 205.654 205.654 0 00-2.633 7.876 124.716 124.716 0 00-.845 2.84l-.01.037-.003.01a.02.02 0 000 .003L1.5 278zm63.123-99.717c21.828-17.364 44.776-24.285 69.032-31.332 24.24-7.042 49.759-14.202 76.403-32.121l-1.116-1.66c-26.352 17.723-51.583 24.812-75.845 31.86-24.244 7.043-47.548 14.051-69.72 31.687l1.245 1.566zm145.435-63.453c26.046-17.517 42.017-45.86 51.473-69.726a238.543 238.543 0 009.775-30.668 198.072 198.072 0 002.064-9.335 128.138 128.138 0 00.581-3.216l.028-.173.007-.044.002-.012v-.003c0-.001.001-.002-.988-.153l-.989-.15v.001l-.001.01-.007.04-.026.163a116.48 116.48 0 01-.571 3.156c-.423 2.18-1.086 5.34-2.042 9.24a236.486 236.486 0 01-9.693 30.407c-9.394 23.71-25.172 51.615-50.729 68.803l1.116 1.66z"
            fill={theme.colors.primary}
          />
        </Svg>
      </View>
      <Text style={styles.title}>Добавте валюту</Text>
      <Text style={styles.text}>
        Сравнивате неограниченное количество валют в одном месте
      </Text>
    </>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    paddingTop: 20,
    paddingLeft: 20,
    textAlign: 'left',
    fontSize: 30,
    color: theme.colors.text,
    fontWeight: '600',
  },
  text: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'left',
    fontSize: 16,
    color: theme.colors.text,
  },
}));
