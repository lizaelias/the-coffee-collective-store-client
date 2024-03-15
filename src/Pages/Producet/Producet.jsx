
import React from 'react';
import { FaEdit, FaEye} from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

import cap from '../../../public/images/one.png'

const Producet = () => {
    return (
        <div className='flex items-center gap-x-5 bg-[#F5F4F1] p-2 rounded-lg'>
            <div>
               <img src={cap} alt="" />
            </div>

             <div>
                <h2 className='text-xl font-bold'>Name:Espresson Coffee</h2>
                <h2 className='text-xl font-bold'>Chef:Msc Morisha</h2>
                <h2 className='text-xl font-bold'>Price:890 tK</h2>
             </div>
             <div className='w-16 space-y-2'> 
                 <p className='bg-[#D2B48C] text-white py-2 hover:bg-violet-600' ><FaEye className='text-3xl mx-auto'></FaEye></p>
                 <p className='bg-[#3C393B] text-white py-2 hover:bg-violet-600' ><FaEdit className='text-3xl mx-auto'></FaEdit></p>
                <p className='bg-[#EA4744] text-white py-2 hover:bg-violet-600' ><MdDelete className='text-3xl mx-auto'></MdDelete></p>


             </div>
        </div>
    );
};

export default Producet;