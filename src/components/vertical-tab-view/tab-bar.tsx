import {
  View,
  type StyleProp,
  type ViewStyle,
  type LayoutChangeEvent,
  Animated,
  StyleSheet,
  type ListRenderItemInfo,
} from 'react-native';
import type { SceneRendererProps, Route, NavigationState, Scene, Layout } from './types';
import { useCallback, useState } from 'react';
import { TabBarItem } from './tab-bar-item';

type Props<T extends Route> = SceneRendererProps & {
  navigationState: NavigationState<T>;
  activeColor?: string;
  inactiveColor?: string;
  getLabelText?: (scene: Scene<T>) => string | undefined;
  renderIcon?: (
    scene: Scene<T> & {
      focused: boolean;
      color: string;
    },
  ) => React.ReactNode;
  style?: StyleProp<ViewStyle>;
  headerHeight: number;
  leftButton?: () => React.ReactNode;
};

const getLabelTextDefault = <T extends Route>({ route }: Scene<T>) => route.title;

const keyExtractor = <T extends Route>(item: T) => item.key;

const MEASURE_PER_BATCH = 10;

export const TabBar = <T extends Route>({
  getLabelText = getLabelTextDefault,
  position,
  navigationState,
  activeColor,
  inactiveColor,
  style,
  jumpTo,
  layout: propLayout,
  renderIcon,
  headerHeight,
  leftButton,
}: Props<T>) => {
  const [_, setLayout] = useState<Layout>(propLayout ?? { width: 0, height: 0 });

  const { routes } = navigationState;

  const handleLayout = (e: LayoutChangeEvent) => {
    const { height, width } = e.nativeEvent.layout;

    setLayout((layout) =>
      layout.width === width && layout.height === height ? layout : { width, height },
    );
  };

  const renderItem = useCallback(
    ({ item: route }: ListRenderItemInfo<T>) => {
      return (
        <TabBarItem
          route={route}
          position={position}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          getLabelText={getLabelText}
          navigationState={navigationState}
          onPress={() => jumpTo(route.key)}
          style={undefined}
          renderIcon={renderIcon}
        />
      );
    },
    [
      activeColor,
      getLabelText,
      inactiveColor,
      jumpTo,
      navigationState,
      position,
      renderIcon,
    ],
  );

  const ListHeaderComponent = useCallback(
    () => <View style={[styles.header, { height: headerHeight }]}>{leftButton?.()}</View>,
    [headerHeight, leftButton],
  );

  return (
    <Animated.View onLayout={handleLayout} style={[styles.tabBar, style]}>
      <View style={styles.scroll}>
        <Animated.FlatList
          data={routes as Animated.WithAnimatedValue<T>[]}
          keyExtractor={keyExtractor}
          horizontal={false}
          keyboardShouldPersistTaps="handled"
          initialNumToRender={MEASURE_PER_BATCH}
          ListHeaderComponent={ListHeaderComponent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          overScrollMode="never"
          scrollEventThrottle={16}
          style={styles.flatList}
          renderItem={renderItem}
          contentContainerStyle={styles.content}
          scrollEnabled
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    width: 70,
  },
  scroll: {
    overflow: 'scroll',
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 15,
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
});
