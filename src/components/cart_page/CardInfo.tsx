import React from 'react'

const CardInfo = () => {
  return (
    <div className='mt-5 bg-transparent border p-5 rounded-lg'>
      <p className='text-gray-500 text-sm'>Cartão de crédito</p>
      <div className='flex flex-row gap-5 mt-5 bg-transparent border p-3 rounded-lg text-sm text-gray-500'>
        <p>John Doe Jr</p>
        <p>**** **** **** 1234</p>
      </div>
      <div className='flex flex-row gap-5 mt-5 bg-transparent border p-3 rounded-lg text-sm text-gray-500 items-center'>
        <button className='bg-blue-300 p-1 rounded-full'>+</button>
        <p>Adicionar novo cartão</p>
      </div>
    </div>
  )
}

export default CardInfo
