
import one from '../../../public/images/icons/one.png'
import tow from '../../../public/images/icons/tow.png'
import three from '../../../public/images/icons/three.png'
import fore from '../../../public/images/icons/for.png'


const RewordSection = () => {
    return (
        <div className="max-w-6xl mx-auto py-7 px-5  ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5">
                   <div className='space-y-2'>
                     <img src={one} alt="" />
                    <h2 className='text-xl font-semibold'>Awesome Aroma</h2>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                   </div>
                   <div className='space-y-2'>
                     <img src={tow} alt="" />
                    <h2 className='text-xl font-semibold'>High Quality</h2>
                    <p>We served the coffee to you maintaining the best quality</p>
                   </div>
                   <div className='space-y-2'>
                     <img src={three} alt="" />
                    <h2 className='text-xl font-semibold'>Pure Grades</h2>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                   </div>
                   <div className='space-y-2'>
                     <img src={fore} alt="" />
                    <h2 className='text-xl font-semibold'>Proper Roasting</h2>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                   </div>
            </div>
            
           
        </div>
    );
};

export default RewordSection;