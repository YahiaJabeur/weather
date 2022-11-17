// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// https://api.openweathermap.org/geo/1.0/direct?q=hammamet&limit=5&appid=20a4dc43edd175894cc452504e863727

import useAxios from 'axios-hooks';

import { GEOCODING_PATH } from '../libs/config';

type HookType = {
  cities: string[];
  loadingCities: boolean;
  errorCities?: string;
};

export const useGeocoding = () => {
  const [{ data: citiesData, loading: loadingCities }, executeGeocoding] = useAxios(
    {
      url: GEOCODING_PATH,
      params: {
        limit: 5,
      },
    },
    { manual: true }
  );

  const getCities = (city: string) => {
    console.log('city', city);
    executeGeocoding({
      params: { q: city, limit: 10 },
    });
  };
  return { citiesData, loadingCities, getCities };
};
