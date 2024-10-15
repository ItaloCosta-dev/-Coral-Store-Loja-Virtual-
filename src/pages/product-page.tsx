import NavigationTabs from "@/components/detaills_components/NavigationTabs";
import ProductName from "@/components/detaills_components/ProductName";
import DividerDetails from "../assets/divider.svg"
import ProductDetails from "@/components/detaills_components/ProductDetails";
import { useRouter } from "next/router";

    const ProductPage = () => {
        const router = useRouter()
        const { productName } = router.query
    return (
        <div className="flex overflow-hidden flex-col bg-white">
            <ProductName  productName={productName as string}/>
            <NavigationTabs />
            <img src={DividerDetails.src} alt="" className="p-16"/>
            <ProductDetails />
            
        </div>
    );
    };

    export default ProductPage;
