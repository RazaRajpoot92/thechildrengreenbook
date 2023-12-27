import React, { useEffect, useState } from 'react'
import imgData from '../data/image data/imageData'

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
    <div style={bgstyle} className='w-[90vw] h-[70vh] lg:w-[70vw]  rounded-lg m-auto mt-6 '>
      heroh1


    </div>
  )
}

export default Hero
