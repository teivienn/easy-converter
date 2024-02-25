import React, { useLayoutEffect } from 'react';

/**
 * React hook which returns the latest callback without changing the reference.
 */
export const useLatestCallback = <T extends Function>(callback: T): T => {
  const ref = React.useRef<T>(callback);

  const latestCallback = React.useRef(function latestCallback(
    this: unknown,
    ...args: unknown[]
  ) {
    return ref.current.apply(this, args);
  } as unknown as T).current;

  useLayoutEffect(() => {
    ref.current = callback;
  });

  return latestCallback;
};
