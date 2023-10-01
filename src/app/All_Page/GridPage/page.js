import NavbarOne from '@/app/component/Home_Page/NavbarOne'
import Nav from '@/app/component/Nav'

const page = () => {
    return (
        <>
            <NavbarOne />
            <Nav />
            <div className="container mx-auto">
                <div className="row grid lg:grid-cols-2 gap-40  bg-indigo-300">
                    <div className='mt-20 lg:mb-20 flex flex-col items-center'>
                        <h1 className='text-4xl font-bold mb-3'>Shop Grid Default</h1>
                        <p>Home . Pages .<span className='text-pink-600 font-bold'> Shop Grid Default</span></p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="row grid lg:grid-cols-2 gap-40">
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl font-bold mb-3 mt-10'>Ecommerce Acceories & Fashion item</h1>
                        <p>About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className='flex items-center mt-3 mb-3'>
                        <label htmlFor="per" className='px-2'>Per Page: </label>
                        <input type="text" className='border-2 border-indigo-300 outline-none pl-2 w-20' />
                        <label htmlFor="per" className='px-2'>Sort By: </label>
                        <input type="text" className='border-2 border-indigo-300 outline-none pl-2 w-24' />
                        <label htmlFor="per" className='px-2'>View: </label>
                        <input type="text" className='border-2 border-indigo-300 outline-none pl-2 w-28' />
                    </div>
                </div>
            </div>

<div className="container mx-auto">
    <div className="row flex flex-row justify-around items-center flex-wrap w-full">
                <div class="w-80 rounded overflow-hidden">
                    <img class="w-80 h-64" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s73-pai-163-mockup.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3dd8a4c6b0e10803b6e5d21ca7d74cd5" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div> 
                </div>
                <div class="w-80 rounded overflow-hidden">
                    <img class="w-80 h-64" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s73-pai-163-mockup.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3dd8a4c6b0e10803b6e5d21ca7d74cd5" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div> 
                </div>
                <div class="w-80 rounded overflow-hidden">
                    <img class="w-80 h-64" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s73-pai-163-mockup.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3dd8a4c6b0e10803b6e5d21ca7d74cd5" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div> 
                </div>
                <div class="w-80 rounded overflow-hidden">
                    <img class="w-80 h-64" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s73-pai-163-mockup.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3dd8a4c6b0e10803b6e5d21ca7d74cd5" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div> 
                </div>

    </div>
</div>


        </>
    )
}

export default page
