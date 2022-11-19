import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Center, FlatList, Icon } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CityItem } from '../components/CityItem';
import { LoaderOverlay } from '../components/LoaderOverlay';
import { SearchHeader } from '../components/SearchHeader';
import { useGeocoding } from '../hooks/use-geocoding';
import { useGetCurrentPosition } from '../hooks/use-get-current-position';
import { STORAGE_KEYS, storeData } from '../libs/localStorage';
import { City } from '../models/City';

export default function AddLocation({ navigation }) {
  const { t } = useTranslation();
  const { data: citiesData, loading: loadingCity, getCities } = useGeocoding();
  const { loading: loadingPosition, getCurrentPosition } = useGetCurrentPosition();

  const selectCurrentCity = async () => {
    const position = await getCurrentPosition();
    if (position) {
      const city: City = { lat: position.lat, lon: position.lon };
      await storeData(STORAGE_KEYS.SELECTED_CITY_KEY, JSON.stringify(city));
      navigation.navigate('Home');
    }
  };

  const selectCity = async (item: City) => {
    await storeData(STORAGE_KEYS.SELECTED_CITY_KEY, JSON.stringify(item));
    navigation.navigate('Home');
  };

  const loading = loadingCity || loadingPosition;

  if (loading) {
    return <LoaderOverlay />;
  }

  return (
    <Box flex={1}>
      <SearchHeader
        placeholder={t('enterCity')}
        onSubmit={getCities}
        onBackPress={() => navigation.navigate('Home')}
      />

      <Center flex={1}>
        {citiesData && citiesData?.length > 0 ? (
          <FlatList
            w="100%"
            data={citiesData}
            renderItem={({ item }) => <CityItem item={item} onPress={selectCity} />}
          />
        ) : (
          <Button
            leftIcon={<Icon as={Ionicons} name="locate" size="sm" />}
            onPress={selectCurrentCity}>
            {t('selectCurrentCity')}
          </Button>
        )}
      </Center>
    </Box>
  );
}
