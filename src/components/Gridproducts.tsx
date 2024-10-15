    import Img15 from "../assets/15.png";
    import Img14 from "../assets/14.png";
    import Img13 from "../assets/13.png";
    import Img04 from "../assets/04.png";
    import Img11 from "../assets/11.png";
    import Img12 from "../assets/12.png";
    import Img17 from "../assets/17.png";
    import Img16 from "../assets/16.png";
    import Img18 from "../assets/18.png";
    import Img01 from "../assets/01.png";
    import Img03 from "../assets/03.png";
    import Img02 from "../assets/02.png";
    import Img20 from "../assets/20.png";
    import { useHoverBuyButton } from "../hooks";
    import { useRouter } from 'next/router'

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
        const router = useRouter()

        const handleBuyNow = () => {
            router.push(`product-page?productName=${encodeURIComponent(productName)}&imageSrc=${encodeURIComponent(imageSrc)}&productPrice=${encodeURIComponent(productPrice)}`)
        }

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
            <button className="absolute bottom-0 left-0 w-full bg-orange-500 text-white py-2 text-center transition-opacity" onClick={handleBuyNow}>
                Comprar
            </button>
            )}
        </div>
        <p className="mt-6 font-semibold text-black">{productName}</p>
        <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
            <p className="text-gray-600">{productCategory}</p>
            <p className="font-semibold text-right text-black">
                {productPrice.toLocaleString('pt-Br', { style:'currency', currency:'BRL' })}
            </p>
        </div>
        </div>
    );
    };

    const Gridproducts = () => {
    return (
        <div className="flex flex-col p-10">
        <h1 className="self-center text-5xl font-medium text-center text-black capitalize max-md:max-w-ful max-md:text-4xl">
        Estilo e Conforto para Todos os Gêneros
        </h1>

        <div className="flex ga-5 justify-between mt-9 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-1 justify-between px-4 py1.5 text-white whitenospace-nowrap bg-gray-800 mr-5 items-center"></div>
        </div>
        <div className="px-5 mt-9 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img15.src}
                    productName="Calça feminina adicolor rosa"
                    productCategory="Feminino"
                    productPrice={69.90}
                />
                </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-px text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img14.src}
                    productName="Mochila nike feminina rosa"
                    productCategory="Feminino"
                    productPrice={129.90}
                />
                </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py05 text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img13.src}
                    productName="Cachecol colorido"
                    productCategory="Feminino"
                    productPrice={89.90}
                />
                </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py05 text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img11.src}
                    productName="Vestido verde longo"
                    productCategory="Feminino"
                    productPrice={149.90}
                />
                </div>
            </div>
            </div>
        </div>

        <div className="px-5 mt-6 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
                <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-x font-semibold text-base text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                    <ProductCard
                    imageSrc={Img12.src}
                    productName="Têsnis Nike Air Zoom Pegasus"
                    productCategory="Unissex"
                    productPrice={129.90}
                    />
                </div>
                </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md-full">
                <div className="flex flex-col grow py-0.5 capitalize max-md:mt-6">
                <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                    <ProductCard
                    imageSrc={Img04.src}
                    productName="Casaco masculino amarelo"
                    productCategory="Mesculino"
                    productPrice={149.90}
                    />
                </div>
                </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md-full">
                <div className="flex flex-col grow py-0.5 capitalize max-md:mt-6">
                <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                    <ProductCard
                    imageSrc={Img17.src}
                    productName="Agasalho nike azul"
                    productCategory="Masculino"
                    productPrice={119.90}
                    />
                </div>
                </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md-full">
                <div className="flex flex-col grow py-0.5 capitalize max-md:mt-6">
                <div className="flex relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-white uppercase whitespace-nowrap max-md:pr-5 aspect-[0.78]">
                    <ProductCard
                    imageSrc={Img16.src}
                    productName="Óculos nike unissex"
                    productCategory="Unissex"
                    productPrice={149.90}
                    />
                </div>
                </div>
            </div>

            </div>
        </div>

        <div className="px-5 mt-9 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img18.src}
                    productName="Vestido feminino marrom"
                    productCategory="Feminino"
                    productPrice={119.90}
                />
                </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-px text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img01.src}
                    productName="Jaqueta masculina azul marinho"
                    productCategory="Masculino"
                    productPrice={149.90}
                />
                </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py05 text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img03.src}
                    productName="Casaco feminino branco"
                    productCategory="Feminino"
                    productPrice={119.90}
                />
                </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py05 text-base capitalize max-md:mt-6">
                <ProductCard
                    imageSrc={Img02.src}
                    productName="Vestido vermelho florido"
                    productCategory="Masculino"
                    productPrice={169.90}
                />
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };
    export default Gridproducts;
