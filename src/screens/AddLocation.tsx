import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Center, Icon, Input } from 'native-base';
import { useTranslation } from 'react-i18next';

export default function AddLocation({ navigation }) {
  const { t } = useTranslation();
  return (
    <Box flex={1}>
      <Input variant="outline" mx="3" placeholder={t('enterCity') as string} w="90%" />
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
