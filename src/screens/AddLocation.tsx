import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Center, Icon, Input } from 'native-base';
import { useTranslation } from 'react-i18next';

import { useCurrentWeather } from '../hooks/use-current-weather';
import { useGeocoding } from '../hooks/use-geocoding';
import { useGetCurrentPosition } from '../hooks/use-get-current-position';
import { STORAGE_KEYS, storeData } from '../libs/localStorage';
import { City } from '../models/City';

export default function AddLocation({ navigation }) {
  const { t } = useTranslation();
  const { data: citiesData, getCities } = useGeocoding();
  const { data, geCurrentWeather } = useCurrentWeather();
  const { loading: loadingPosition, getCurrentPosition } = useGetCurrentPosition();

  const selectCurrentCity = async () => {
    const position = await getCurrentPosition();
    if (position) {
      const city: City = { lat: position.lat, lon: position.lon };
      await storeData(STORAGE_KEYS.SELECTED_CITY_KEY, JSON.stringify(city));
      navigation.navigate('Home');
    }
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
