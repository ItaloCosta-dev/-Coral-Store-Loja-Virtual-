import { useProduct } from "../../context/ProductContext"; 
import carrinho from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface AmountProps {
  productName: string;
  productPrice: number;
  imageSrc: string
}

const Amount: React.FC<AmountProps> = ({ productName, productPrice, imageSrc }) => {
  const router = useRouter();
  const { quantity, setQuantity, setProductName, setProductPrice } = useProduct()

  useEffect(() => {
    setProductPrice(productPrice)
    setProductName(productName)
  }, [productPrice, productName, setProductName])

  const calculateTotalPrice = () => {
    return (productPrice* quantity).toFixed(2)
  }

  const handleQuantityChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value)
    setQuantity(Number(event.target.value))
    setProductPrice(productPrice)
  }

  const handleAddToCart = () => {
    const totalPrice = calculateTotalPrice()
    setProductName(productName)
    router.push(`/cart-page?productName=${encodeURIComponent(productName)}&productPrice=${encodeURIComponent(totalPrice)}&imageSrc=${encodeURIComponent(imageSrc)}`);
  };

  return (
    <div className='mt-5 flex flex-row gap-3'>
      <form action="">
        <input type="number" className='border border-gray-400 p-3 w-14 text-center rounded-sm focus:outline-none' value={quantity} onChange={handleQuantityChange} min={1}/>
      </form>

      <button
        className='p-3 bg-green-900 text-white font-semibold rounded-sm flex justify-center items-center gap-2'
        onClick={handleAddToCart}
      >
        <img src={carrinho.src} alt="" />
        Adicionar ao carrinho
      </button>

      <button className='p-3 bg-transparent text-green-900 font-semibold rounded-sm flex justify-center items-center gap-2 border border-green-900'>
        <img src={heart.src} alt="" />
        Favoritar
      </button>
    </div>
  );
};

export default Amount;
