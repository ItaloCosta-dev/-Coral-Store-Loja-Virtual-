import React from 'react';
import { useRouter } from 'next/router';

const PaymentDetails = () => {
  const router = useRouter();
  const { productName, productPrice } = router.query; // Captura os parâmetros da URL

  return (
    <div className='flex flex-col justify-start gap-3 bg-white p-5 rounded-lg mt-10'>
      <p className='text-sm text-gray-500 font-bold'>Detalhes da Compra</p>
      <div className='flex gap-10 text-sm text-gray-500 justify-between mt-5'>
        <p>{productName}</p>
        <p> {productPrice}</p>
      </div>
      <div className='flex gap-10 text-sm text-gray-500 justify-between'>
        <p>Entrega</p>
        <p>R$ 00,00</p>
      </div>
      <div className='flex gap-10 text-sm text-gray-500 justify-between mt-5 font-bold'>
        <p>Total</p>
        <p>{productPrice}</p>
      </div>
    </div>
  );
};

export default PaymentDetails;
