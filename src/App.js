import { useEffect, useState } from 'react';
import './App.css';
import OtherInfo from './components/OtherInfo';
import CurrentWeatherBox from './components/CurrentWeatherBox';

import getWeatherInfo from './services/getWeatherInfo'
import Loader from './components/Loader';


function App() {
  //*Using state for set my critical information
  //*---------------Location info---------------  
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  //*---------------Weather--------------------- 
  const [main, setMain] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');  
  const [tempCelsius, setTempCelsius] = useState('');  
  const [tempFarenheit, setFarenheit] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [feelsLikeFar, setFeelsLikeFar] = useState('');
  //*---------------Other data-------------------
  const [windSpeed, setWindSpeed] = useState('');
  const [humidity, setHumidity] = useState('');
  const [seaLevel, setSeaLevel] = useState('');
  //*---------------Indicators-------------------
  const [isDataLoaded, setIsDataLoad] = useState(false)
  
  const getFarenheitValue = (celsiusValue) => {
    const result = (celsiusValue * 9/5) + 32;
    return result 
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      getWeatherInfo(position.coords.latitude, position.coords.longitude).then((response) => {
        setIsDataLoad(true)
        setCity(response.data['name'])
        setCountry(response.data['sys']['country'])
        setMain(response.data['weather'][0]['main'])
        setDescription(response.data['weather'][0]['description'])
        setIcon(response.data['weather'][0]['icon'])
        setFeelsLike(Math.floor(response.data['main']['feels_like']))
        setWindSpeed(response.data['wind']['speed'])
        setHumidity(response.data['main']['humidity'])
        setSeaLevel(response.data['main']['sea_level'])
        setTempCelsius(Math.floor(response.data['main']['temp']))
        setFarenheit(Math.ceil(getFarenheitValue(response.data['main']['temp'])))
        setFeelsLikeFar(Math.floor(getFarenheitValue(response.data['main']['feels_like'])))
      })
    })
  }, [])
  
  return (
    <div className="App">
      {isDataLoaded ? <div className="container">
          <CurrentWeatherBox className="TitleComponent" city={city} country={country} icon={icon.replace('d','n')} main={main} description={description} tempCelsius={tempCelsius} feelsLike= {feelsLike} farValue={tempFarenheit} farFeels={feelsLikeFar}/>
          <OtherInfo className="ForecastComponent" windSpeed={windSpeed} humidity={humidity} seaLevel={seaLevel}/>
      </div> : <Loader/> }
    </div>
  );
}

export default App;
