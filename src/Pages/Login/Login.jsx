import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";






const Login = () => {
  const navigate =useNavigate();
  


   const {signIn} =useContext(AuthContext)

    const [showPassword, setShowPassWord] =useState(false);
    const emailRef =useRef(null);


     const handleLogin = e =>{
       
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email,password)
        e.target.reset()
      
        // 
        signIn(email,password)
        .then(result =>{
            console.log(result.user)
            navigate('/');
          
        })
        .cateh( error=>{
            console.log(error)
            
        })
       
     }



    return (

        <div>
         <div className='absolute top-32 left-5 right-0'>
            <Link to='/'><h1 className='text-xl font-medium underline hover:text-green-600 flex gap-x-2 items-center'> <span><IoMdArrowRoundBack></IoMdArrowRoundBack></span>Back to home</h1></Link>
             
        </div> 
        <div className="w-1/2 mx-auto mt-10 mb-10 bg-slate-300 p-20 rounded-lg">
        <h1 className="text-3xl font-bold">Please Login...</h1>
        <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
            ref={emailRef}
            type="email" 
            name="email"
            placeholder="email"
            className="input input-bordered" 
            required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div></div>
          <div className="flex items-center ">
           <input 
           type={ showPassword ?  "text" :"password"}
           placeholder="password"
            name="password"
            className="input input-bordered w-full" 
            required />

          
         <p className='-ml-12' onClick={()=>setShowPassWord(!showPassword)}>{ 
            showPassword ?<FaEye></FaEye> :<FaEyeSlash></FaEyeSlash>
           
          }
        </p>
           </div>
         

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <h1 className="mt-3">Dont's a have Account please  <span className="font-bold uppercase underline  text-red-600 hover:text-sky-700"><Link to='/register'>Register</Link></span></h1>

        

 


       </form>

        </div>
    </div>
    );
};

export default Login;