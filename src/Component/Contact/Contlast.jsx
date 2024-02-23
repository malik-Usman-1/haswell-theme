import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

export default function Contlast() {
  return (
   <>
   <div className=' h-52 w-full bg-gray-200 flex justify-center items-center pt-11'>
    <div className='  '>
        <div className='  flex justify-center gap-7 items-center'>
    <FaFacebookF />
    <FaTwitter />
    <FaBehance />
    <FaLinkedinIn />
    <FaDribbble />
    </div>

        <div className=' h-8 w-full flex justify-center'>
            <h3>© HASWELL 2023</h3>
        </div>
    </div>

   </div>
   </>
  )
}
