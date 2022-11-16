import { Button, Center } from 'native-base';
import { Text } from 'react-native';

export default function Home({ navigation }) {
  return (
    <Center flex={1}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button onPress={() => navigation.navigate('AddLocation')}>Click Me</Button>
    </Center>
  );
}
