import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import './src/libs/i18next';

import AddLocation from './src/screens/AddLocation';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddLocation" component={AddLocation} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
