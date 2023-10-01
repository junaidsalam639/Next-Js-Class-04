'use client'
import React , { useState } from 'react'
import productApi from '@/app/Api_Data_Fecth/getProduct'
import Link from 'next/link';

const FeatureProduct = () => {
    const [cards, setCards] = useState([]);
    const fecthData = async () => {
        const data = await productApi();
        const cardElements = data.products.map((user, index) => (
            <Link key={index} href={`/All_Page${user.id}`}>
            <div className="card w-80 h-full shadow-md border-2 border-gray-200 p-5 rounded-md mt-4 mb-4">
                <img src={user.thumbnail} alt={user.name} className='w-80 h-56 rounded-md shadow-md' />
                <div className="card-info pt-4">
                    <h2><b>Category : </b> {user.category}</h2>
                    <h2><b>Price : </b> {user.price}</h2>
                    <h2><b>Title : </b> {user.title}</h2>
                    <h2><b>Description : </b> {user.description}</h2>
                </div>
            </div>
            </Link>
        ));
        setCards(cardElements);
    }
    fecthData()
    
  return (
    <div>
       <div className="card-container flex justify-around items-center flex-wrap w-full">
                {cards}
            </div>
    </div>
  )
}

export default FeatureProduct
