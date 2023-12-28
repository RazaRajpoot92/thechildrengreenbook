import React from 'react'
import MediaNews from './MediaNews'

const MediaContainer = () => {
  return (
    <div className='w-full py-10 flex flex-col items-center'>

    <h1 className='text-orange-500 text-3xl md:text-5xl font-semibold'> What media says about us!!!</h1>

    <div className='w-40 md:w-96 my-7 rounded-xl h-[3px] bg-black border-black border'></div>

    <div className='w-full md:w-[100%] my-5 lg:w-[90%] xl:w-[80&] p-5 flex items-center justify-center flex-wrap gap-5 h-auto'>

        <MediaNews />

    </div>

    </div>
  )
}

export default MediaContainer
