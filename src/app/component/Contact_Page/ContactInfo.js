'use client'
import React from 'react'

const ContactInfo = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-12">
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <h2 className="sm:text-3xl text-2xl title-font font-bold text-indigo-800 mt-4 mb-4">Information About us</h2>
        <p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
        <a className="inline-flex items-center">
            <span className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-pink-600 mx-2"></span>
            <span className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-blue-600 mx-2"></span>
            <span className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-cyan-600 mx-2"></span>
        </a>
      </div>
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <h2 className="sm:text-3xl text-2xl title-font font-bold text-indigo-800 mt-4 mb-4">Contact Way</h2>
        <div className='flex'>
        <a className="inline-flex items-center px-3">
            <span className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-pink-600"></span>
          <span className="flex-grow flex flex-col pl-4 pr-4">
            <span className="title-font font-medium text-gray-900">Alper Kamu</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
          </span>
        </a>
        <a className="inline-flex items-center px-3">
            <span className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-cyan-600"></span>
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">Alper Kamu</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
          </span>
        </a>
        </div>
        <div className='flex'>
        <a className="inline-flex items-center mt-5 px-3">
            <span className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-indigo-800"></span>
          <span className="flex-grow flex flex-col pl-4 pr-4">
            <span className="title-font font-medium text-gray-900">Alper Kamu</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
          </span>
        </a>
        <a className="inline-flex items-center mt-5 px-3">
            <span className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-lime-500"></span>
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">Alper Kamu</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
          </span>
        </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ContactInfo
