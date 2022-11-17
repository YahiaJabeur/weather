import * as Location from 'expo-location';
import { useToast } from 'native-base';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Position {
  lat: number;
  lon: number;
}

interface HookType {
  loading: boolean;
  getCurrentPosition: () => Promise<Position | undefined>;
}

export const useGetCurrentPosition = (): HookType => {
  const { t } = useTranslation();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const getCurrentPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      toast.show({ description: t('permissionDenied') });
      return;
    }

    setLoading(true);
    const location = await Location.getCurrentPositionAsync();

    const { latitude: lat, longitude: lon } = location.coords;
    setLoading(false);
    return { lat, lon };
  };

  return { loading, getCurrentPosition };
};
