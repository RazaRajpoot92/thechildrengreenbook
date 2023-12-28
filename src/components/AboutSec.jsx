import React from 'react'
import globalPic from "../assets/globalwarming.jpg"

const AboutSec = () => {
  return (
    <div className='flex flex-col md:flex-col lg:flex-row justify-center md:items-center gap-5 p-5 md:p-24'>

        <div className=' w-full lg:w-[45%] md:w-[620px] min-h-[500px] justify-evenly flex flex-col gap-5 p-8 border-[1px] rounded-3xl shadow-xl border-gray-300'>
            <p className='text-orange-400 text-l  md:text-xl'>How it started</p>
            <h1 className='text-black text-2xl md:text-3xl lg:text-5xl font-bold'>Our Aim is To Stop Global Warming</h1>

            <p className='mt-20 text-gray-700'>Climate change is one of the most urgent issues of our day. Several recent studies show that acting quickly and decisively to address this challenge and shift our economy to clean energy will bring significant benefits to the United States—while also helping us avoid some of the worst consequences of unchecked global warming.</p>
        </div>
        <div className='flex flex-col lg:flex-col md:flex-row gap-5'>
            <img src={globalPic} className=' w-full lg:w-[500px] md:w-[300px] rounded-3xl' alt="" />
            <div className=' w-full lg:w-[500px] md:w-[300px] flex flex-col justify-around	p-4 rounded-3xl border-2 h-[200px]'>
                <h1 className='text-green-600 text-xl font-semibold'>COLLABORATION WITH UNESCO</h1>
                <p className='text-gray-700'>Since amongst other objectives, the UNESCO also aims to help Member States to mitigate and adapt to Climate Change and achieve the relevant SDGs, its collaboration is being sought. </p>
            </div>
        </div>
    </div>
  )
}

export default AboutSec
