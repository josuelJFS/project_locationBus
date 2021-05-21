import axios from 'axios';


import {AsyncStorage} from 'react-native';
const api = axios.create({
  //baseURL: 'http://192.168.0.19:3333/',
  baseURL: 'http://89.40.2.211:3333/',
});
 //@ts-ignore
api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('@token');
     
    if (token) {
      config.headers.token = `${token}`;
    }

    return config;
  } catch (err) {
      //@ts-ignore
    alert(err);
  }
});

export default api;