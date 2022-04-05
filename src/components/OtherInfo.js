import React from 'react'
import './OtherInfo.css'
import 'boxicons'

export default function OtherInfo({windSpeed, humidity, seaLevel}) {
  return (
    <div className='OtherInfo'>
        <div className='icon-label'>
          <box-icon className='icon' animation='burst-hover' size='lg' name='wind'/>
          <h2>{windSpeed}</h2>
        </div>
        <div className='icon-label'>
          <box-icon name='droplet' size='lg' animation='burst-hover'/>
          <h2>{humidity}</h2>
        </div>
        <div className='icon-label'>
          <box-icon name='water' size='lg' animation='burst-hover'/>
          <h2>{seaLevel}</h2>
        </div>
    </div>
  )
}
