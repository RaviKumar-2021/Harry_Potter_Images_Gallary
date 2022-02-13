import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'
import './Banner.css'

function Banner() {
  return (
    <div className='flex items-center bg-black Banner'>
        <LeftBanner/>
        <RightBanner/>
    </div>
  )
}

export default Banner