import { memo, useCallback } from 'react';

import { FlatList, FlatListProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { KeyboardAware } from '../KeyboardAware';

interface InfinityListProps extends Omit<FlatListProps<any>, 'getItemLayout'> {
  itemHeight: number;
}

export const InfinityList = memo(({ itemHeight, ...props }: InfinityListProps) => {
  const { styles } = useStyles(stylesheet);

  const getItemLayout = useCallback(
    (_: unknown, index: number) => {
      return {
        length: itemHeight,
        offset: itemHeight * index,
        index,
      };
    },
    [itemHeight],
  );

  return (
    <>
      <FlatList
        maxToRenderPerBatch={10}
        initialNumToRender={20}
        getItemLayout={getItemLayout}
        {...props}
        style={[styles.scroll, props.style]}
        contentContainerStyle={[styles.container, props.contentContainerStyle]}
      />
      <KeyboardAware />
    </>
  );
});
