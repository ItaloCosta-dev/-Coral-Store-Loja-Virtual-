import React from 'react'
import ProductInfo from './ProductInfo'
import PaymentDetails from './PaymentDetails'
import BuyButton from './BuyButton'
import { useRouter } from 'next/router'


const Container = () => {
  const router = useRouter()
  const { productName, productPrice, imageSrc } = router.query
  return (
    <div className='bg-blue-50 p-10 gap-3 flex flex-col'>
      <ProductInfo 
        productName={productName as string}
        productPrice={productPrice as string}
        imageSrc={imageSrc as string}
      />
      <PaymentDetails />
      <BuyButton />
    </div>
  )
}

export default Container
