import CardInfo from '@/components/cart_page/CardInfo'
import Container from '@/components/cart_page/Container'
import TitlePage from '@/components/cart_page/TitlePage'
import ProductInfo from '../components/cart_page/ProductInfo';
import { useProduct } from '@/context/ProductContext';


function cartPage() {
  const { productName, productPrice, imageSrc, quantity } = useProduct()

  return (
    <div className="flex overflow-hidden flex-col">
      
      <div className='flex flex-row  items center gap-10 mt-32 justify-evenly'>
        <div> 
          <TitlePage />
          <CardInfo />
        </div>      
        <Container />
        <ProductInfo 
          productName={productName}
          productPrice={productPrice}
          imageSrc={imageSrc}
          quantity={quantity}
        />
      </div>
    </div>
  )
}

export default cartPage
