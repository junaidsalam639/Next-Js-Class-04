import Blog_show from '@/app/component/Blog_Page/Blog_show'
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
                        <h1 className='text-4xl font-bold mb-3 text-indigo-800'>Blogs Page</h1>
                        <p>Home . Pages .<span className='text-pink-600 font-bold'> Blogs Page</span></p>
                    </div>
                    <div></div>
                </div>
            </div>
            <Blog_show />
    </>
  )
}

export default page

