import { Button, Center, Heading, Image, ScrollView, Text } from 'native-base';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import { RefreshControl } from 'react-native-web-refresh-control';

import { LoaderOverlay } from '../components/LoaderOverlay';
import { useCurrentWeather } from '../hooks/use-current-weather';
import { getStoredData, STORAGE_KEYS } from '../libs/localStorage';
import { City } from '../models/City';

export default function Home({ navigation }) {
  const { t } = useTranslation();
  const { data, loading, geCurrentWeather } = useCurrentWeather();

  const getWeather = async () => {
    const storedCity = await getStoredData(STORAGE_KEYS.SELECTED_CITY_KEY);
    if (storedCity) {
      const selectedCity: City = JSON.parse(storedCity);
      console.log('selectedCity', selectedCity);
      geCurrentWeather(selectedCity.lat, selectedCity.lon);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await getWeather();
    });
    return unsubscribe;
  }, [navigation]);

  console.log('weather data', data);

  if (loading) {
    return <LoaderOverlay />;
  }

  return (
    <ScrollView
      h="100%"
      flex={1}
      centerContent
      refreshControl={<RefreshControl refreshing={loading} onRefresh={getWeather} />}>
      <Center flex={1} bg="white">
        {data ? (
          <>
            <Image
              source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
              alt="Alternate Text"
              size="xl"
            />
            <Heading>{data.name}</Heading>
            <Text fontSize="6xl">{`${data.main.temp} °C`}</Text>
            <Text fontSize="xl">{`${data.main.temp_min}° / ${data.main.temp_max}°`}</Text>
            <Button onPress={() => navigation.navigate('AddLocation')}>{t('addLocation')}</Button>
          </>
        ) : (
          <Button onPress={() => navigation.navigate('AddLocation')}>{t('addLocation')}</Button>
        )}
      </Center>
    </ScrollView>
  );
}
