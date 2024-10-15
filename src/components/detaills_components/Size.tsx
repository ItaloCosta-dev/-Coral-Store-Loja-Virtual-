import React from 'react'

const Size = () => {
  return (
    <div className='mt-5'>
      <p className='text-2xl'>Tamanhos</p>
      <div className='flex flex-row gap-2 mt-3'>
        <form action="">
            <select name=""  id="escolha" className='border border-gray-400 rounded-sm w-52 h-10 focus:outline-none'>
                <option value="" disabled selected>Escolha uma opção</option>
                <option value="">PP</option>
                <option value="">P</option>
                <option value="">M</option>
                <option value="">G</option>
                <option value="">GG</option>
            </select>
        </form>
      </div>
    </div>
  )
}

export default Size
