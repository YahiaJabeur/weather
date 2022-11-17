import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Center, Icon, Input } from 'native-base';
import { useTranslation } from 'react-i18next';

import { useGeocoding } from '../hooks/use-geocoding';

export default function AddLocation({ navigation }) {
  const { t } = useTranslation();
  const { data, getCities } = useGeocoding();
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
          onPress={() => navigation.navigate('Home')}>
          {t('selectCurrentCity')}
        </Button>
      </Center>
    </Box>
  );
}
