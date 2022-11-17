import { Button, Center } from 'native-base';
import { useTranslation } from 'react-i18next';

export default function Home({ navigation }) {
  const { t } = useTranslation();

  return (
    <Center flex={1}>
      <Button onPress={() => navigation.navigate('AddLocation')}>{t('addLocation')}</Button>
    </Center>
  );
}
