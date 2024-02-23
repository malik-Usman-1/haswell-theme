import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Card3({Data}) {
  return (
    <>
    <div data-aos="fade-up" data-aos-duration="1500" className='  '>
        <img src={Data.img} alt="" />
     <p  className='text-black text-5xl font-semibold'>{Data.para1}</p>
     <p className='text-black font-bold  text-center text-lg'>{Data.para2}</p>
     <h3 className='text-gray-600 text-center text-sm pt-2'>{Data.head2}</h3>
     <div className=' pt-4 flex justify-center gap-3 text-gray-500 '>
        {Data.icon1}
        {Data.icon2}
        {Data.icon3}

     </div>
     
    

    </div>
    </>
  )
}
