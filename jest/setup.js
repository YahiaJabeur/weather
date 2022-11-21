import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import useAxios from 'axios-hooks';

jest.mock('expo-location', () => ({}));
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@expo/vector-icons/AntDesign', () => 'Icon');
jest.mock('@expo/vector-icons/Ionicons', () => 'Icon');
jest.mock('@expo/vector-icons/Entypo', () => 'Icon');
jest.mock('axios-hooks');
useAxios.mockReturnValue([{ data: undefined }]);
jest.useFakeTimers();
