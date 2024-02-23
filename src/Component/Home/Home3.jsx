import React from 'react'
import { fourth, third } from '../../Data'
import Card2 from './Card2'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home3() {
  return (
   <>
   <div className='  w-full grid grid-cols-2 grid-rows-2 pt-10 pb-20'>
    <div data-aos-duration="1500"  data-aos="fade-right" className=' flex justify-center items-center'>
    {third.map((ele)=>{
            return(
                (<Card2 Data={ele}/>)
            )
        })
        }
    </div>
    <div className=' '>
    <img src="../assests/img/fes2.jpg" alt="" className='h-full' />
    </div>
    <div>
    <img src="../assests/img/fes3.jpg" alt="" className='h-full' />
    </div>
    <div data-aos-duration="1500" data-aos="fade-right" className=' flex justify-center items-center'>
    {fourth.map((ele)=>{
            return(
                (<Card2 Data={ele}/>)
            )
        })
        }
    </div>
   </div>
   </>
  )
}
