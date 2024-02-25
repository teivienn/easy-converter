import { Animated, StyleSheet, useAnimatedValue } from 'react-native';

import ViewPager from 'react-native-pager-view';

import type {
  PagerProps,
  Route,
  NavigationState,
  EventEmitterProps,
  Listener,
} from './types';
import {
  useRef,
  type ReactElement,
  type ReactNode,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

const AnimatedViewPager = Animated.createAnimatedComponent(ViewPager);

type Props<T extends Route> = PagerProps & {
  onIndexChange: (index: number) => void;
  navigationState: NavigationState<T>;
  children: (
    props: EventEmitterProps & {
      position: Animated.AnimatedInterpolation<number>;
      render: (children: ReactNode) => ReactNode;
      jumpTo: (key: string) => void;
    },
  ) => ReactElement;
};

export const Pager = <T extends Route>({
  onIndexChange,
  navigationState,
  animationEnabled,
  children,
  style,
  ...rest
}: Props<T>) => {
  const { index } = navigationState;
  const listenersRef = useRef<Listener[]>([]);
  const pagerRef = useRef<ViewPager>(null);
  const indexRef = useRef<number>(index);
  const navigationStateRef = useRef(navigationState);

  const position = useAnimatedValue(index);
  const offset = useAnimatedValue(0);

  useEffect(() => {
    navigationStateRef.current = navigationState;
  });

  useEffect(() => {
    const nestedIndex = indexRef.current - index;

    if (indexRef.current !== index && (nestedIndex === 1 || nestedIndex === -1)) {
      if (animationEnabled) {
        pagerRef.current?.setPage(index);
      } else {
        pagerRef.current?.setPageWithoutAnimation(index);
        position.setValue(index);
      }
    }
  }, [animationEnabled, index, position]);

  const jumpTo = useCallback(
    (key: string) => {
      const routeIndex = navigationStateRef.current.routes.findIndex(
        (route) => route.key === key,
      );

      const nestedIndex = indexRef.current - routeIndex;

      if (animationEnabled && (nestedIndex === 1 || nestedIndex === -1)) {
        pagerRef.current?.setPage(routeIndex);
      } else {
        pagerRef.current?.setPageWithoutAnimation(routeIndex);
        position.setValue(routeIndex);
      }
    },
    [animationEnabled, position],
  );

  const addEnterListener = useCallback((listener: Listener) => {
    listenersRef.current.push(listener);

    return () => {
      const currentIndex = listenersRef.current.indexOf(listener);

      if (currentIndex > -1) {
        listenersRef.current.splice(currentIndex, 1);
      }
    };
  }, []);

  const memoizedPosition = useMemo(
    () => Animated.add(position, offset),
    [offset, position],
  );

  return children({
    addEnterListener,
    position: memoizedPosition,
    jumpTo,
    render: (renderChildren) => (
      <AnimatedViewPager
        {...rest}
        ref={pagerRef}
        style={[styles.container, style]}
        orientation="vertical"
        onPageScroll={Animated.event(
          [
            {
              nativeEvent: {
                position: position,
                offset: offset,
              },
            },
          ],
          { useNativeDriver: true },
        )}
        onPageSelected={(e) => {
          const positionIndex = e.nativeEvent.position;
          indexRef.current = positionIndex;
          onIndexChange(positionIndex);
        }}
        scrollEnabled={false}
      >
        {renderChildren}
      </AnimatedViewPager>
    ),
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
