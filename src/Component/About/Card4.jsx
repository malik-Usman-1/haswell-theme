import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Card4({Data}) {
  return (
   <>
   <div data-aos-duration="1500" data-aos="fade-left" className=' w-[55%] flex flex-col gap-5 py-24'>
    <p className='text-black text-5xl font-bold'>{Data.para1}</p>
    <p className='text-black text-sm'>{Data.para3}</p>
    <button className='h-10 w-32 border-2 border-gray-600 hover:bg-black hover:text-white duration-500'>{Data.btn}</button>
   </div>
   </>
  )
}
