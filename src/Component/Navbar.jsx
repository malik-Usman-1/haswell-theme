import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <div className=' h-20 w-full bg-black flex justify-around'>
    <div className=' h-20 w-80 flex justify-center items-center '>
      <img src="../assests/img/logo-white.png" alt="" className=' h-12 w-40' />

    </div>
    <ul className=' h-20 w-96  text-white flex justify-start items-center gap-9'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/services'>Services</Link></li>
    </ul>
   </div>
   </>
  )
}
