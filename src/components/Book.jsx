import React from 'react'
import bookImages from '../data/image data/bookImages'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <>
    {
        bookImages.map((bookImage,index)=>(

            <div key={index} className='w-[330px] shadow-md hover:shadow-xl rounded-md h-60 hover:scale-105 ease-in-out duration-200 flex flex-col p-2 gap-3 border-gray-100 border-2'>

              <img src={bookImage} className='h-4/5 rounded-md' alt="" />

              <Link className='border-[1px] text-center ease-in duration-200 py-2 border-green-500 text-white hover:bg-transparent hover:text-green-500  px-3 rounded-md bg-green-400' >Read Now</Link>

            </div>

        ))
    }
    </>

  )
}

export default Book
