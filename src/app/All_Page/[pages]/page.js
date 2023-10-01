'use client'
import React from 'react'
import productApi from '../../Api_Data_Fecth/getProduct'
const page = async({params}) => {
  const wait = await productApi();
  console.log(wait.products[params.pages - 1]);
  
  return (
    <div>
      
    </div>
  )
}

export default page
