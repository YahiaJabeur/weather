// https://api.openweathermap.org/data/2.5/weather
// ?lat=44.34&lon=10.99&appid=20a4dc43edd175894cc452504e863727&units=metric

import useAxios from 'axios-hooks';

import { CURRENT_WEATHER_PATH } from '../libs/config';

type HookType = {
  cities: string[];
  loadingCities: boolean;
  errorCities?: string;
};

export const useCurrentWeather = () => {
  const [{ data, loading }, execute] = useAxios({ url: CURRENT_WEATHER_PATH }, { manual: true });

  const geCurrentWeather = (lat: number, lon: number) => {
    execute({
      params: { lat, lon, units: 'metric' },
    });
  };
  return { data, loading, geCurrentWeather };
};
