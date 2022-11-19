import { Box, HStack, Pressable, Spacer, Text, VStack } from 'native-base';
import React from 'react';

import { City } from '../models/City';

interface Props {
  item: City;
  onPress: (item: City) => void;
}

export const CityItem = ({ item, onPress }: Props) => {
  return (
    <Pressable onPress={() => onPress(item)}>
      <Box borderBottomWidth="1" borderColor="muted.800" py="2" px="4" h={60}>
        <HStack justifyContent="space-between">
          <VStack>
            <Text color="coolGray.800" bold>
              {item.name}
            </Text>
            <Text color="coolGray.600">{item.state}</Text>
          </VStack>
          <Spacer />
          <Text fontSize="xs" color="coolGray.800" alignSelf="flex-start">
            {item.country}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );
};
