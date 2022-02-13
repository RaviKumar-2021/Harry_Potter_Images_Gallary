
import { FaSearch } from "react-icons/fa";
import './NavBar.css'

import React from 'react'
const MiddleNavBar={
    width:'400px',
    
}

function MiddleNavbar() {
  return (
    <div className='items-center p-2 justy justify-center flex hover:border-'>
    <select name="movies" id='movies' className='bg-white rounded-l-lg item-center right-px px-7 py-2 border-none right-1' >
    <option className='py-20 option1' > Titles </option>  
    <option > Harry Potter and the Chamber of Secrets</option>    
    <option > Harry Potter and the Deathly Hallows: Part</option>
    <option value="">Harry Potter and the Half-Blood Prince</option>   
    <option value="">Harry Potter and the Order of the Phoenix</option>
    <option value="">Harry Potter and the Sorcerer's Stone</option>
    <option value="">Harry Potter and the Goblet of Fire</option>
    <option value="">Harry Potter and the Prisoner of Azkaban</option>
  </select>
  <h1>|</h1>
  <input type="text" name="search" id="" style={MiddleNavBar} className='flex py-2 hover:border-none' placeholder='Search...' />
  <FaSearch className="text-black h-8 w-10 text-center bg-white text-3xl rounded-r-lg items-center searchBar" /><span className="text-yellow-50 ml-10 text-3xl mb-2">|</span>
    </div>
  )
}

export default MiddleNavbar