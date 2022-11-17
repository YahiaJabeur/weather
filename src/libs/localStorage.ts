import AsyncStorage from '@react-native-async-storage/async-storage';

export enum STORAGE_KEYS {
  SELECTED_CITY_KEY = 'CITY_KEY',
  SELECTED_CITY_WEATHER_KEY = 'SELECTED_CITY_WEATHER_KEY',
}

export const storeData = async (key: STORAGE_KEYS, value: string) => {
  return await AsyncStorage.setItem(key, value);
};

export const getStoredData = async (key: STORAGE_KEYS) => {
  return await AsyncStorage.getItem(key);
};
