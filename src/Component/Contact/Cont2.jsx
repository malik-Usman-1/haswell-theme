import React from 'react'
import { CiMap } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Cont2() {
  return (
   <>
   <div className=' h-72 w-full  flex justify-center'>
    <div className=' h-full w-[30%]  text-gray-500   flex justify-center items-center gap-3 '>
    <CiMap data-aos-duration="2500" data-aos="fade-right" className='pt-1 text-6xl'/> 
    <div className=' h-20 w-56  border-solid border-gray-500 border-l-2 pl-2 pt-3'>
        <h3 className='text-sm text-gray-800 font-bold'>ADDRESS</h3>
        <p className=' text-xs text-gray-500'>790 FOLSOM AVE, SAN FRANCISCO</p>
    </div>
    </div>
    <div className=' h-full w-[30%]  text-gray-500 flex justify-center items-center gap-3'>
    <MdOutlineMail data-aos-duration="2500" data-aos="fade-down" className='pt-1 text-5xl'/> 
    <div className=' h-20 w-56  border-solid border-gray-500 border-l-2 pl-2 pt-3'>
        <h3 className='text-sm text-gray-800 font-bold'>EMAIL</h3>
        <p className=' text-xs text-gray-500'>INFO@HASWELL.COM</p>
    </div>
    </div>
    <div className=' h-full w-[30%]  text-gray-500 flex justify-center items-center gap-3'>
    <LuSmartphone data-aos-duration="2500" data-aos="fade-left" className='pt-1 text-5xl'/> 
    <div className=' h-20 w-56  border-solid border-gray-500 border-l-2 pl-2 pt-3'>
        <h3 className='text-sm text-gray-800 font-bold'>CALL US</h3>
        <p className=' text-xs text-gray-500'>03164466401</p>
    </div>
    </div>
    
   </div>
   </>
  )
}
