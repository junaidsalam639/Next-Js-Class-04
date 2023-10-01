import React from 'react'
import { MailOutlined , PhoneOutlined , SmileOutlined , HeartOutlined , ShoppingCartOutlined } from '@ant-design/icons'
const Shop = () => {
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="w-96 h-64 object-cover object-center rounded mt-3" src="https://i.pinimg.com/1200x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 class="text-indigo-800 text-3xl title-font font-bold mb-1 mt-3">Accumsain Tincidunt</h1>
                            <p class="text-pink-500 text-base font-bold mt-3">
                                $26.00 <del>$42.00</del>
                            </p>

                            <p class="leading-relaxed mt-3">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.</p>

                            <div class="flex mt-3">
                            <SmileOutlined className='text-2xl text-gray-500 text-center pl-2 pr-3' />
                            <HeartOutlined  className='text-2xl text-gray-500 text-center pl-2 pr-3'/>
                            <ShoppingCartOutlined className='text-2xl text-gray-500 text-center pl-2 pr-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shop
