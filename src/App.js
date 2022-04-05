import { useEffect, useState } from 'react';
import './App.css';
import OtherInfo from './components/OtherInfo';
import CurrentWeatherBox from './components/CurrentWeatherBox';

import getWeatherInfo from './services/getWeatherInfo'


function App() {
  //*Using state for set my critical information
  //*---------------All data--------------------
  //*---------------Location info---------------  
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  //*---------------Weather--------------------- 
  const [main, setMain] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');  
  const [tempCelsius, setTempCelsius] = useState('');  
  // const [tempFarenheit, setFarenheit] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  //*---------------Other data-------------------
  const [windSpeed, setWindSpeed] = useState('');
  const [humidity, setHumidity] = useState('');
  const [seaLevel, setSeaLevel] = useState('');
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      getWeatherInfo(position.coords.latitude, position.coords.longitude).then((response) => {
        console.log(response.data);
        setData(response.data);
        setCity(response.data['name'])
        setCountry(response.data['sys']['country'])
        setMain(response.data['weather'][0]['main'])
        setDescription(response.data['weather'][0]['description'])
        setIcon(response.data['weather'][0]['icon'])
        setTempCelsius(response.data['main']['temp'])
        setFeelsLike(response.data['main']['feels_like'])
        setWindSpeed(response.data['wind']['speed'])
        setHumidity(response.data['main']['humidity'])
        setSeaLevel(response.data['main']['sea_level'])
      })
    })
  }, [])
  
  return (
    <div className="App">
      <div className="container">
          <CurrentWeatherBox className="TitleComponent" city={city} country={country} icon={icon.replace('d','n')} main={main} description={description} tempCelsius={tempCelsius} feelsLike= {feelsLike}/>
          <OtherInfo className="ForecastComponent" windSpeed={windSpeed} humidity={humidity} seaLevel={seaLevel}/>
      </div>
    </div>
  );
}

export default App;
