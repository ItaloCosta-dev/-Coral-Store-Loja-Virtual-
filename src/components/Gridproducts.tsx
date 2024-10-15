import { useProduct } from "@/context/ProductContext";
import { useHoverBuyButton } from "../hooks";
import { useRouter } from "next/router";

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  productCategory: string;
  productPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  productCategory,
  productPrice,
}) => {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push(
      `product-page?productName=${encodeURIComponent(
        productName
      )}&imageSrc=${encodeURIComponent(
        imageSrc
      )}&productPrice=${encodeURIComponent(productPrice)}`
    );
  };

  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverBuyButton();

  return (
    <div
      className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative group">
        <img
          src={imageSrc}
          alt={productName}
          className="w-full aspect-[0.78] cursor-pointer transition-transform transform hover:scale-105 rounded-lg"
        />
        {isHovered && (
          <button
            className="absolute bottom-0 left-0 w-full bg-orange-500 text-white py-2 text-center transition-opacity"
            onClick={handleBuyNow}
          >
            Comprar
          </button>
        )}
      </div>
      <p className="mt-6 font-semibold text-black">{productName}</p>
      <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
        <p className="text-gray-600">{productCategory}</p>
        <p className="font-semibold text-right text-black">
          {productPrice.toLocaleString("pt-Br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </div>
  );
};

const Gridproducts = () => {
  const { products } = useProduct();

  return (
    <div className="flex flex-col p-10">
      <h1 className="selt-center text-5xl font-medium text-center text-black capitalize max-md:max-w-full max-md:text-4xl">
        Estilo e conforto para Homens e Mulheres
      </h1>

      <div className="px-5 mt-9 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product, index) => (
            <div className="flex flex-col w-3/12 max-md:w-full key={index}">
              <ProductCard
                imageSrc={product.imageSrc}
                productName={product.productName}
                productCategory={product.productCategory}
                productPrice={product.productPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gridproducts