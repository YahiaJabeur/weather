import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/';
const APP_ID = '20a4dc43edd175894cc452504e863727';

const GEOCODING_PATH = '/geo/1.0/direct';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { appid: APP_ID };

export { GEOCODING_PATH };
