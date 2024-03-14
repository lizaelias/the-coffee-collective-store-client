
import subbaner from '../../../public/images/more/sub_banner.jpg'
import logo from '../../../public/images/more/logo1.png'

const TopBanner = () => {
    return (
        <div className='relative'>
            <img className='h-28 w-full' src={subbaner}alt="" />

            <div className='flex items-center gap-x-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
               <img className='w-10' src={logo} alt="" />
                <h1 className='text-white font-bold text-4xl' >Espresso Emporium</h1>


            </div>
        </div>
    );
};

export default TopBanner;