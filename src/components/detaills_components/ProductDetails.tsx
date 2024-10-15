import React from 'react'
import Price from './Price'
import Color from './Color'
import Size from './Size'
import Amount from './Amount'
import Delivery from './Delivery'
import Return from './Return'
import Share from './Share'
import Payments from './Payments'
import { useRouter } from 'next/router'


const ProductDetails = () => {
  const router = useRouter()
  const { imageSrc, productName, productPrice } = router.query

  return (
    <div className='flex flex-row justify-center items center gap-10'>
        <div>
            <img src={imageSrc as string} alt=""  className=''/>
        </div>
        <div className='flex flex-col'>
          <Price />
          <Color />
          <Size />
          <Amount productName={productName as string} productPrice={productPrice as string} imageSrc={imageSrc as string}/>
          <Delivery />
          <Return />
          <Share />
          <Payments />
        </div>
    </div>
  )
}

export default ProductDetails
