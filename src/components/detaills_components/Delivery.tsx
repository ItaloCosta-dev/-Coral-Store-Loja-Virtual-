import React from 'react'

const Delivery = () => {
  return (
    <table className='mt-3'>
      <thead>
        <tr>
          <th className='text-gray-400 font-normal text-left'>ENTREGA</th>
          <th className='text-gray-400 font-normal text-left'>DIAS</th>
          <th className='text-gray-400 font-normal text-left'>VALOR</th>
        </tr>
      </thead>
      <tbody>
        <tr className='hover:bg-gray-200 cursor-pointer mt-1'>
          <td>Entrega padrão</td>
          <td>1-4 dias úteis</td>
          <td>R$ 4,99</td>
        </tr>
        <tr className='hover:bg-gray-200 cursor-pointer mt-1'>
          <td>Entrega Express</td>
          <td>24h</td>
          <td>R$ 9,99</td>
        </tr>
        <tr className='hover:bg-gray-200 cursor-pointer mt-1'>
          <td>Retirar na loja</td>
          <td>1-7 dias úteis</td>
          <td>Grátis</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Delivery
