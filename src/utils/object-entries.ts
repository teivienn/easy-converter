type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const ObjectEntries = <T extends Object>(object: T) => {
  return Object.entries(object) as Entries<T>;
};
