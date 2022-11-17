import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { useToast, Box, Button, Center, Icon, Input } from 'native-base';
import { useTranslation } from 'react-i18next';

import { useCurrentWeather } from '../hooks/use-current-weather';
import { useGeocoding } from '../hooks/use-geocoding';

export default function AddLocation({ navigation }) {
  const toast = useToast();
  const { t } = useTranslation();
  const { data: citiesData, getCities } = useGeocoding();
  const { data, geCurrentWeather } = useCurrentWeather();

  const selectCurrentCity = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    console.log('permission', permission);

    if (permission.status !== 'granted') {
      toast.show({
        description: t('permissionDenied'),
      });
      return;
    }

    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;
    geCurrentWeather(latitude, longitude);
  };

  return (
    <Box flex={1}>
      <Input
        variant="outline"
        mx="3"
        placeholder={t('enterCity') as string}
        w="90%"
        onSubmitEditing={(event) => getCities(event.nativeEvent.text)}
      />
      <Center flex={1}>
        <Button
          leftIcon={<Icon as={Ionicons} name="locate" size="sm" />}
          onPress={selectCurrentCity}>
          {t('selectCurrentCity')}
        </Button>
      </Center>
    </Box>
  );
}
