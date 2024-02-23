import React from 'react'
import { fifth } from '../../Data'
import Card3 from './Card3'

export default function About2() {
  return (
    <>
    <div className=' pb-10'>
    <div className=' py-14 text-gray-600 font-light  text-4xl pl-20'><h3>OUR <span className='  font-semibold'>TEAM</span></h3></div>
    <div className='    flex justify-center pb-10 '>
    {fifth.map((ele)=>{
            return(
                (<Card3 Data={ele}/>)
            )
        })
        }
    
    </div>
    <div className=' h-24 w-full bg-gray-300 flex justify-center items-center text-gray-600'>
        <h3>VIEW ALL TEAM</h3>
    </div>
    </div>
    </>
  )
}
