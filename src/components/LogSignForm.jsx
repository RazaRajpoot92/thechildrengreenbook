import React, { useState } from 'react'
import logo from "../assets/logo2.png"
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import { motion } from 'framer-motion'



const LogSignForm = () => {

    const [isVisible, setVisible] = useState(true)
    const [formVisible, setFormVisible] = useState(false)

    const bgstyle = {
        background: "linear-gradient(109.6deg, rgba(148, 233, 194,0.4) 11.2%, rgba(224, 235, 186,0.8) 91.1%)",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        opacity:"1"

    }

    const handleVisibility = ()=>{
        setVisible(!isVisible)
        setFormVisible(!formVisible)
    }

    const show = {
        opacity: 1,
        display: "block",
        duration:2

      };

      const hide = {
        opacity: 0,
        display: "none",
        duration:2,
        transition:{
            duration:2
        }

        // transitionEnd: {

        // }
      };

  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>

        <div style={bgstyle} className= ' w-[95vw] xl:w-[60vw] flex gap-3 h-[550px] rounded-xl shadow-md p-5'>

            <div className='w-[45%] relative flex flex-col justify-center items-center gap-5'>

                <h1 className=' text-3xl xl:text-5xl  font-semibold text-green-600'>
                    {isVisible?"Hello, Friend!":"Welcome Back!"}
                </h1>

                <div className='text-gray-500 text-md xl:text-xl p-4'>
                    {

                        isVisible?(<p>Welcome to The GreenBook, the website that connects you with your next favorite book. Enter your personal details and start your journey</p>):(
                            <p>To keep connecting with us, please login with your personal info</p>
                        )

                    }
                </div>

                <Link onClick={handleVisibility} className='border-[1px] w-[200px] text-center ease-in duration-200 py-2 border-orange-500 hover:text-white bg-transparent text-orange-500 mx-2  px-3 rounded-[20px] hover:bg-orange-500' >{isVisible?"Sign In":"Sign Up"}</Link>

                <motion.img whileHover={{scale:1.1}} drag dragConstraints={
                    {
                    top: -50,
                    right: 50,
                    bottom: 0,
                    left: -50,
                    }
                } src={logo} className='w-[170px] absolute  bottom-0	' alt="" />
            </div>



            <div  className='w-[55%] p-5 border-2 border-green-300 rounded-2xl shadow-md'>

                <motion.div animate={isVisible? show:hide} className='w-full flex justify-center items-center'>
                    <SignUp/>
                </motion.div>

                <motion.div animate={isVisible? hide:show} className='w-full flex justify-center items-center'>
                     <Login/>
                 </motion.div>

            </div>


        </div>

    </div>
  )
}

export default LogSignForm
