'use client'
import { getProduct } from "@/app/Api_Data_Fecth/getProduct";
import { useState } from "react";

const FeatureProduct = () => {


    const [cards, setCards] = useState([]);
    async function getData(){
        const wait = await getProduct();
        const cardElements = wait.products.map((user, index) => (
            <div key={index} className="card w-80 h-full shadow-md border-2 border-gray-200 p-5 rounded-md mt-4 mb-4">
                <img src={user.thumbnail} alt={user.name} className='w-80 h-56 rounded-md shadow-md' />
                <div className="card-info pt-4">
                    <h2><b>Category : </b> {user.category}</h2>
                    <h2><b>Price : </b> {user.price}</h2>
                    <h2><b>Title : </b> {user.title}</h2>
                    <h2><b>Description : </b> {user.description}</h2>
                </div>
            </div>
        ));
        setCards(cardElements);
    }
    getData();

  return (
    <div>
         <div className="card-container flex justify-around items-center flex-wrap w-full">
                {cards}
            </div>
      </div>
  )
}

export default FeatureProduct
