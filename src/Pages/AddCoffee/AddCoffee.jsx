import { Form, Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { IoMdArrowRoundBack } from "react-icons/io";
import { data } from "autoprefixer";
import Swal from "sweetalert2";



const AddCoffee = () => {


       const handleAddCoffee = e =>{

          e.preventDefault()
          const form =e.target;
          const name =form.name.value;
          const chef = form.chef.value;
          const supplier =form.supplier.value;
          const taste = form.taste.value;
          const category =form.category.value;
          const details =form.details.value;
          const photo = form.photo.value;

          const newCoffee ={
            name,chef,supplier,taste,category,details,photo
          }
         
         console.log(newCoffee)

         fetch('http://localhost:5000/newCoffee',{
             method: 'POST',
             headers:{
               'content-type':'application/json'
             },
             body:JSON.stringify(newCoffee)

         })
         .then(res =>res.json())
         .then(data =>{
            console.log(data)
            if(data.insertedId){
               
              Swal.fire({
              title: 'Success',
              text: 'AddCoffee has been saved',
              icon: "success",
              confirmButtonText: 'Done'
         
              })

            }
         })


       }


    return (
      <div className="bg-slate-200 py-7 px-4 relative">

            <div className='absolute top-5 left-5 right-0'>
                <Link to='/'><h1 className='text-xl font-medium underline hover:text-green-600 flex gap-x-2 items-center'> <span><IoMdArrowRoundBack></IoMdArrowRoundBack></span>Back to home</h1></Link>
             </div>
             
             
              <div className="text-center space-y-2 ">
                 <h1 className="text-3xl font-bold mt-10">Add New Coffee</h1>
                 <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br></br> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br></br> to using Content here.</p>

              </div>
            <form onSubmit={handleAddCoffee} className="max-w-5xl mx-auto p-5">
            <div className="flex gap-4">
                 <div className="w-1/2 border mx-auto mt-3">
                 <div class="w-full">
                 <label class="label">
                  <span class="label-text">Name</span>
                 </label>
                 <input  type="text" name="name" placeholder="coffee name" class="input input-bordered w-full" required />
                </div>
                 </div>

                <div className="w-1/2 border mx-auto mt-3">
               <div class="w-full">
               <label class="label">
               <span class="label-text">Chef</span>
               </label>
               <input  type="text" placeholder="Chef" name="chef" class="input input-bordered w-full" required />
               </div>
               </div>
            </div>
            <div className="flex gap-4">
                 <div className="w-1/2 border mx-auto mt-3">
                 <div class="w-full">
                 <label class="label">
                  <span class="label-text">Supplier</span>
                 </label>
                 <input  type="text" placeholder="Supplier" name="supplier" class="input input-bordered w-full" required />
                </div>
                 </div>

                <div className="w-1/2 border mx-auto mt-3">
               <div class="w-full">
               <label class="label">
               <span class="label-text">Taste</span>
               </label>
               <input  type="text" placeholder="Taste" name="taste" class="input input-bordered w-full" required />
               </div>
               </div>
            </div>
            <div className="flex gap-4">
                 <div className="w-1/2 border mx-auto mt-3">
                 <div class="w-full">
                 <label class="label">
                  <span class="label-text">Category</span>
                 </label>
                 <input  type="text" placeholder="Category" name="category" class="input input-bordered w-full" required />
                </div>
                 </div>

                <div className="w-1/2 border mx-auto mt-3">
               <div class="w-full">
               <label class="label">
               <span class="label-text">Details</span>
               </label>
               <input  type="Details" placeholder="Details" name="details" class="input input-bordered w-full" required />
               </div>
               </div>
            </div>

            <div className="border mt-3">
             
               <label class="label">
               <span class="label-text">Photo</span>
               </label>
               <input  type="text" placeholder="photo url" name="photo" class="input input-bordered w-full" required />
               </div>
               <button className=" bg-[#D2B48C] text-xl font-medium w-full mt-10 py-4 rounded-lg hover:bg-violet-600">Add Coffee</button>
               
            
           </form>


           <Footer></Footer>
      </div>

    );
};

export default AddCoffee;

