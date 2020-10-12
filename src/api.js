import React,{useState} from 'react';
import{FetchWeather} from './FetchWeather';
///////////////////////////////////////////////////////////////////code

const Api=() =>{
  const [query, setQuery] =  useState('');
  const [weather, setWeather] = useState({})

  const search = async(e) =>{
      if(e.key === 'Enter'){
          const data = await FetchWeather(query)
          setWeather(data);
          setQuery('');
      }
  }
  return(
      
      <div className = 'main-container'>
      <h1>YOUR PERFECT TRIP </h1>
      <p>Explore the worlds weather with a tool that shows your perfect cities weather for you.</p>
          <input type='text' className='search' placeholder='Search.....' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
          {weather.main &&(
              <div className='city'>
                  <h2 className = 'city-name'>
                      <span>{weather.name}</span>
                      <sup>{weather.sys.country}</sup>
                  </h2>
                  <div className='city-temp'>
                      {Math.round(weather.main.temp)}
                      <sup>&deg;C</sup>
                  </div>
                  <div className = 'info'>
                  <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                      <p>{weather.weather[0].description}</p>
                  </div>
              </div>
          )}
      </div>
  );
}

export default Api;