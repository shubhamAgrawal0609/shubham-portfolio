import React from 'react'

function About() {
    return (
        <div className='mx-48 mt-8' >
            <div className='grid grid-cols-2  justify-center items-center' >
                <div className=' flex items-start  flex-col' >
                    <span className='text-lg font-bold my-2 text-gray-400 '>
                        Name: Shubham Agrawal
                    </span>
                    <span className='text-lg font-bold my-2 text-gray-400 '>
                        Address: Aurangabad, Bihar
                    </span>
                    <span className='text-lg font-bold my-2 text-gray-400 '>
                        Skills:
                    </span>
                    <div className='w-full my-4' >
                        <span className='text-lg font-bold my-2 text-gray-400 '>
                            JavaScript
                        </span>
                        <div className='w-full my-2 h-4 rounded-xl bg-amber-400' >
                            .
                        </div>
                    </div>
                    <div className='w-full my-4' >
                        <span className='text-lg font-bold my-2 text-gray-400 '>
                            MERN
                        </span>
                        <div className='w-full my-2 h-4 rounded-xl bg-amber-400' >
                            .
                        </div>
                    </div>
                    <div className='w-full my-4' >
                        <span className='text-lg font-bold my-2 text-gray-400 '>
                            C++
                        </span>
                        <div className='w-full my-2 h-4 rounded-xl bg-amber-400' >
                            .
                        </div>
                    </div>
                    <div className='w-full my-4' >
                        <span className='text-lg font-bold my-2 text-gray-400 '>
                            SQL
                        </span>
                        <div className='w-3/4 my-2 h-4 rounded-xl bg-amber-400' >
                            .
                        </div>
                    </div>
                    <div className='w-full my-4' >
                        <span className='text-lg font-bold my-2 text-gray-400 '>
                            Python
                        </span>
                        <div className='w-2/4 my-2 h-4 rounded-xl bg-amber-400' >
                            .
                        </div>
                    </div>
                    <div className='w-full my-4' >
                        <span className='text-lg font-bold my-2 text-gray-400 '>
                            TailwindCSS
                        </span>
                        <div className='w-3/4 my-2 h-4 rounded-xl bg-amber-400' >
                            .
                        </div>
                    </div>
                </div>
                <div className=' mx-4 flex w-full flex-col items-start justify-start' >
                    <h1 className='text-white text-3xl ' >
                        About Me
                    </h1>
                    <span className='text-gray-400' >
                        An avid coder and Bit Mesra student, passionate about web development and driven by a thirst for knowledge. Always exploring new horizons and embracing the challenge of learning.
                    </span>
                    <table class="table-auto w-full my-4 text-white">

                        <tbody>
                            <tr>
                                <td>
                                    Profile:
                                </td>
                                <td>
                                    Full Stack Developer and Consultancy
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Domain:
                                </td>
                                <td>
                                    Software Developement
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Eductaion:
                                </td>
                                <td>
                                    Bachelor in Technology in Mechanical Engg.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Language:
                                </td>
                                <td>
                                    English, Hindi
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Other Skills:
                                </td>
                                <td>
                                    Communication Skills, Problem Solving, Leadership, Event Management, Graphic Designing 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Consultancy Skills:
                                </td>
                                <td>
                                    PowerBi, Tableau, Powerpoint, Spreadsheet
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default About