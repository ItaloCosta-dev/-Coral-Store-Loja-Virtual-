import CredCard from "../assets/iconsPayments.svg"
import ArrowUp from "../assets/ArrowUp.svg"

const FooterCards = () => {
    return (
        <div className='bg-gray-950 flex items-center justify-between p-2'>
            <div>
                <h1 className="text-gray-50">© 2022 Coral , Inc.</h1>
            </div>

            <div>
                <img 
                    src={CredCard.src} 
                    alt="" 
                />
            </div>

            <div>
                <button className="flex flex-row items-center gap-2">
                    <p className="text-gray-50">Scroll to top</p>
                    <img src={ArrowUp.src} alt="" />
                </button>
            </div>
            
        </div>
    )
}

export default FooterCards
