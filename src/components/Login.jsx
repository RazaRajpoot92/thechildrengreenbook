import React from 'react'
import userIcon from "../assets/user.png"
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <div className='w-full flex  flex-col items-center gap-8 '>

        <img src={userIcon} className=' w-[70px] 2xl:w-[100px] mb-[-25px]' alt="" />
      <h1 className=' text-3xl 2xl:text-4xl font-bold text-orange-600'>Sign In</h1>


      <form className='flex md:w-[60%] gap-3 flex-col'>

        <input className='h-[40px] text-gray-600 outline-none p-4 bg-gray-100 rounded-md focus:border-green-600 border-[1px]' type="email" placeholder='Enter your email' required />
        <input className='h-[40px] text-gray-600  outline-none p-4 bg-gray-100 rounded-md focus:border-green-600 border-[1px]' type="password" placeholder='Enter your password' required />

        <Link className='text-sm text-center text-gray-600 hover:text-green-600 hover:underline'>Forgot your password?</Link>


        <input type="submit" value={"Sign In"} className='border-[1px] self-center cursor-pointer w-[200px] text-center ease-in duration-200 py-2 border-green-500 text-white hover:bg-transparent hover:text-green-500 mx-2  px-3 rounded-[20px] bg-green-500' />
      </form>

    </div>
  )
}

export default Login
