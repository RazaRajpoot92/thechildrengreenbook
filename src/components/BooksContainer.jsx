import React from 'react'
import Book from './Book'

const BooksContainer = () => {
  return (
    <div className='w-full py-20 flex flex-col items-center'>

      <h1 className='text-orange-500 text-3xl md:text-5xl font-semibold'> <span className='text-green-500'>Green</span> Book Chapters</h1>

      <div className='w-40 md:w-60 my-4 rounded-xl h-[3px] bg-black border-black border'></div>

        <div className='w-full md:w-[100%] lg:w-[90%] xl:w-[80&] p-5 flex items-center justify-center flex-wrap gap-5 h-auto'>

            <Book />


        </div>

    </div>
  )
}

export default BooksContainer
