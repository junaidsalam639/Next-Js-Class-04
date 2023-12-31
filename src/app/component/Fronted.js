import React from 'react'

const Fronted = () => {
  return (
    <div>
       <div className="container mx-auto">
                <div className="row grid lg:grid-cols-2 gap-40  bg-indigo-50">
                    <div className='mt-20 lg:mb-20 flex flex-col items-center'>
                        <h1 className='text-4xl font-bold mb-3 text-indigo-800'>Shop Grid Default</h1>
                        <p>Home . Pages .<span className='text-pink-600 font-bold'> Shop Grid Default</span></p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="row grid lg:grid-cols-2 gap-40">
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl font-bold mb-3 mt-10 px-6 text-indigo-900'>Ecommerce Acceories & Fashion item</h1>
                        <p>About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className='flex items-center flex-wrap mt-3 mb-3 text-center'>
                        <label htmlFor="per" className='px-2 text-md font-bold text-indigo-800'>Per Page: </label>
                        <input type="text" className='border-2 border-indigo-800 rounded-sm outline-none pl-2 w-20 my-2' placeholder='Page' />
                        <label htmlFor="per" className='px-2 text-md font-bold text-indigo-800'>Sort By: </label>
                        <input type="text" className='border-2 border-indigo-800 rounded-sm outline-none pl-2 w-24 my-2' placeholder='Sort' />
                        <label htmlFor="per" className='px-2 text-md font-bold text-indigo-800'>View: </label>
                        <input type="text" className='border-2 border-indigo-800 rounded-sm outline-none pl-2 w-28 my-2' placeholder='View' />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Fronted
