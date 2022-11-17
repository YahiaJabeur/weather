import AsyncStorage from '@react-native-async-storage/async-storage';

export enum STORAGE_KEYS {
  SELECTED_CITY_KEY = 'CITY_KEY',
}

const storeData = async (key: STORAGE_KEYS, value: string) => {
  return await AsyncStorage.setItem(key, value);
};

const getStoredData = async (key: STORAGE_KEYS) => {
  return await AsyncStorage.getItem(key);
};
