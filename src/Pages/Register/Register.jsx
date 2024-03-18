import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";





const Register = () => {

    const{createUser,googleSignIn}= useContext(AuthContext);

    const [success,setSuccess] =useState('');
   const [registerError, setRegisterError] =useState('')

   const [showPassword, setPassword] =useState(false)

     const handelRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password);
        setSuccess('');
        setRegisterError('');


        if(password.length < 6){
            
            setRegisterError('password should be ar six characters or longer')
            return;
        }



        // 
        createUser(email,password)
        .then(result =>{
            console.log(result.user)

            setSuccess('Your login successfully')
            Swal.fire({
                title: "success",
                text: "user successfully login",
                icon: "sccess"
            });
        })
        .catch(error =>{
            setRegisterError(error.messages)
            console.error(error)
            Swal.fire({
                title: "error",
                text: "already create a account",
                icon: "sccess"
            });
        })
        
     }


     const handleGoogleSignIn =()=>{
       googleSignIn()
       .then(result =>{
        console.log(result.user)

        setSuccess('Your login successfully')
        Swal.fire({
            title: "success",
            text: "user successfully login",
            icon: "sccess"
        });
    })
    .catch(error =>{
        setRegisterError(error.messages)
        console.error(error)
        Swal.fire({
            title: "error",
            text: "already create a account",
            icon: "sccess"
        });
    })
     }

    return (
        <div className="mt-10">

            <div className='absolute top-32 left-5 right-0'>

                <Link to='/'><h1 className='text-xl font-medium underline hover:text-green-600 flex gap-x-2 items-center'> <span><IoMdArrowRoundBack></IoMdArrowRoundBack></span>Back to home</h1></Link>
             </div>
            <div className="w-1/2 mx-auto mt-10 mb-10 bg-slate-300 lg:p-20 rounded-lg">
        <h1 className="text-3xl font-bold">Please Registration...</h1>
        <form onSubmit={handelRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>


           <div className="flex items-center ">
           <input 
           type={ showPassword ?  "text" :"password"}
           placeholder="password"
            name="password"
            className="input input-bordered w-full" 
            required />

          
         <p className='-ml-14' onClick={()=>setPassword(!showPassword)}>{ 
            showPassword ?<FaEye></FaEye> :<FaEyeSlash></FaEyeSlash>
           
           }</p>
           </div>
           
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary mt-3">Google SignIn </button>
        </div>
        <h1 className="mt-3">You have a already Account please  <span className="font-bold uppercase underline  text-red-600 hover:text-sky-700"><Link to='/login'>Login</Link></span></h1>

        <div className="mt-3">
         {
            success &&  <p className="text-2xl font-medium text-green-700">{success}</p>
        }
        {
           registerError&& <p className="text-2xl font-medium text-red-700">{registerError}</p>

        }
      </div>
      </form>

      
 

        </div>
        </div>
    );
};

export default Register;