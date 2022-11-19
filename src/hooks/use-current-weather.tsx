import useAxios from 'axios-hooks';
import { useMemo } from 'react';

import { CURRENT_WEATHER_PATH } from '../libs/config';
import { Weather, FormattedWeather } from '../models/Weather';
type HookType = {
  loading: boolean;
  geCurrentWeather: (lat: number, lon: number) => void;
  data?: FormattedWeather;
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

  const weatherData: FormattedWeather | undefined = useMemo(() => {
    if (data) {
      return {
        name: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        tempMax: Math.round(data.main.temp_max),
        tempMin: Math.round(data.main.temp_min),
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      };
    }
    return undefined;
  }, [data]);

  return { data: weatherData, loading, geCurrentWeather };
};
