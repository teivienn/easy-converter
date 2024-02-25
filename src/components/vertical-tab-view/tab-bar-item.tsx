import {
  Pressable,
  StyleSheet,
  Animated,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
  View,
  useColorScheme,
} from 'react-native';
import type { NavigationState, Route, Scene } from './types';
import { memo, type ReactNode } from 'react';
import { TabBarLabel } from './tab-bar/tab-bar-label';

type Props<T extends Route> = {
  position: Animated.AnimatedInterpolation<number>;
  route: T;
  navigationState: NavigationState<T>;
  activeColor?: string;
  inactiveColor?: string;
  getLabelText: (scene: Scene<T>) => string | undefined;
  renderIcon?: (scene: { route: T; focused: boolean; color: string }) => React.ReactNode;
  onPress: () => void;
  labelStyle?: StyleProp<TextStyle>;
  style: StyleProp<ViewStyle>;
};

const DEFAULT_ACTIVE_COLOR = {
  dark: 'rgba(255, 255, 255, 1)',
  light: 'rgba(0, 0, 0, 1)',
};

const DEFAULT_INACTIVE_COLOR = {
  dark: 'rgba(255, 255, 255, 0.502)',
  light: 'rgba(0, 0, 0, 0.505)',
};

const getActiveOpacity = (
  position: Animated.AnimatedInterpolation<number>,
  routesLength: number,
  tabIndex: number,
) => {
  if (routesLength > 1) {
    const inputRange = Array.from({ length: routesLength }, (_, i) => i);

    return position.interpolate({
      inputRange,
      outputRange: inputRange.map((i) => (i === tabIndex ? 1 : 0)),
    });
  } else {
    return 1;
  }
};

const getInactiveOpacity = (
  position: Animated.AnimatedInterpolation<number>,
  routesLength: number,
  tabIndex: number,
) => {
  if (routesLength > 1) {
    const inputRange = Array.from({ length: routesLength }, (_, i) => i);

    return position.interpolate({
      inputRange,
      outputRange: inputRange.map((i: number) => (i === tabIndex ? 0 : 1)),
    });
  } else {
    return 0;
  }
};

type TabBarItemInternalProps<T extends Route> = {
  index: number;
  routesLength: number;
  isFocused: boolean;
  position: Animated.AnimatedInterpolation<number>;
  label?: string;
  activeColor?: string;
  inactiveColor?: string;
  labelStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  renderIcon?: (scene: { route: T; focused: boolean; color: string }) => React.ReactNode;
  route: T;
};

const TabBarItemInternal = <T extends Route>({
  label,
  labelStyle,
  position,
  routesLength,
  index: tabIndex,
  onPress,
  route,
  renderIcon,
}: TabBarItemInternalProps<T>) => {
  const scheme = useColorScheme() || 'light';

  const activeOpacity = getActiveOpacity(position, routesLength, tabIndex);
  const inactiveOpacity = getInactiveOpacity(position, routesLength, tabIndex);

  const { height } = route;

  let activeIcon: ReactNode | null = null;
  let inactiveIcon: ReactNode | null = null;

  if (renderIcon) {
    activeIcon = renderIcon({
      route,
      focused: true,
      color: DEFAULT_ACTIVE_COLOR[scheme],
    });
    inactiveIcon = renderIcon({
      route,
      focused: false,
      color: DEFAULT_INACTIVE_COLOR[scheme],
    });
  }

  const renderLabel = (
    <View style={[styles.lab, { width: height }]}>
      <Animated.View style={{ opacity: inactiveOpacity }}>
        <TabBarLabel
          labelStyle={labelStyle}
          label={label}
          color={DEFAULT_INACTIVE_COLOR[scheme]}
          icon={inactiveIcon}
        />
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFill, { opacity: activeOpacity }]}>
        <TabBarLabel
          labelStyle={labelStyle}
          label={label}
          color={DEFAULT_ACTIVE_COLOR[scheme]}
          icon={activeIcon}
        />
      </Animated.View>
    </View>
  );

  return (
    <View style={[styles.view, { height: height + 10 }]}>
      <Pressable
        onPress={onPress}
        style={[styles.pressable]}
        android_ripple={{
          borderless: true,
          color: 'rgba(225, 223, 223, 0.32)',
        }}
      >
        <View style={styles.item}>{renderLabel}</View>
      </Pressable>
    </View>
  );
};

const MemoizedTabBarItemInternal = memo(TabBarItemInternal) as typeof TabBarItemInternal;

export const TabBarItem = <T extends Route>({
  getLabelText,
  navigationState,
  onPress,
  route,
  position,
  activeColor,
  inactiveColor,
  labelStyle,
  renderIcon,
}: Props<T>) => {
  const tabIndex = navigationState.routes.indexOf(route);

  const scene = { route };

  const label = getLabelText(scene);

  return (
    <MemoizedTabBarItemInternal
      isFocused={navigationState.index === tabIndex}
      route={route}
      routesLength={navigationState.routes.length}
      index={tabIndex}
      label={label}
      position={position}
      onPress={onPress}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      labelStyle={labelStyle}
      renderIcon={renderIcon}
    />
  );
};

const styles = StyleSheet.create({
  lab: {
    transform: [{ rotate: '-90deg' }],
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 999,
  },
  view: {
    borderRadius: 999,
    backgroundColor: 'transparent',
  },
  pressable: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
