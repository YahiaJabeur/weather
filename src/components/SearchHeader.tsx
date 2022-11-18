import { Ionicons, AntDesign } from '@expo/vector-icons';
import { HStack, Icon, Input } from 'native-base';
import React from 'react';

interface Props {
  placeholder: string;
  onSubmit: (value: string) => void;
  onBackPress: () => void;
}

export const SearchHeader = ({ placeholder, onSubmit, onBackPress }: Props) => {
  return (
    <HStack justifyContent="center" my="2">
      <Icon
        my="2"
        mr="2"
        size="6"
        color="black"
        as={<AntDesign name="arrowleft" />}
        onPress={onBackPress}
      />
      <Input
        placeholder={placeholder as string}
        w="90%"
        borderRadius="4"
        fontSize="14"
        InputLeftElement={
          <Icon mt="2" mb="2" ml="2" size="6" color="gray.400" as={<Ionicons name="search" />} />
        }
        onSubmitEditing={(event) => onSubmit(event.nativeEvent.text)}
      />
    </HStack>
  );
};
