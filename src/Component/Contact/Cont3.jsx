import React from 'react'

export default function Cont3() {
  return (
   <>
   <div className=' py-20 pb-10 flex'>
    <div className=' h-full w-[50%]  '>
        <img src="../assests/img/vt.png" alt="" className=' h-full w-full' />
    </div>
    <div className=' px-52 bg-gray-200 flex flex-col gap-6 justify-center pl-32  '>
    <div className=' h-16 w-56  border-solid border-gray-500 border-l-2 pl-2 pt-1'>
        <h3 className='text-4xl text-gray-800 '>CONTACT US</h3>
        </div>
        <input type="text" name="" id="" placeholder='NAME' className='border-b-2 border-black h-12 w-80 bg-transparent placeholder:text-black' />
        <input type="text" placeholder='EMAIL' className='border-b-2 border-black h-12 w-80 bg-transparent placeholder:text-black' />
        <textarea name="" id="" cols="30" rows="10" placeholder='MESSAGE'  className='border-b-2 border-black h-24 bg-transparent w-80 placeholder:text-black' ></textarea>
        <button className='h-12 w-40 bg-gray-700 hover:bg-black duration-300 text-white'>SEND MESSAGE</button>
    </div>

   </div>
   </>
  )
}
