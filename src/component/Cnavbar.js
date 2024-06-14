import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { shubham_logo } from '../assests';


function Cnavbar() {
  return (
    <Navbar fluid rounded className='bg-transparent text-white ' >
      <Navbar.Brand href="/">
        <img src={shubham_logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Shubham Agrawal</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm font-medium ">Shubham Agrawal</span>
            <span className="block truncate text-sm ">agrawalshubham1001@gmail.com</span>
            <span className="block truncate text-sm ">Contact: +91 96938 30321</span>
            <span className="block truncate text-sm "></span>

          </Dropdown.Header>

        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className='text-white'  active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className='text-gray-400'>About Me</Navbar.Link>
        <Navbar.Link href="#" className='text-gray-400'>Projects</Navbar.Link>
        <Navbar.Link href="#" className='text-gray-400'>Connect</Navbar.Link>
        <Navbar.Link href="#" className='text-gray-400'>Download Resume</Navbar.Link>
        <Navbar.Link href="#" className='text-gray-400'>Contact Me</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Cnavbar