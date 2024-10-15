import React from 'react'

const Color = () => {
  return (
    <div className='mt-5'>
      <p className='text-2xl'>Color</p>
      <div className='flex flex-row gap-2 mt-3'>
        <button className='bg-rose-300 rounded-sm w-6 text-transparent'>.</button>
        <button className='bg-blue-300 rounded-sm w-6 text-transparent'>.</button>
        <button className='bg-yellow-300 rounded-sm w-6 text-transparent'>.</button>
      </div>
    </div>
  )
}

export default Color
