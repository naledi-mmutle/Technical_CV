import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_Key = '94e5f134f787330fc16841d166622ff7'
export const FetchWeather = async(query) =>{
  const {data} = await axios.get(URL,{
      params:{
          q: query,
          units: 'metric',
          APPID: API_Key,
      }
  });
  return data;
}