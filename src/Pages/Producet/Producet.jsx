
import React from 'react';
import { FaEdit, FaEye} from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const Producet = ({coffee,coffees,setCoffee}) => {
    const {_id,photo,name,chef,taste}=coffee;

    const handleDelete =(_id)=>{

        

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:"DELETE"
               
            })
            .then(res => res.json())
            .then(data =>{
              
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const remainder =coffees.filter(coffe => coffe._id !== id);
                      setCoffee(remainder)
                }
              
            })


           
            }
          });
    }



    return (
        <div className='flex items-center gap-x-5 bg-[#F5F4F1] py-2 rounded-lg pr-8'>
            <div>
               <img className='w-[185px] h-[240px] p-5' src={photo} alt="" />
            </div>

             <div>
                <h2 className='text-xl font-bold'>Name:  {name}</h2>
                <h2 className='text-xl font-bold'>Chef:  {chef}</h2>
                <h2 className='text-xl font-bold'>taste: {taste}</h2>
             </div>
             <div className='w-16 space-y-2'> 
                
                 <Link to={`/coffee/${_id}`}>  <p className='bg-[#D2B48C] text-white py-2 hover:bg-violet-600' ><FaEye className='text-3xl mx-auto'></FaEye></p></Link>

                <Link to={`/updateCoffee/${_id}`}> <p className='bg-[#3C393B] text-white py-2 mt-1.5 hover:bg-violet-600' ><FaEdit className='text-3xl mx-auto'></FaEdit></p></Link>
                
                <p onClick={()=>handleDelete(_id)} className='bg-[#EA4744] text-white py-2 hover:bg-violet-600' ><MdDelete className='text-3xl mx-auto'></MdDelete></p>


             </div>
        </div>
    );
};

export default Producet;