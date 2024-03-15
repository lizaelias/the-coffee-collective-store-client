import Footer from "../../Footer/Footer";



const AddCoffee = () => {
    return (
      <div className="bg-slate-200 py-7 px-4 ">
              <div className="text-center space-y-2 ">
                 <h1 className="text-3xl font-bold mt-10">Update Existing Coffee Details</h1>
                 <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br></br> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br></br> to using Content here.</p>

              </div>
            <form className="max-w-5xl mx-auto p-5">
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
               <span class="label-text">Email</span>
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
               <span class="label-text">Phone</span>
               </label>
               <input  type="text" placeholder="photo url" name="photo" class="input input-bordered w-full" required />
               </div>
               <button className=" bg-[#D2B48C] text-2xl font-bold w-full mt-10 py-4 rounded-lg ">Update Coffee Details</button>
               
            
           </form>


           <Footer></Footer>
      </div>

    );
};

export default AddCoffee;

