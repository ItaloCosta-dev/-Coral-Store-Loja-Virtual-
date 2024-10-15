import React from 'react'
import { useProduct } from "../../context/ProductContext"


const Price = () => {
 const { productPrice, quantity } = useProduct()
 const totalPrice = (productPrice * quantity).toFixed(2)
  
  return (
    <div className='flex flex-row items-center gap-10'>
      <h1 className='text-xl font-bold text-red-600'>{totalPrice}</h1>
      <button className='bg-red-600 p-1 rounded font-bold text-white'>50%</button>
    </div>
  )
}

export default Price
