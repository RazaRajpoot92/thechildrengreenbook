import React from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/logo2.png"
import "../animation/updown.css"

const OrderForm = () => {
  return (
    <div className=' w-[98%] md:w-[90%] flex flex-col justify-center items-center gap-5 h-auto p-5 border-[2px] rounded-xl border-green-100 m-auto my-10'>
      <h1 className='text-3xl text-orange-500 font-bold'>Order a sample book</h1>
      
      <div className='  flex flex-col-reverse lg:flex-row gap-5'>
        <div className=' w-[320px] sm:w-[400px] lg:w-[300px] md:w-[500px] p-5 lg:h-[450px] border-[1px] shadow-md rounded-lg '>
          <h1 className='text-xl text-orange-600 mb-3 font-semibold'>Important Instructions</h1>
          <ul className='flex flex-col gap-4 text-gray-500 text-[14px]'>
            <li> <span className='font-bold text-green-600'>1)</span>  The price of The Children's Green Book has been fixed as Rs 500/- per copy which will be received on delivery.</li>
            <li> <span className='font-bold text-green-600'>2)</span> The delivery would be made through registered post at the earliest but not later than 15 days.</li>
            <li> <span className='font-bold text-green-600'>3)</span> In case of any query, please contact:</li>
            <li>School Education Department,South Punjab Bosan Road,Multan</li>
            <li>061-9210433</li>
          </ul>
          <img src={logo} className='w-[200px] mt-8 ' alt="" />
        </div>

        <form className=' w-[320px] sm:w-[400px] md:w-[500px] border-[1px] rounded-xl shadow-lg p-3 flex flex-col items-center gap-3 border-red h-auto'>
          <div className='flex flex-col w-full md:flex-row gap-4 '>
            <div className='flex flex-col gap-2'>
              <label className='text-green-500 font-semibold' htmlFor="name">Name</label>
              <input className=' w-[100%] md:w-[220px] h-[35px] border-[1px] border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-500 text-gray-500 focus:shadow-sm  ring-green-500' type="text" name='name' placeholder='Enter your name' required />
            </div>
            <div className='flex w-full flex-col gap-2'>
              <label className='text-green-500 font-semibold' htmlFor="contact">Contact No</label>
              <input className='  md:w-[220px] h-[35px] border-[1px] border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-500 text-gray-500 focus:shadow-sm  ring-green-500' type="phone" name='contact' placeholder='Enter your number' />
            </div>
          </div>

          <div className='flex flex-col w-full md:flex-row gap-4 '>
            <div className='flex flex-col gap-2'>
              <label className='text-green-500 font-semibold' htmlFor="email">Email</label>
              <input className='md:w-[220px] h-[35px] border-[1px] border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-500 text-gray-500 focus:shadow-sm  ring-green-500' type="email" name='name' placeholder='Enter your email' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-green-500 font-semibold' htmlFor="contact">No. of Copies</label>
              <input className=' md:w-[220px] h-[35px] border-[1px] border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-500 text-gray-500 focus:shadow-sm  ring-green-500' type="number" name='contact' placeholder='No. of copies' />
            </div>
          </div>

          <div className='self w-full' >
            <div className='flex flex-col gap-2'>
            <label className='text-green-500 font-semibold' htmlFor="contact">Postal Address</label>
            <textarea className='md:w-[470px] h-[55px] border-[1px] border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-500 text-gray-500 focus:shadow-sm  ring-green-500' type="phone" name='contact' placeholder='Enter your postal address' />
            </div>
          </div>

          <div className='self w-full' >
            <div className='flex flex-col gap-2'>
            <label className='text-green-500 font-semibold' htmlFor="contact">Message <span className='text-xs'>(If any)</span></label>
            <textarea className=' md:w-[470px] h-[55px] border-[1px] border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-500 text-gray-500 focus:shadow-sm  ring-green-500' type="phone" name='contact' placeholder='Enter your message' />
            </div>
          </div>
          <input value={"CONFIRM ORDER"} type="submit" className=' md:w-80 cursor-pointer text-center ease-in duration-200 font-semibold border-[1px] py-2 border-green-500 text-black hover:bg-transparent hover:text-green-500  px-3 my-3 rounded-md bg-green-400' />
        </form>
      </div>
    </div>
  )
}

export default OrderForm