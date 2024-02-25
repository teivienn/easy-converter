import * as React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export function RatesIcon(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M9.853 14.14l-.06.06a.665.665 0 01-.94 0l-4.066-4.06a.664.664 0 010-.94L6.98 7.007l-4.787-4.26a.667.667 0 01.887-.994l5.38 4.78a.661.661 0 01.027.967L6.32 9.667 9.853 13.2a.664.664 0 010 .94zm4-.94L10.32 9.667 12.487 7.5a.661.661 0 00-.027-.967l-5.38-4.78a.67.67 0 00-1.06.252.667.667 0 00.173.742l4.787 4.26L8.787 9.2a.664.664 0 000 .94l4.066 4.06a.664.664 0 00.94 0l.06-.06a.664.664 0 000-.94z"
        fill={props.color || '#000'}
      />
    </Svg>
  );
}
