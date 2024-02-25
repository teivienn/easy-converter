import {
  View,
  type StyleProp,
  type ViewStyle,
  type LayoutChangeEvent,
  StyleSheet,
} from 'react-native';
import { Pager } from './pager';

import type {
  Route,
  PagerProps,
  NavigationState,
  Layout,
  SceneRendererProps,
  Scene,
} from './types';
import { useState } from 'react';
import { SceneView } from './scene-view';
import { TabBar } from './tab-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { VerticalTabContext } from './context';

export type Props<T extends Route> = Omit<PagerProps, 'layoutDirection'> & {
  onIndexChange: (index: number) => void;
  navigationState: NavigationState<T>;
  tabBarPosition: 'right' | 'left';
  initialLayout?: Partial<Layout>;
  lazy?: ((props: { route: T }) => boolean) | boolean;
  renderLazyPlaceholder?: (props: { route: T }) => React.ReactNode;
  lazyPreloadDistance?: number;
  sceneContainerStyle?: StyleProp<ViewStyle>;
  pagerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  leftButton?: () => React.ReactNode;
  renderTabBar?: (
    props: SceneRendererProps & {
      navigationState: NavigationState<T>;
      renderIcon?: (
        scene: Scene<T> & {
          focused: boolean;
          color: string;
        },
      ) => React.ReactNode;
      headerHeight: number;
      leftButton?: () => React.ReactNode;
    },
  ) => React.ReactNode;
  renderScene: (props: SceneRendererProps & { route: T }) => React.ReactNode;
  renderIcon?: (
    scene: Scene<T> & {
      focused: boolean;
      color: string;
    },
  ) => React.ReactNode;
};

const HEADER_HEIGHT = 110;

export const TabView = <T extends Route>({
  onIndexChange,
  navigationState,
  initialLayout,
  lazy = false,
  lazyPreloadDistance = 0,
  sceneContainerStyle,
  pagerStyle,
  style,
  tabBarPosition = 'left',
  renderLazyPlaceholder = () => null,
  renderTabBar = (props) => <TabBar {...props} />,
  animationEnabled = true,
  renderScene,
  renderIcon,
  leftButton,
}: Props<T>) => {
  const { top } = useSafeAreaInsets();

  const [layout, setLayout] = useState<Layout>({
    width: 0,
    height: 0,
    ...initialLayout,
  });

  const jumpToIndex = (index: number) => {
    if (index !== navigationState.index) {
      onIndexChange(index);
    }
  };

  const handleLayout = (e: LayoutChangeEvent) => {
    const { height, width } = e.nativeEvent.layout;

    setLayout((prevLayout) => {
      if (prevLayout.width === width && prevLayout.height === height) {
        return prevLayout;
      }

      return { height, width };
    });
  };

  return (
    <VerticalTabContext.Provider value={{ headerHeight: HEADER_HEIGHT + top }}>
      <View onLayout={handleLayout} style={[styles.pager, style]}>
        <Pager
          // layout={layout}
          onIndexChange={jumpToIndex}
          style={pagerStyle}
          navigationState={navigationState}
          animationEnabled={animationEnabled}
        >
          {({ position, render, addEnterListener, jumpTo }) => {
            const sceneRendererProps = {
              position,
              layout,
              jumpTo,
            };

            return (
              <View
                style={
                  tabBarPosition === 'left'
                    ? styles.tabBarPositionStyleLeft
                    : styles.tabBarPositionStyleRight
                }
              >
                {renderTabBar({
                  ...sceneRendererProps,
                  renderIcon,
                  leftButton,
                  navigationState,
                  headerHeight: HEADER_HEIGHT + top,
                })}

                {render(
                  navigationState.routes.map((route, i) => {
                    return (
                      <SceneView
                        {...sceneRendererProps}
                        addEnterListener={addEnterListener}
                        key={route.key}
                        index={i}
                        lazy={typeof lazy === 'function' ? lazy({ route }) : lazy}
                        lazyPreloadDistance={lazyPreloadDistance}
                        navigationState={navigationState}
                        style={sceneContainerStyle}
                      >
                        {({ loading }) =>
                          loading
                            ? renderLazyPlaceholder({ route })
                            : renderScene({ ...sceneRendererProps, route })
                        }
                      </SceneView>
                    );
                  }),
                )}
              </View>
            );
          }}
        </Pager>
      </View>
    </VerticalTabContext.Provider>
  );
};

const styles = StyleSheet.create({
  pager: {
    flex: 1,
    overflow: 'hidden',
  },
  tabBarPositionStyleLeft: {
    flexDirection: 'row',
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  tabBarPositionStyleRight: {
    flexDirection: 'row-reverse',
    flex: 1,
  },
});
