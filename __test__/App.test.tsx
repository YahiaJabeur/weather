import AsyncStorage from '@react-native-async-storage/async-storage';
import { fireEvent, render, screen } from '@testing-library/react-native';
import useAxios from 'axios-hooks';
import { NativeBaseProvider } from 'native-base';
import React from 'react';

import App from '../App';
import { STORAGE_KEYS } from '../src/libs/localStorage';
import { mockedWeatherData } from './mockedData';

const RenderApp = () => {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <App />
    </NativeBaseProvider>
  );
};

describe('when App start', () => {
  test('should render Home screen', () => {
    render(<RenderApp />);

    const buttonText = screen.getByText(/Add location/i);

    expect(buttonText).toBeDefined();
  });

  test('should check selected city in local storage', () => {
    render(<RenderApp />);

    expect(AsyncStorage.getItem).toBeCalledWith(STORAGE_KEYS.SELECTED_CITY_KEY);
  });

  test('should show weather', () => {
    jest.mock('axios-hooks');
    // @ts-ignore: Unreachable code error
    useAxios.mockReturnValue([
      {
        data: mockedWeatherData,
      },
    ]);
    render(<RenderApp />);

    const cityName = screen.getByText(/Moabit, DE/i);

    expect(cityName).toBeDefined();
  });

  describe('when user click on add location', () => {
    test('should navigate to add location screen', () => {
      // @ts-ignore: Unreachable code error
      useAxios.mockReturnValue([{ data: undefined }]);
      render(<RenderApp />);

      const addLocation = screen.getByText(/Add location/i);
      fireEvent.press(addLocation);
      const selectCity = screen.getByText(/Select current city/i);

      expect(selectCity).toBeDefined();
    });
  });
});
