import React from 'react'
import LeftNavbar from './LeftNavbar'
import MiddleNavbar from './MiddleNavbar'
import RightNavbar from './RightNavbar'


function Navbar() {
  return (
    <>
    <div className='flex bg-black items-center justify-center space-x-10' >
      <LeftNavbar />
      <MiddleNavbar />
      <RightNavbar />
    </div>
    </>
  )
}

export default Navbar