import React from 'react'
import './OtherInfo.css'

export default function OtherInfo({windSpeed, humidity, seaLevel}) {
  return (
    <div className='OtherInfo'>
       <h2>Other information of current weather:</h2>
        
        <div className='iconlabel'>
          <img src="https://i.ibb.co/G7rq3Z9/bx-wind.png" alt="bx-wind" border="0" width='50'/>
          <h4>Wind Speed: {windSpeed} m/s</h4>
        </div>

        <div className='iconlabel'>
          <img src="https://i.ibb.co/VgBPq03/bx-droplet.png" alt="bx-droplet" border="0" width="50"/>
          <h4>Humidity: {humidity}%</h4>
        </div>
        
        <div className='iconlabel'>
          <img src="https://i.ibb.co/VWvHbbK/bx-water.png" alt="bx-water" border="0" width='50'/>
          <h4>Preasurre on sea level: {seaLevel} hPa</h4>
        </div>
    
    </div>
  )
}
