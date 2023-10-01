import { SearchOutlined } from '@ant-design/icons'
import Search from 'antd/es/input/Search'
import Link from 'next/link'

const Nav = () => {
    return (
        <div>
            <header class="text-gray-600 body-font pt-10">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span class="ml-3 text-2xl font-medium">Hekto</span>
                    </a>
                    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href={'/'} class="mr-5 hover:text-gray-900 text-gray-600 cursor-pointer px-1 font-medium" >Home</Link>
                        <a class="mr-5 hover:text-gray-900 text-gray-600 cursor-pointer px-1 font-medium">Pages</a>
                        <Link href={'/All_Page/GridPage'} class="mr-5 hover:text-gray-900 text-gray-600 cursor-pointer px-1 font-medium" >Products</Link>
                        <a class="mr-5 hover:text-gray-900 text-gray-600 cursor-pointer px-1 font-medium">Blogs</a>
                        <a class="mr-5 hover:text-gray-900 text-gray-600 cursor-pointer px-1 font-medium">Shops</a>
                        <a class="mr-5 hover:text-gray-900 text-gray-600 cursor-pointer px-1 font-medium">Contact</a>
                    </nav>
                    <button class="inline-flex items-center">
                        <div className="border-2 border-indigo-100 rounded-md">
                            <input type="email" id="email" name="email" placeholder='Search...' className='border-none outline-none px-2' /><SearchOutlined className='text-2xl text-white text-center p-1 px-2 bg-pink-600' />
                        </div>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Nav
