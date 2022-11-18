import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Box, Button, Center, HStack, Icon, Input } from 'native-base';
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
      <HStack justifyContent="center" my="2">
        <Icon
          my="2"
          mr="2"
          size="6"
          color="black"
          as={<AntDesign name="arrowleft" />}
          onPress={() => navigation.navigate('Home')}
        />
        <Input
          placeholder={t('enterCity') as string}
          w="90%"
          borderRadius="4"
          fontSize="14"
          InputLeftElement={
            <Icon mt="2" mb="2" ml="2" size="6" color="gray.400" as={<Ionicons name="search" />} />
          }
          onSubmitEditing={(event) => getCities(event.nativeEvent.text)}
        />
      </HStack>

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
