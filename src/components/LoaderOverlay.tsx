import { Center, Heading, HStack, Spinner } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const LoaderOverlay = () => {
  const { t } = useTranslation();

  return (
    <Center flex={1}>
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          {t('loading')}
        </Heading>
      </HStack>
    </Center>
  );
};
