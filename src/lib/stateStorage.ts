import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

const storage = new MMKV();

export const stateStorage: StateStorage = {
  setItem: (name, value) => {
    storage.set(name, value);
  },
  getItem: (name) => {
    return storage.getString(name) || null;
  },
  removeItem: (key) => {
    storage.delete(key);
  },
};
