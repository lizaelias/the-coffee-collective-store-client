

import {
    createBrowserRouter,
    
} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Root from "../Root/Root";
import AddCoffee from "../../Pages/AddCoffee/AddCoffee";
import EorroPages from "../../EorroPages/EorroPages";
import UpdateCoffee from "../../Pages/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "../../Pages/CoffeeDetails/CoffeeDetails";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<EorroPages></EorroPages>,
      
 
      children: [
        {
          path: "/",
          element:<Home></Home>,
          loader: ()=>fetch('http://localhost:5000/coffee')
        },
        {
          path:'/addCoffee',
          element:<AddCoffee></AddCoffee>,
        },
        {
          path:'/updateCoffee/:id',
          element:<UpdateCoffee></UpdateCoffee>,
          loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
          
        },
        {
          path:'/coffee/:id',
          element:<CoffeeDetails></CoffeeDetails>,
          loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
          
        },
        {

          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>

        }

      ],
    },
  ]);

  export default router;