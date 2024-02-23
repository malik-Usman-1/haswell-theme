import React from 'react'

export default function Card2({Data}) {
  return (
    <>
    <div className=' w-[58%] flex flex-col gap-2 py-24'>
     <h2 data-aos="fade-down" className='text-black text-5xl' >{Data.head1}</h2>
     <p  className='text-black text-5xl font-semibold'>{Data.para1}</p>
     <p className='text-black text-sm'>{Data.para2}</p>
     <h3 className='text-black text-lg font-bold'>{Data.head2}</h3>
     <p className='text-black text-sm'>{Data.para3}</p>
    </div>
    </>
  )
}
