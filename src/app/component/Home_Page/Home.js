'use client'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className="container mx-auto px-20">
        <div className="row grid lg:grid-cols-2 gap-20 h-screen justify-center items-center">
            <div>
                <h1 className='font-bold text-pink-600'>Best Furniture For Your Castle</h1>
                <h1 className='text-3xl font-bold'>New Furniture In Colletion Trens In 2020</h1>
                <h1 className='font-medium text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, maxime dolor autem praesentium eius, quaerat laborum perspiciatis voluptate repellat ab beatae minima reiciendis quo quidem nihil! Vitae dolor consequatur sit?</h1>
                <button className='bg-pink-600 text-white px-4 py-2 border-none mt-3'>Shop Now</button>
            </div>
            <div className='flex justify-center items-center'>
                <img src="https://images.thdstatic.com/productImages/01c0a04e-0777-4d71-81ba-a4cd2fae7246/svn/blue-sofas-couches-p-q202200649-64_600.jpg" alt="" className='w-96' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
