import { Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { sendForm } from '@emailjs/browser';
function Contact() {


    function sendEmail(e) {
        e.preventDefault();
        sendForm('service_j0nl1ut', 'template_heu0b9n', e.target, 'bK8T5TpWBvmPX8jwr').then((e) => {
            console.log('sent')
        }).catch((e) => {
            console.log(e)
        })
        console.log("sent")
        alert("email sent ")
    }


    return (
        <div className='mx-48 mt-8 text-white ' >
            <div className='grid grid-cols-2  ' >
                <div className=' flex  flex-col' >

                    <form className="contact-form" onSubmit={sendEmail}>
                        <label className='text-xl text-amber-400' >
                            Just Say Hello!
                        </label><br />
                        <label className='text-xl text-amber-400'>Name</label>
                        <input className='bg-inherit rounded-xl my-1 w-full'
                            type="text" name="from_name" />
                        <label className='text-xl text-amber-400'>Email</label>
                        <input className='bg-inherit rounded-xl my-1 w-full' type="email" name="email_from" />
                        <label className='text-xl text-amber-400'>Subject</label>
                        <input className='bg-inherit rounded-xl my-1 w-full' type="text" name="subject" />
                        <label className='text-xl text-amber-400'>Message</label>
                        <textarea className='bg-inherit rounded-xl my-1 w-full' name="message" />
                        <button className='w-full bg-amber-400 h-8 rounded-xl my-4 ' type="submit" value="Send" >Send</button>
                    </form>
                </div>
                <div className=' ml-32 flex flex-col items-start  ' >

                    <label className='text-amber-400 text-xl' >Contact Information</label>
                    <label>
                        Aurangabad, 824101
                    </label>
                    <label>
                        Bihar, India
                    </label>
                </div>
            </div>

        </div>

    )
}

export default Contact