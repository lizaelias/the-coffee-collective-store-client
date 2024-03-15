

import RectangleOne from '../../../public/images/cups/Rectangle_9.png';
import RectangleTow from '../../../public/images/cups/Rectangle_10.png';
 import RectangleThree from '../../../public/images/cups/Rectangle_11.png';
import RectangleFor from '../../../public/images/cups/Rectangle_12.png';
import RectangleFive from '../../../public/images/cups/Rectangle_13.png';
import RectangleSix from '../../../public/images/cups/Rectangle_14.png';
import RectangleSeven from '../../../public/images/cups/Rectangle_15.png';
import RectangleEight from '../../../public/images/cups/Rectangle_16.png';



const ImagesGallary = () => {
    return (
        <div className='max-w-6xl mx-auto p-5'>
            <div className='text-center'>
                <p>Follow Us Now</p>
                <h1 className='text-3xl font-bold'>Follow on Instagram</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 mb-10'>
                <img className='w-full' src={RectangleOne} alt="" />
                <img className='w-full' src={RectangleTow} alt="" />
                <img className='w-full' src={RectangleThree} alt="" />
                <img  className='w-full'src={RectangleFor} alt="" />
                <img className='w-full' src={RectangleFive} alt="" />
                <img className='w-full' src={RectangleSix} alt="" />
                <img className='w-full' src={RectangleSeven} alt="" />
                <img className='w-full' src={RectangleEight} alt="" /> 
                
            </div>
            
        </div>
    );
};

export default ImagesGallary;