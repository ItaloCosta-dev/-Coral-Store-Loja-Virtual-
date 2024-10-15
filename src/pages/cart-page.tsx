import CardInfo from '@/components/cart_page/CardInfo'
import Container from '@/components/cart_page/Container'
import TitlePage from '@/components/cart_page/TitlePage'
import React from 'react'

function cartPage() {
  return (
    <div className="flex overflow-hidden flex-col">
      
      <div className='flex flex-row  items center gap-10 mt-32 justify-evenly'>
        <div> 
          <TitlePage />
          <CardInfo />
        </div>      
        <Container />
      </div>
    </div>
  )
}

export default cartPage
