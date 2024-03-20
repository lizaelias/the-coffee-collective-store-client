import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";



const PrivateRoutes = ({children}) => {
        
    const {user,loading}=useContext(AuthContext);
    
    
    
    if(loading){
        return <span className="loading loading-spinner text-secondary"></span>
    }

    if(user){
        return(children);
    }


    return <Navigate to='/login' ></Navigate>
};

export default PrivateRoutes;