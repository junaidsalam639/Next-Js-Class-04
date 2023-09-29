'use client'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import signout from '../config/signout'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const router = useRouter()
    
    const handleOnClickLoginBtn = () => {
      if (!user) {
          router.push('/login_Singup_Page/login')
      } else {
        signout()
      }
  }

    return (
    <div>
      <header className="text-gray-600 body-font bg-indigo-950 fixed w-full">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-2xl font-medium text-white">Navbar</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:bg-gray-100 bg-gray-200 py-2 px-4 cursor-pointer rounded-md">Home</a>
      <a className="mr-5 hover:bg-gray-100 bg-gray-200 py-2 px-4 cursor-pointer rounded-md">About</a>
      <a className="mr-5 hover:bg-gray-100 bg-gray-200 py-2 px-4 cursor-pointer rounded-md">Service</a>
      <a className="mr-5 hover:bg-gray-100 bg-gray-200 py-2 px-4 cursor-pointer rounded-md">Contact</a>
    </nav>
    <button onClick={handleOnClickLoginBtn} className="inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 text-white font-medium rounded text-base mt-4 md:mt-0">{user ? 'Logout' : "Login"}
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
