'use client'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import signout from '@/app/config/signout'
import { AuthContext } from '@/app/context/AuthContext'
import { MailOutlined , PhoneOutlined , SmileOutlined , HeartOutlined , ShoppingCartOutlined } from '@ant-design/icons'
import ProtectedContainer from '../ProtectedContainer'
const NavbarOne = () => {
    const { user } = useContext(AuthContext)
    const router = useRouter()
    
    const handleOnClickLoginBtn = () => {
      if (!user) {
          router.push('/login_Singup_Page/login')
      } else {
        signout();
        router.push('/')
      }
  }

    return (
<ProtectedContainer>
    <div>
      <header className="text-gray-600 body-font bg-indigo-950 fixed w-full">
  <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center py-2">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 font-medium text-white"><MailOutlined className='text-2xl text-white text-center pl-2 pr-3' />{user ? user.email : 'abc@gmail.com'}</span>
      <span className="ml-3 font-medium text-white"><PhoneOutlined className='text-2xl text-white text-center pl-2 pr-3' />021-0202-2002</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 px-3 font-bold text-white cursor-pointer rounded-md text-center">English</a>
      <a className="mr-5 px-3 font-bold text-white cursor-pointer rounded-md">USD</a>
      <a className="mr-5 px-3 font-bold text-white cursor-pointer rounded-md" onClick={handleOnClickLoginBtn}>{user ? 'Logout' : "Login"}<SmileOutlined className='text-2xl text-white text-center pl-2 pr-3' /></a>
      <a className="mr-5 px-3 font-bold text-white cursor-pointer rounded-md">Wishlist<HeartOutlined  className='text-2xl text-white text-center pl-2 pr-3'/></a>
      <a className="mr-5 px-3 font-bold text-white cursor-pointer rounded-md"><ShoppingCartOutlined className='text-2xl text-white text-center pl-2 pr-3' /></a>
    </nav>
  </div>
</header>
    </div>
</ProtectedContainer>
  )
}

export default NavbarOne
