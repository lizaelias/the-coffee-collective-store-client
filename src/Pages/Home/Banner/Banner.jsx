import banner from "../../../../public/images/more/banner.png";
import Navbar from "../../../Sheard/Navbar/Navbar";


const Banner = () => {
  return (
    <div className="relative">
      <img src={banner} alt="" className="w-full h-auto" />

      
      <div className="absolute top-0 left-0 right-0">
      <Navbar></Navbar>
      </div>
      <div className="absolute top-14 left-10 right-10 md:left-[650px] md:right-[50px] md:top-[250px] md:bottom-[168px] space-y-3 ">
        <h1 className="text-white font-bold text-2xl">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="text-white">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
       
        <button className="block mx-auto md:mx-0 bg-[#E3B577] py-4 px-5 text-xl font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
