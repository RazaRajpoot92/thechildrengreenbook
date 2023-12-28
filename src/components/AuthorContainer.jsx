import React from 'react'
import authorPic from "../assets/author.jpg"
import "../animation/updown.css"

const AuthorContainer = () => {
  return (
    <div className='w-full py-10 flex flex-col items-center'>

    <h1 className='text-orange-500 text-4xl md:text-5xl font-semibold'> The Author</h1>

    <div className='w-40 my-4 rounded-xl h-[3px] bg-black border-black border'></div>

    <div className='w-full md:w-[100%] lg:w-[90%] xl:w-[80&] p-5 flex flex-col md:flex-row items-center justify-center gap-10 h-auto'>

        <div className=' w-full md:w-1/2'>

            <h1 className=' text-3xl lg:text-5xl mb-4 font-semibold'><span className='text-green-500'>Ahtsham</span> Anwar</h1>

            <p className='text-gray-700 lg:text-xl'>Ahtsham's works include 38 plays, 2 narrative poems, 154 sonnets, and a variety of other poems. No original manuscripts of Ahtsham's plays are known to exist today. It is actually thanks to a group of actors from Ahtsham's company that we have about half of the plays at all. They collected them for publication after Ahtsham died, preserving the plays. These writings were brought together in what is known as the First Folio ('Folio' refers to the size of the paper used). It contained 36 of his plays, but none of his poetry.
            Ahtsham's legacy is as rich and diverse as his work; his plays have spawned countless adaptations across multiple genres and cultures. His plays have had an enduring presence on stage and film. His writings have been compiled in various iterations of The Complete Works of  Ahtsham, which include all of his plays, sonnets, and other poems.  Ahtsham continues to be one of the most important literary figures of the English language.
            </p>

        </div>

        <div className=' w-full h-3/5 md:w-[30%]'>
                <img src={authorPic}  className='w-full anim  rounded-xl' alt="" />
        </div>

    </div>

    </div>
  )
}

export default AuthorContainer
