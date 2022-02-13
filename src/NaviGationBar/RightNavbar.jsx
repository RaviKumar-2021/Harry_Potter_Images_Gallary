import React from 'react'
import {FaPaperclip} from 'react-icons/fa'

function RightNavbar() {
  return (
    <div className='flex space-x-10 text-yellow-100 text-xl items-center'>
        <div> <FaPaperclip className='text-yellow-100 space-x-0 ' /></div>
        <div className='text-white-50 text-3xl'>Favrout</div>
        <div className='text-white-50 text-3xl'>Languages</div>
    </div>
  )
}

export default RightNavbar