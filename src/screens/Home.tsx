import { Entypo } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Center, Heading, Icon, Image, ScrollView, Text } from 'native-base';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import { RefreshControl } from 'react-native-web-refresh-control';

import { LoaderOverlay } from '../components/LoaderOverlay';
import { useCurrentWeather } from '../hooks/use-current-weather';
import { clearStorage, getStoredData, STORAGE_KEYS } from '../libs/localStorage';
import { City } from '../models/City';
import { RootStackParamList } from '../navigator/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  const { t } = useTranslation();
  const { data, loading, geCurrentWeather } = useCurrentWeather();

  const getWeather = async () => {
    const storedCity = await getStoredData(STORAGE_KEYS.SELECTED_CITY_KEY);
    if (storedCity) {
      const selectedCity: City = JSON.parse(storedCity);
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
      flex={1}
      centerContent
      refreshControl={
        <RefreshControl
          titleColor="red"
          tintColor="red"
          title="Hello"
          refreshing={loading}
          onRefresh={getWeather}
        />
      }>
      <Center flex={1} bg="white">
        {data && (
          <>
            <Image source={{ uri: data.icon }} alt="Alternate Text" size="xl" />
            <Heading>{`${data.name}, ${data.country}`}</Heading>
            <Text fontSize="6xl">{`${data.temp} °C`}</Text>
            <Text fontSize="3xl" mb={30}>
              <Icon as={Entypo} name="arrow-up" size="m" />
              {`${data.tempMin}° / ${data.tempMax}°`}
              <Icon as={Entypo} name="arrow-down" size="m" />
            </Text>
            <Text mb={30} fontSize="3xl">{`${t('feelsLike')} ${data.feelsLike} °C`}</Text>
          </>
        )}
        <Button onPress={() => navigation.navigate('AddLocation')}>
          {t(data ? 'changeLocation' : 'addLocation')}
        </Button>
      </Center>
      <Button onPress={clearStorage}>Dev button - Clear storage</Button>
    </ScrollView>
  );
}
