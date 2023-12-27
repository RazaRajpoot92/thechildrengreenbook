import React, { useEffect, useState } from 'react'
import imgData from '../data/image data/imageData'
import { Link } from 'react-router-dom'


const img3 = "https://thechildrengreenbook.net/assets/images/banners/banner-02.jpeg"


const Hero = () => {

const [currentImg, setCurrentImg] = useState(0)

useEffect(()=>{
   const Time =  setTimeout(() => {
        if(currentImg===1){
            setCurrentImg(0)
        }else{
            setCurrentImg(currentImg+1)
        }
    }, 3000);

    return ()=>clearTimeout(Time)
},[currentImg])

    const bgstyle = {
        backgroundImage:`url(${imgData[currentImg]})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        opacity:"0.9"

    }
  return (
    <div style={bgstyle} className='w-[100vw] gap-5 p-5 justify-center items-center flex h-[70vh] md:w-[90vw] lg:w-[70vw]  rounded-lg m-auto mt-6 '>

        <div className='w-3/6 flex flex-col gap-7'>
            <h1 className='text-6xl font-bold text-white'>Introduction</h1>
            <p className='text-white font-semibold'>Although Climate Change is a global problem, yet Pakistan is one of the most affected countries, and therefore warrants some extraordinary steps to stem the tide. However, there could be no short-term solutions. In fact, considering the quantum of challenge the country is faced with, the entire nation needs to be sensitized.</p>

            <Link className='border-[1px] py-2 border-green-500 text-white hover:bg-transparent hover:text-green-500  px-3 rounded-md bg-green-500' >Orger a copy</Link>
        </div>

        <div className='w-3/12 border-[1px] h-60 rounded-lg'>
            <img src={img3} className='h-full rounded-lg ' alt="" />
        </div>
    </div>
  )
}

export default Hero
