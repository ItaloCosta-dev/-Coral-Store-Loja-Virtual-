import React from 'react'

interface ProductNameProps {
  productName: string
}

const ProductName: React.FC<ProductNameProps> = ({ productName }) => {
  return (
    <section className='px-20 pt-28'>
        <h1 className='text-5xl text-zinc-800 font-semibold'>
            {productName}
        </h1>
    </section>

  )
}

export default ProductName