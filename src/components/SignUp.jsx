import React from 'react'
import userIcon from "../assets/user.png"

const SignUp = ({message}) => {

  return (
    <div className='w-full flex  flex-col items-center gap-5 '>

        <img src={userIcon} className=' w-[70px] 2xl:w-[100px] mb-[-25px]' alt="" />
      <h1 className=' text-2xl mb-[-10px] 2xl:text-4xl font-bold text-orange-600'>Create Account</h1>


      <form className='flex lg:w-[60%] gap-3 flex-col'>
        <input className=' h-[25px]  bg-gray-100 2xl:h-[40px] text-gray-600   outline-none p-4 rounded-md focus:border-green-600 border-[1px]' type="text" placeholder='Enter your name' required />
        <input className='h-[25px] bg-gray-100 2xl:h-[40px] text-gray-600  outline-none p-4 rounded-md focus:border-green-600 border-[1px]' type="email" placeholder='Enter your email' required />
        <input className='h-[25px] bg-gray-100 2xl:h-[40px] text-gray-600  outline-none p-4 rounded-md focus:border-green-600 border-[1px]' type="password" placeholder='Enter your password' required />
        <input className='h-[25px] bg-gray-100 2xl:h-[40px] text-gray-600  outline-none p-4 rounded-md focus:border-green-600 border-[1px]' type="password" placeholder='Retype your password' required />
        <div className='flex gap-1 w-full '>
            <input type="checkbox" name="" id="" required />
            <p className='xl:text-[12px] 2xl:text-sm  text-gray-600'>You are agreed with our terms and condition</p>
        </div>

        <input type="submit" value={"Create Account"} className='border-[1px] self-center cursor-pointer w-[200px] text-center ease-in duration-200 py-2 border-green-500 text-white hover:bg-transparent hover:text-green-500 mx-2  px-3 rounded-[20px] bg-green-500' />
      </form>

    </div>
  )
}

export default SignUp
