import React, { useEffect, useState } from 'react'
import imgData from '../data/image data/imageData'
import { Link } from 'react-router-dom'

import banner_img from "../assets/banner.jpg"


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
        backgroundImage:` linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)) ,url(${imgData[currentImg]})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        opacity:"0.9"

    }
  return (
    <div style={bgstyle} className='w-[100vw] shadow-2xl  gap-5 p-5 justify-center items-center flex-col md:flex-row flex h-[70vh] md:w-[90vw] lg:w-[80vw]  rounded-lg m-auto mt-6 '>

        <div className=' w-full md:w-3/6 items-center md:items-start flex flex-col gap-7'>
            <h1 className=' text-5xl md:text-6xl font-bold text-white'>Introduction</h1>
            <p className='text-white font-semibold'>Although Climate Change is a global problem, yet Pakistan is one of the most affected countries, and therefore warrants some extraordinary steps to stem the tide. However, there could be no short-term solutions. In fact, considering the quantum of challenge the country is faced with, the entire nation needs to be sensitized.</p>

            <Link to={"/orderbook"} className=' w-80 text-center ease-in duration-200 font-semibold border-[1px] py-2 border-green-500 text-black hover:bg-transparent hover:text-green-500  px-3 rounded-md bg-green-500' >Order a copy</Link>
        </div>

        <div className=' w-4/5 md:w-2/5 border-[1px] h-60 rounded-lg'>
            <img src={banner_img} className='h-full w-full rounded-lg ' alt="" />
        </div>
   
    </div>
  )
}

export default Hero
