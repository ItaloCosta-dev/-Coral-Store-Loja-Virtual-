import { useProduct } from "../../context/ProductContext"

const Price = () => {
 const { productPrice, quantity, shippingPrice } = useProduct()
 const totalPrice = (productPrice * quantity + shippingPrice).toFixed(2)
  
  return (
    <div className='flex flex-row items-center gap-10'>
      <h1 className='text-xl font-bold text-red-600'>{totalPrice}</h1>
    </div>
  )
}

export default Price
