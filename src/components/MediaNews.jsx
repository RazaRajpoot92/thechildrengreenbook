import React from 'react'
import mediaData from '../data/image data/mediaData'
import { Link } from 'react-router-dom'

const MediaNews = () => {
  return (
    <>
    {
        mediaData.map((news)=>(

            <div key={news.id} className='w-[330px] h-[480px] shadow-md hover:shadow-xl rounded-md  hover:scale-105 ease-in-out duration-200 flex flex-col p-2 gap-3 border-gray-100 border-2'>

              <img src={news.img} className='h-4/5 rounded-md' alt="" />
                <h3>{news.title}</h3>
              <Link className='border-[1px] text-center ease-in duration-200 py-2 border-green-500 text-white hover:bg-transparent hover:text-green-500  px-3 rounded-md bg-green-400' >View Details</Link>

            </div>

        ))
    }
    </>

  )
}

export default MediaNews
