import React, { useState } from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/logo2.png"
import menu from "../assets/menu.png"
import cross from "../assets/cross.png"

const Nav = () => {

    const [menuBtn, setMenu] = useState(false)

    const handleClick = ()=>{

        setMenu(!menuBtn)
    }

    const mobMenu =
    <nav className='sm:w-60 md:hidden w-full flex gap-20  flex-col text-center py-2 h-dvh fixed rounded bg-green-100 z-50 top-0 right-0 transition-all border-red-500'>



        <img onClick={handleClick} className=' pt-5 cursor-pointer self-center w-[30px] ml-[-20px]' src={cross} alt="" />

        <div className='block sm:hidden self-center'>

            <Link to={"/"}>
                <img className=' w-[260px] ml-[-20px]' src={logo} alt="" />
            </Link>
        </div>


        <ul className=''>
            <li className=' hover:bg-green-200 h-10 flex justify-center items-center '><Link className='text-lg   text-green-600 font-semibold'  >Home</Link></li>
            <li className=' hover:bg-green-200 h-10 flex justify-center items-center ' ><Link className='text-lg  text-green-600 font-semibold' >Books</Link></li>
            <li className=' hover:bg-green-200 h-10 flex justify-center items-center '><Link className='text-lg  text-green-600 font-semibold' >About Us</Link></li>
            <li className=' hover:bg-green-200 h-10 flex justify-center items-center '><Link className='text-lg  text-green-600 font-semibold' >Review</Link></li>
        </ul>

        <div className='flex flex-col  gap-4'>

        <Link className='border-[1px] transition border-green-500 hover:bg-transparent hover:text-green-500 mx-2 text-white py-2 px-3 rounded-md bg-green-500'>SignUp</Link>
        <Link className='border-[1px] py-2 border-green-500 text-white hover:bg-transparent hover:text-green-500 mx-2  px-3 rounded-md bg-green-500' >Login</Link>

        </div>
    </nav>




  return (
    <>
    <nav className='w-full h-20 items-center flex justify-between px-5 lg:px-20 bg-green-100 '>

        <div>

            <Link to={"/"}>
                <img className=' w-[260px] ml-[-20px]' src={logo} alt="" />
            </Link>
        </div>

        <div className='hidden md:block'>
            <ul className='flex gap-3 lg:gap-7 '>
                <li><Link className='text-lg hover:text-orange-300 text-green-600 font-semibold' to={"/"} >Home</Link></li>
                <li><Link className='text-lg hover:text-orange-300 text-green-600 font-semibold' to={"/"} >Books</Link></li>
                <li><Link className='text-lg hover:text-orange-300 text-green-600 font-semibold' to={"/"} >About Us</Link></li>
                <li><Link className='text-lg hover:text-orange-300 text-green-600 font-semibold' to={"/"} >Review</Link></li>
            </ul>
        </div>

        <div className='hidden md:block'>
            <Link className='border-[1px] transition border-green-500 hover:bg-transparent hover:text-green-500 mx-2 text-white py-2 px-3 rounded-md bg-green-500'>SignUp</Link>
            <Link className='border-[1px] py-2 border-green-500 text-white hover:bg-transparent hover:text-green-500  px-3 rounded-md bg-green-500' >Login</Link>
        </div>

        <div className='md:hidden'>
            <img onClick={handleClick} className='w-10' src={menu} alt="" />
        </div>

    </nav>

    {menuBtn&&mobMenu}

    </>
  )
}

export default Nav
