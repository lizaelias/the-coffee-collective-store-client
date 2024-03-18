import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Result } from "postcss";



const Navbar = () => {

  const {user,logOut} =useContext(AuthContext);
 
   const handlelogOut =()=>{
     logOut()
     .then(Result =>{
      console.log(Result.user);
     })
     .fetch(error =>{
      console.log(error)
     })
   }
  
    const navbar =<>

     <li><NavLink  to='/'>Home</NavLink></li>
     <li><NavLink to='/addCoffee'>AddCoffee</NavLink></li>
     <li><NavLink to='/login'>Login</NavLink></li>
     <li><NavLink to='/register'>Register</NavLink></li>
    
    </>
    
    return (
        <div>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
        {navbar}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
     {navbar}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user ? 
     <button onClick={handlelogOut} className="btn sm:btn-sm md:btn-xl mr-4">sign Out</button>
     : 
     <Link to='/login'> 
     <button className="btn sm:btn-sm md:btn-xl mr-4">login</button>
     </Link>
  }

  </div>
</div>
        </div>
    );
};

export default Navbar;