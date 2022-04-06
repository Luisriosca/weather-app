import React, { useState } from 'react'
import './CurrentWeatherBox.css'

export default function CurrentWeatherBox({city, country, icon, main, description, tempCelsius, feelsLike, farValue, farFeels}) {
  const [isClicked, setClicked] = useState(false)

  return (
    <div className='CurrentWeatherBox'>
        <h1>Weather app</h1>
        <h2>{city}</h2>
        <h3>{country}</h3>
        <hr />
        <img className="center-self" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" width='150'/>
        <h4 className="center-self">{main}</h4>
        <p className="center-self">{description}</p>
        {isClicked ? <h4>Temp: {tempCelsius + '°C'}</h4> : <h4>Temp: {farValue + '°F'}</h4> }
        {isClicked ? <h4>Feels Like: {feelsLike + '°C'}</h4> : <h4>Feels Like: {farFeels + '°F'}</h4> }
        <button className='btn' onClick={() => setClicked(isClicked ? false : true)}>{isClicked ? 'To Farenheit' : 'To Celsius'}</button>
    </div>
  )
}
