import React from 'react'
import { first, second } from '../../Data'
import Card1 from './Card1'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function Home2() {
  return (
  <>
  <div className=' h-[90vh] w-full flex justify-center pt-10'>
    <div className=' h-full w-[30%]  pl-16 pt-20'>
        <img data-aos-duration="1500" data-aos="fade-right" src="../assests/img/phone-with-arrow.png" alt="" />
    </div>
    <div className=' h-full w-[30%]  flex justify-center'>
        {first.map((ele)=>{
            return(
                (<Card1 Data={ele}/>)
            )
        })
        }
    </div>
    <div className=' h-full w-[30%] pt-24'>
    {second.map((ele)=>{
            return(
                (<Card1 Data={ele}/>)
            )
        })
        }
    </div>
  </div>
  </>
  )
}
