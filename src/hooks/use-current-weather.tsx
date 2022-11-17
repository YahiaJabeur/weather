import useAxios from 'axios-hooks';

import { CURRENT_WEATHER_PATH } from '../libs/config';
import { Weather } from '../models/Weather';

type HookType = {
  loading: boolean;
  geCurrentWeather: (lat: number, lon: number) => void;
  data?: Weather;
};

export const useCurrentWeather = (): HookType => {
  const [{ data, loading }, execute] = useAxios<Weather>(
    { url: CURRENT_WEATHER_PATH },
    { manual: true }
  );

  const geCurrentWeather = (lat: number, lon: number) => {
    execute({
      params: { lat, lon, units: 'metric' },
    });
  };

  return { data, loading, geCurrentWeather };
};
