

import {
    createBrowserRouter,
    
} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Root from "../Root/Root";
import AddCoffee from "../../Pages/AddCoffee/AddCoffee";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
 
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path:'/addCoffee',
          element:<AddCoffee></AddCoffee>,
        }
      ],
    },
  ]);

  export default router;