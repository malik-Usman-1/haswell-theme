import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const first =[
    {
        head1:'WE ARE CREATIVE',
        para1:'FULLY RESPONSIVE',
        para2:'Sed ut perspiciatis unde omnis iste nat eror acus antium que',
        head2:'UNIQUE DESIGN',
        para3:'Sed ut perspiciatis unde omnis iste nat eror acus antium que',
    }
]
const second =[
    {
        para1:'FULLY RESPONSIVE',
        para2:'Sed ut perspiciatis unde omnis iste nat eror acus antium que',
        head2:'UNIQUE DESIGN',
        para3:'Sed ut perspiciatis unde omnis iste nat eror acus antium que',
    }
]
const third =[
    {
        para1:'MORE THAN RESPONSIVE',
        para3:'Sed ut perspiciatis unde omnis iste nat eror acus antium que. Asperiores, ea velit enim labore doloribus.',
    }
]
const fourth =[
    {
        para1:'BOXED & WIDE LAYOUTS',
        para3:'Sed ut perspiciatis unde omnis iste nat eror acus antium que. Asperiores, ea velit enim labore doloribus.',
    }
]
const fifth =[
    {
        img:'/assests/img/team-1.jpg',
        para2:'JESSICA DOE',
        head2:'VP ENGINEERING',
        icon1:<FaFacebookF className=' hover:text-black cursor-pointer'/>,
        icon2:<FaTwitter className=' hover:text-black cursor-pointer' />,
        icon3:<FaDribbble className=' hover:text-black cursor-pointer'/>
    },
    {
        img:'/assests/img/team-2.jpg',
        para2:'JOHN DOE',
        head2:'FOUNDER AND CEO',
        icon1:<FaFacebookF className=' hover:text-black cursor-pointer' />,
        icon2:<FaTwitter className=' hover:text-black cursor-pointer' />,
        icon3:<FaDribbble className=' hover:text-black cursor-pointer'/>
    },
    {
        img:'/assests/img/team-3.jpg',
        para2:'EDWARD DOE',
        head2:'CREATIVE DIRECTOR',
        icon1:<FaFacebookF className=' hover:text-black cursor-pointer' />,
        icon2:<FaTwitter className=' hover:text-black cursor-pointer' />,
        icon3:<FaDribbble className=' hover:text-black cursor-pointer'/>
    }
]
const sixth =[
    {
        para1:'OPTIMIZED FOR MOBILE',
        para3:'Sed ut perspiciatis unde omnis iste nat eror acus antium que. Asperiores, ea velit enim labore doloribus.',
        btn:'BUY NOW'
    }
]

export{first,second,third,fourth,fifth,sixth}