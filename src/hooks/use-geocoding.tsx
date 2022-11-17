import useAxios from 'axios-hooks';

import { GEOCODING_PATH } from '../libs/config';
import { City } from '../models/City';

type HookType = {
  loading: boolean;
  getCities: (city: string) => void;
  data?: City[];
};

export const useGeocoding = (): HookType => {
  const [{ data, loading }, executeGeocoding] = useAxios<City[]>(
    { url: GEOCODING_PATH },
    { manual: true }
  );

  const getCities = (city: string) => {
    executeGeocoding({
      params: { q: city, limit: 10 },
    });
  };

  return { data, loading, getCities };
};
