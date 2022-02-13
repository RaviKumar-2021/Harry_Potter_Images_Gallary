import React from 'react';
import Logo from '../Images/Logo.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const DropdownItemHandler=()=>{
alert('This Is DropDown Menu Button')
}

function LeftNavbar() {
  return (
    <div>
        <nav className='flex space-x-10 items-center p-2 justy justify-center text-yellow-100'>
    <div className=''>
      <img src={Logo} alt="" srcset="" className='h-10'/>
    </div>
    <div>
     <div className='text-white-50 scale-150 hover:scale-110'>
     <FontAwesomeIcon icon={faBars} onClick={DropdownItemHandler} /> MENU
         </div>
     
    </div>
    </nav>
    </div>
  )
}

export default LeftNavbar