import React from 'react'
import logo from "../assets/logo2.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full  p-[10px] gap-5 md:justify-around items-center flex flex-col md:flex-row bg-green-100'>

        <div className=' w-[90%] md:w-80'>
            <img src={logo} className='w-[230px]' alt="" />
            <p className='text-sm text-gray-600'>Pakistan's first book for children of 12 years age that covers all topics related to Climate Change and allied matters such as forestry, agriculture, horticulture and more.</p>
        </div>
        <div>
            <h1 className='text-xl text-center md:text-left text-orange-500 font-semibold mb-3'>Contact Us</h1>
            <ul>
                <li>Addres: School Education Department, South Punjab Multan, Pakistan</li>
                <li>Phone: +9261-9210160</li>
                <li>Email: mail@thechildrengreenbook.net</li>
            </ul>
        </div>
        <div>
            <h1 className='text-xl text-center md:text-left  text-orange-500 font-semibold mb-3' >Pages</h1>
            <ul className='flex gap-5 md:block'>
                <li><Link to={'/'} className='hover:text-green-500'>Home</Link></li>
                <li><Link to={'/books'} className='hover:text-green-500'>Books</Link></li>
                <li><Link  className='hover:text-green-500'>About Us</Link></li>
                <li><Link  className='hover:text-green-500'>Review</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
