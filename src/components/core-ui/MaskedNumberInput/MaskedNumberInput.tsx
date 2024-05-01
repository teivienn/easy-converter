/* eslint-disable @typescript-eslint/no-shadow */
import { forwardRef, useState } from 'react';
import { TextInput, View, type TextInputProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './stylesheet';
import { useNumberFormat } from '../../../hooks/useNumberFormat';
import Color from 'color';

type MaskedNumberInputProps = Omit<
  TextInputProps,
  'keyboardType' | 'value' | 'onChange' | 'onChangeText'
> & {
  value?: number;
  onChangeText?: (value: number) => void;
};

export const MaskedNumberInput = forwardRef<TextInput, MaskedNumberInputProps>(
  ({ value, onChangeText, style, ...rest }, ref) => {
    const [focused, setFocused] = useState(false);
    const [_value, _setValue] = useState('');

    const { styles, theme } = useStyles(stylesheet, {
      focused,
    });

    const formatValue = useNumberFormat(value);

    const onFocus = () => {
      setFocused(true);
      _setValue?.('');
      onChangeText?.(0);
    };

    const onBlur = () => {
      if (_value) {
        _setValue?.(parseFloat(_value).toFixed(2));
        onChangeText?.(Number(parseFloat(_value).toFixed(2)));
      }

      setFocused(false);
    };

    const onChange = (value: string) => {
      let valueWithoutSpecialChars = value
        .trim()
        .replace(/[^0-9.]/g, '')
        .replace(/\.{2,}/g, '');

      if (!isNaN(Number(valueWithoutSpecialChars))) {
        onChangeText?.(Number(valueWithoutSpecialChars));
        return _setValue(valueWithoutSpecialChars);
      }

      return;
    };

    return (
      <View style={[styles.container, styles.statuses]}>
        <TextInput
          ref={ref}
          {...rest}
          cursorColor={theme.input.cursor}
          keyboardType="numeric"
          inputMode="decimal"
          selectionColor={Color(theme.colors.primary).alpha(0.2).rgb().toString()}
          onChangeText={onChange}
          value={focused ? _value : formatValue}
          onFocus={(e) => [onFocus(), rest?.onFocus?.(e)]}
          onBlur={(e) => [onBlur(), rest?.onBlur?.(e)]}
          style={[styles.input, style]}
        />
      </View>
    );
  },
);
