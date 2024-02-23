import React from 'react'
import {  sixth } from '../../Data'
import Card4 from './Card4'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function About3() {
  return (
  <>
  <div className='  w-full flex justify-center items-center pb-10'>
    <div className='  flex justify-center items-center'>
        <img data-aos-duration="1500" data-aos="fade-right" src="../assests/img/ads-phone.jpg" alt="" />
    </div>
    <div className='   flex justify-center items-center'>
    {sixth.map((ele)=>{
            return(
                (<Card4 Data={ele}/>)
            )
        })
        }
    </div>
  </div>
  </>
  )
}
