'use client'
import ContactInfo from '@/app/component/Contact_Page/ContactInfo'
import Contact_Input from '@/app/component/Contact_Page/Contact_Input'
import Footer_Footer from '@/app/component/Footer'
import NavbarOne from '@/app/component/Home_Page/NavbarOne'
import Nav from '@/app/component/Nav'
import React from 'react'

const page = () => {
  return (
    <>
      <NavbarOne />
      <Nav />
      <div className="container mx-auto">
                <div className="row grid lg:grid-cols-2 gap-40  bg-indigo-50">
                    <div className='mt-20 lg:mb-20 flex flex-col items-center'>
                        <h1 className='text-4xl font-bold mb-3 text-indigo-800'>Contact Us</h1>
                        <p>Home . Pages .<span className='text-pink-600 font-bold'> Contact Us</span></p>
                    </div>
                    <div></div>
                </div>
            </div>
            <ContactInfo />
            <Contact_Input />
            <Footer_Footer />
    </>
  )
}

export default page
