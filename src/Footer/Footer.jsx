import footer_logo from "../../public/images/more/logo1.png";
import { FaFacebookSquare, FaInstagram, FaLocationArrow, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-slate-200 p-5 mt-10">

      <div className="grid grid-cols-2 gap-6 items-center max-w-6xl mx-auto p-5">

        <div>
            <img className="w-14" src={footer_logo}alt="" />
            <h1 className="text-3xl font-bold"></h1>
            <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
             <div className="flex gap-x-2 text-4xl mt-5">
               <span><FaFacebookSquare></FaFacebookSquare></span>
               <span><FaInstagram></FaInstagram></span>
               <span><FaTwitter></FaTwitter></span>
               <span><FaYoutube></FaYoutube></span>
             </div>

             <h1 className="text-3xl font-bold mt-4 mb-4">Get in Touch</h1>

             <div className="flex gap-x-2 mb-2 items-center">
                <p><FaPhone></FaPhone></p>
                <h2>+88 01533 333 333</h2>
             </div>
             <div className="flex gap-x-2 mb-2 items-center">
                <p><MdEmail></MdEmail></p>
                <h2>email info</h2>
             </div>
             <div className="flex gap-x-2 items-center">
                <p><FaLocationArrow></FaLocationArrow></p>
                <h2>72, Wall street, King Road, Dhaka</h2>
             </div>
        </div>

        <div>
            <h1 className="text-3xl font-bold">Connect with Us</h1>
             <input placeholder="name" className="w-full rounded-lg p-2 mt-2"></input>
             <input placeholder="email" className="w-full rounded-lg p-2 mt-2"></input>
             <textarea  placeholder="messages area" className="w-full rounded-lg p-2 mt-2"></textarea>

         
             <button className="btn btn-outline btn-primary rounded-full mt-3">Send Message</button>
        </div>
     

      </div>
    </div>
  );
};

export default Footer;
