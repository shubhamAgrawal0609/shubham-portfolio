import React from 'react'
import Typewriter from 'typewriter-effect';
import { shubham_profile } from '../assests';
import { Button } from 'flowbite-react';
function Header() {



    return (
        <div className='mx-48 mt-8' >
            <div className='grid grid-cols-2  justify-center items-center' >
                <div className=' flex items-start  flex-col' >
                    <h1 className='text-5xl font-bold my-2 text-white '>
                        Shubham Agrawal
                    </h1>
                    <h1 className='text-4xl h-12 my-2 mx-4 w-auto bg-yellow-300 text-black '>
                        <Typewriter
                            className='mx-2'
                            onInit={(typewriter) => {
                                typewriter.typeString('Coding Enthusiast!')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("Full stack developer!")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString('Coding Enthusiast!')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("Full stack developer!")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString('Coding Enthusiast!')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("Full stack developer!")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString('Coding Enthusiast!')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("Full stack developer!")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start()
                                    ;
                            }}
                        />
                    </h1>
                    <h1 className='text-gray-300 text-2xl my-4 w-3/4' >
                    </h1>
                                        <div className='flex flex-row'>
                        <button className='bg-amber-400 rounded-2xl text-2xl  w-48 h-10' >
                            Message me
                        </button>
                    </div>
                </div>
                <div className=' flex flex-col items-center justify-center' >
                    <img
                        className='w-[884px]'
                        src={shubham_profile}
                    />
                </div>
            </div>

        </div>

    )
}

export default Header