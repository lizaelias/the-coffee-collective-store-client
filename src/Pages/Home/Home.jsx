import React from 'react';
import Banner from './Banner/Banner';
import RewordSection from '../RewordSection/RewordSection';
import TopBanner from '../../Sheard/TopBanner/TopBanner';
import ImagesGallary from '../../Sheard/ImagesGallary/ImagesGallary';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
             
             <div className='bg-[#ECEAE3]'>
             <RewordSection></RewordSection>
             </div>
             
             <div className='mt-32'>
             <ImagesGallary></ImagesGallary>
             </div>
         
           
        </div>
    );
};

export default Home;