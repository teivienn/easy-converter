import * as React from 'react';
import Svg, { Circle, Path, type SvgProps } from 'react-native-svg';

export function AppIconDark(props: SvgProps) {
  return (
    <Svg width={108} height={108} viewBox="0 0 108 108" fill="none" {...props}>
      <Circle cx={69.9459} cy={72.1351} r={4.86486} fill="#1F1E1F" />
      <Circle cx={62.0406} cy={47.2027} r={15.2027} fill="#403E42" />
      <Circle cx={46.8379} cy={56.3245} r={18.2432} fill="#1F1E1F" />
      <Path
        d="M48.035 64.846a1.216 1.216 0 002.247.646l3.27-3.27a1.217 1.217 0 00-1.721-1.72l-1.363 1.364v-9.182a1.216 1.216 0 10-2.432 0v12.135l-.001.027zM45.64 47.802a1.216 1.216 0 00-2.247-.646l-3.27 3.27a1.216 1.216 0 001.721 1.72l1.363-1.364v9.182a1.216 1.216 0 002.432 0V47.83l.001-.027z"
        fill="#fff"
      />
    </Svg>
  );
}
