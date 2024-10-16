interface ProductInfoProps {
  imageSrc: string
  productName: string
  productPrice: string
  quantity: number
}

const ProductInfo:React.FC<ProductInfoProps> = ({ imageSrc, productName, productPrice, quantity }) => {

  return (
    <div>
      {Array.from({ length: quantity }).map((_, index) => (
        <div key={index} className="flex flex-row justify-center items-center gap-3 bg-white p-3 rounded-lg mb-3">
          <img src={imageSrc} alt={productName} className="w-24 rounded-lg" />
          <div className="flex flex-col justify-start">
            <p>{productName}</p>
            <p className="font-bold">{productPrice}</p>
            <button className="text-red-500 text-xs mt-5">Excluir</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductInfo
