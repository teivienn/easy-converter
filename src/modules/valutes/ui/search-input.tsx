import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type SearchInputProps = {
  value: string;
  setValue: (value: string) => void;
};

export const SearchInput = ({ value, setValue }: SearchInputProps) => {
  const { styles, theme } = useStyles(stylesheet);
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, (focus || !!value) && styles.focus]}>
        <Iconify
          icon="material-symbols:search"
          size={26}
          color={theme.colors.text}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder="Поиск..."
          cursorColor={theme.colors.primary}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: 16,
  },
  inputContainer: {
    borderRadius: 8,
    backgroundColor: theme.colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    justifyContent: 'space-between',
  },
  input: {
    borderRadius: 9,
    paddingHorizontal: 12,
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 12,
  },
  focus: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
}));
