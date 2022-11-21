import useAxios from 'axios-hooks';

import { GEOCODING_PATH } from '../libs/config';
import { City } from '../models/City';

type HookType = {
  loading: boolean;
  error?: string;
  getCities: (city: string) => void;
  data?: City[];
};

export const useGeocoding = (): HookType => {
  const [{ data, error, loading }, executeGeocoding] = useAxios<City[]>(
    { url: GEOCODING_PATH },
    { manual: true }
  );

  const getCities = (city: string) => {
    executeGeocoding({
      params: { q: city, limit: 10 },
    });
  };

  return { data, loading, error: error?.message, getCities };
};
