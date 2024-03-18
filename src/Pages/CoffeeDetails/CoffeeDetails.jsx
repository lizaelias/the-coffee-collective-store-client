import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";





const CoffeeDetails = () => {
    const Coffeedetails = useLoaderData()

    const {name,chef,supplier,taste,category,details,photo} =Coffeedetails;

    return (

    <div>

          <div className='absolute top-32 left-5 right-0'>
            <Link to='/'><h1 className='text-xl font-medium underline hover:text-green-600 flex gap-x-2 items-center'> <span><IoMdArrowRoundBack></IoMdArrowRoundBack></span>Back to home</h1></Link>
         </div>
             
        <div className="flex gap-x-6 items-center bg-[#F4F3F0] max-w-6xl mx-auto p-10 mt-32 rounded-lg mb-40">
            <div>
            <img className="w-[600px]" src={photo} alt="" />
            </div>
            <div className="space-y-1 p-5">
            <h1 className="text-3xl font-bold mb-3 text-red-600">Niceties</h1>
            <h1 className="text-2xl"><span className="font-bold">Name: </span><span>{name}</span></h1>
            <h1 className="text-2xl"><span className="font-bold">chef: </span><span>{chef}</span></h1>
            <h1 className="text-2xl"><span className="font-bold">taste: </span><span>{taste}</span></h1>
            <h1 className="text-2xl"><span className="font-bold">supplier: </span><span>{supplier}</span></h1>
            <h1 className="text-2xl"><span className="font-bold">category: </span><span>{category}</span></h1>
            <h1 className="text-2xl"><span className="font-bold">details: </span><span>{details}</span></h1>

            </div>
        </div>
     </div>

    );
};

export default CoffeeDetails;