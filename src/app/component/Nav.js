'use client'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Search from 'antd/es/input/Search'

const Nav = () => {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span class="ml-3 text-2xl font-medium">Hekto</span>
                    </a>
                    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-900">Home</a>
                        <a class="mr-5 hover:text-gray-900">Pages</a>
                        <a class="mr-5 hover:text-gray-900">Products</a>
                        <a class="mr-5 hover:text-gray-900">Blogs</a>
                        <a class="mr-5 hover:text-gray-900">Shops</a>
                        <a class="mr-5 hover:text-gray-900">Contact</a>
                    </nav>
                    <button class="inline-flex items-center">
                        <div className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  rounded-md outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">
                            <input type="email" id="email" name="email" className='border-none outline-none px-2' /><SearchOutlined className='text-3xl text-white text-center pl-2 bg-pink-600' />
                        </div>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Nav
