import React from 'react'
import './CurrentWeatherBox.css'

export default function title({city, country, icon, main, description, tempCelsius, feelsLike}) {
  return (
    <div className='CurrentWeatherBox'>
        <h1>Weather app</h1>
        <h2>{city}</h2>
        <h3>{country}</h3>
        <hr />
        <img className="center-self" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" width='150'/>
        <h4 className="center-self">{main}</h4>
        <p className="center-self">{description}</p>
        <h4>Temp: {tempCelsius + '°C'}</h4>
        <h4>Feels Like: {feelsLike + '°C'}</h4>
        <button className='btn'>to Farenheit</button>
    </div>
  )
}
