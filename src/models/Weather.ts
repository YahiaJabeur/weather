export interface Weather {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
  weather: { icon: string }[];
}

export interface FormattedWeather {
  name: string;
  country: string;
  temp: number;
  feelsLike: number;
  tempMax: number;
  tempMin: number;
  icon: string;
}
