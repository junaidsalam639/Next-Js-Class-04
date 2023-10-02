'use client'
import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-indigo-50'>
      <div className="container mx-auto">
        <div className="row grid lg:grid-cols-2 gap-20 md:grid-cols-2 justify-center items-center">
            <div className='container mx-auto'>
                <h1 className='font-bold text-pink-600 mt-3'>Best Furniture For Your Castle</h1>
                <h1 className='text-3xl font-bold mt-3 text-indigo-800'>New Furniture In Colletion Trends In 2020</h1>
                <h1 className='font-medium text-gray-400 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, maxime dolor autem praesentium eius, quaerat laborum perspiciatis voluptate repellat ab beatae minima reiciendis quo quidem nihil! Vitae dolor consequatur sit?</h1>
                <button className='bg-pink-600 text-white px-4 py-2 border-none mt-3'>Shop Now</button>
            </div>
            <div className='flex justify-center items-center w-full'>
                <img src="https://cdn.arhaus.com/product/StandardV2/1003933SFPL_DE230224.jpg?preset=ProductGrande" alt="" className='rounded p-20' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
