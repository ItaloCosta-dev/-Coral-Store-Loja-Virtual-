import React from 'react';
import { useProduct } from "../../context/ProductContext"; 

const PaymentDetails = () => {
  const { productName, productPrice, quantity, shippingPrice } = useProduct(); 
  const totalPrice = (productPrice * quantity + shippingPrice).toFixed(2); 

  return (
    <div className='flex flex-col justify-start gap-3 bg-white p-5 rounded-lg mt-10'>
      <p className='text-sm text-gray-500 font-bold'>Detalhes da Compra</p>
      <div className='flex gap-10 text-sm text-gray-500 justify-between mt-5'>
        <p>{productName}</p>
        <p>R$ {productPrice.toFixed(2)}</p>
      </div>
      <div className='flex gap-10 text-sm text-gray-500 justify-between'>
        <p>Entrega</p>
        <p>R$ {shippingPrice.toFixed(2)}</p>
      </div>
      <div className='flex gap-10 text-sm text-gray-500 justify-between mt-5 font-bold'>
        <p>Total</p>
        <p>R$ {totalPrice}</p>
      </div>
    </div>
  );
};

export default PaymentDetails;
