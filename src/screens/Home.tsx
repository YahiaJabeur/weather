import { Button, Center } from 'native-base';
import { useTranslation } from 'react-i18next';

import { useCurrentWeather } from '../hooks/use-current-weather';

export default function Home({ navigation }) {
  const { t } = useTranslation();
  const { data, geCurrentWeather } = useCurrentWeather();

  return (
    <Center flex={1}>
      <Button onPress={() => navigation.navigate('AddLocation')}>{t('addLocation')}</Button>
    </Center>
  );
}
