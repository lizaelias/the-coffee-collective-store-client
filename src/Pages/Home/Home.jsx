import React, { useState } from 'react';
import Banner from './Banner/Banner';
import RewordSection from '../RewordSection/RewordSection';
import TopBanner from '../../Sheard/TopBanner/TopBanner';
import ImagesGallary from '../../Sheard/ImagesGallary/ImagesGallary';
import { FaCoffee } from 'react-icons/fa';
import Producet from '../Producet/Producet';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const loadsCoffees = useLoaderData();
    const [coffees,setCoffee] =useState(loadsCoffees);
    console.log(coffees)

    return (
        <div>
            <Banner></Banner>
             
             <div className='bg-[#ECEAE3]'>
             <RewordSection></RewordSection>
             </div>


              <div className='max-w-6xl mx-auto p-5 mt-10'>
                  <div className='text-center'>
                      <span>--- Sip & Savor ---</span>
                      <h1 className='text-3xl font-bold'>Our Popular Products</h1>
                    
                      <span className='text-xl font-bold bg-[#E3B577] text-white gap-x-2 flex justify-center items-center w-44 mx-auto py-2 mt-4 border border-black'>Add Coffee <p><FaCoffee></FaCoffee></p> </span>
                  </div>
               
               {/* prodects section */}
                 <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 p-5 max-w-6xl mx-auto '>
                   
                {
                    coffees.map(coffee =><Producet 
                    key={coffee._id} 
                    coffee={coffee} 
                    coffees={coffees}
                    setCoffee={setCoffee}
                    ></Producet>)
                }
                 
                  </div>
                
              </div>
             
             {/* <div className='mt-32'>
             <ImagesGallary></ImagesGallary>
             </div> */}
         
           
        </div>
    );
};

export default Home;