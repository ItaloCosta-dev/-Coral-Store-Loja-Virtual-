import React from 'react'

interface ProductInfoProps {
  imageSrc: string
  productName: string
  productPrice: string
}

const ProductInfo:React.FC<ProductInfoProps> = ({ imageSrc, productName, productPrice }) => {

  return (
    <div className='flex flex-row justify-center items-center gap-3 bg-white p-3 rounded-lg'>
      <img src={imageSrc} alt={productName} className='w-24 rounded-lg' />
      <div className='flex flex-col justify-start'>
        <p>{productName}</p>
        <p className='font-bold'>{productPrice}</p>
        <button className='text-red-600 text-xs mt-5'>Excluir</button>
      </div>
    </div>
  )
}

export default ProductInfo
