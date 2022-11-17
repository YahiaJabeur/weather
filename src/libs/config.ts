import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/';
const APP_ID = '20a4dc43edd175894cc452504e863727';

const GEOCODING_PATH = '/geo/1.0/direct';
const CURRENT_WEATHER_PATH = '/data/2.5/weather';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { appid: APP_ID };

export { GEOCODING_PATH, CURRENT_WEATHER_PATH };
