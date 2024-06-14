import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { IconContext } from "react-icons";
import { FiInstagram } from "react-icons/fi";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";


function Connect() {
  return (
    <div className='mx-48 w-full justify-center' >
        <h1 className=' text-left text-lg text-white font-bold' >
                Connect With Me!!
            </h1>
        <div className='flex flex-row gap-8 justify-between align-middle' >
            
        <IconContext.Provider value={{ color: "amber", className: "global-class-name text-amber-400" }}>
            <a href='https://www.facebook.com/profile.php?id=100084721501713' >
                <IoLogoFacebook className='h-16 w-16' />
            </a>
            <a href='https://www.instagram.com/shubham_agrawal_?utm_source=qr&igsh=MWI5N2NtN3pjeXFuYw==' >
                <FiInstagram className='h-16 w-16' />
            </a>

            <a href='https://github.com/shubhamAgrawal0609' >
                <FaSquareGithub className='h-16 w-16' />
            </a>
            <a href='https://www.linkedin.com/in/shubham-agrawal-87842b22b' >
                <IoLogoLinkedin  className='h-16 w-16' />
            </a>
            </IconContext.Provider>;
        </div>
    </div>
  )
}

export default Connect