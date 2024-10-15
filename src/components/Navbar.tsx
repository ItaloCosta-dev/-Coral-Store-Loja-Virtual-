import LogoCoralSvg from '../assets/logoCoralSvg.svg'

const Navbar = () => {
    return (
        <div className="flex flex-col  bg-white justify-center items-center">
            <img 
                src={LogoCoralSvg.src} alt=""
                className='w-80' 
            />
        </div>
    )
}

export default Navbar
