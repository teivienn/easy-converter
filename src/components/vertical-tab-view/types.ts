import type { Animated } from 'react-native';
import type { PagerViewProps } from 'react-native-pager-view';

export type Route = {
  key: string;
  icon?: string;
  title?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
  testID?: string;
  height: number;
};

export type NavigationState<T extends Route> = {
  index: number;
  routes: T[];
};

export type Listener = (value: number) => void;

export type EventEmitterProps = {
  addEnterListener: (listener: Listener) => () => void;
};

export type PagerProps = Omit<
  PagerViewProps,
  | 'initialPage'
  | 'scrollEnabled'
  | 'onPageScroll'
  | 'onPageSelected'
  | 'onPageScrollStateChanged'
  | 'keyboardDismissMode'
  | 'children'
> & {
  animationEnabled?: boolean;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
};

export type Layout = {
  width: number;
  height: number;
};

export type SceneRendererProps = {
  layout: Layout;
  position: Animated.AnimatedInterpolation<number>;
  jumpTo: (key: string) => void;
};

export type Scene<T extends Route> = {
  route: T;
};
