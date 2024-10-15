import imageProduct from "../assets/image-product.png"
import bagIcon from "../assets/icon-bag-white.svg"

const Topmain = () => {
  return (
    <div className="flex justify-center items-center px-16 py-16 shadow-sm bg-white max-md:px-5">
      <div className="mt-36 max-w-full max-md:mt-10 w-full[1226px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col max-md:ml-0 max-md:w-full w-[61%]">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt10 max-md:max-w-full">
              <h1 className="text-7xl font-light captalize max-md:max-w-full max-md:text-4xl leadind-[54.76px] text-black">
                Coral Store
              </h1>
              <p className="mt-16 text-3xl captalize max-md:mt-10 max-md:max-w-full leadind-[55px]">
              Elegância e Praticidade: Roupas Para Eles e Para Elas
              </p>
              <button className="flex gap-2 justify-between self-start px-7 py-7 mt-20 text-white bg-gray-950 max-md:px-5 max-md:mt-10 transition-transform transform hover:scale-105 rounded-lg">
                <div className="my-auto text-2xl font-black text-center">
                  <img src={bagIcon.src} alt="" /></div>
                <span className="text-3xl captalize cursor-pointer text-gray-50">Veja suas opções abaixo</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
            <img 
              src={imageProduct.src}
              alt="Image product" 
              className="grow w-full aspect-[0.79] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
      )
}

export default Topmain
