import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Card1({Data}) {
  return (
   <>
   <div className=' w-[77%] flex flex-col gap-5 py-24'>
    <h2 data-aos-duration="1500" data-aos="fade-down" className='text-black text-5xl' >{Data.head1}</h2>
    <p className='text-black text-lg font-bold'>{Data.para1}</p>
    <p className='text-black text-sm'>{Data.para2}</p>
    <h3 className='text-black text-lg font-bold'>{Data.head2}</h3>
    <p className='text-black text-sm'>{Data.para3}</p>
   </div>
   </>
  )
}
