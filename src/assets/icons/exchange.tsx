import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function ExchangeIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M10.82 15.84a.833.833 0 001.54.442l2.24-2.24a.834.834 0 00-1.18-1.179l-.933.934V7.506a.833.833 0 10-1.666 0v8.315l-.001.018zM9.18 4.16a.833.833 0 00-1.54-.442L5.4 5.958a.834.834 0 001.18 1.179l.932-.934v6.291a.833.833 0 001.667 0V4.161z"
        fill={props.color || '#000'}
      />
    </Svg>
  );
}
