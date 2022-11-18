import { Center, Heading, HStack, Spinner } from 'native-base';
import React from 'react';

export const LoaderOverlay = () => {
  return (
    <Center flex={1}>
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Center>
  );
};
