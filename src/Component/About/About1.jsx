import React from 'react'

export default function About1() {
  return (
   <>
    <div className='h-[90vh] w-full about1 bg-gray-300 flex justify-center items-center'>
        <div className=' h-80 w-[60%]   flex justify-center items-center flex-col '>
          <h1 data-aos-duration="1500" data-aos="zoom-in-down" className=' text-6xl'>About Us</h1>
          <p data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">BRANDING / DESIGN / DEVELOPMENT / PHOTO</p>
          <div className=' h-20 w-96  flex justify-center items-center gap-5'>
            <button className=' h-10 w-36 border-2 border-black hover:bg-black hover:text-white duration-300'>SEE MORE</button>
            <button className=' h-10 w-36 border-2 border-black hover:bg-black hover:text-white duration-300'>BUY NOW</button>
          </div>
        </div>
      </div>
   </>
  )
}
