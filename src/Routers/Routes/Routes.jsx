

import {
    createBrowserRouter,
    
} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Root from "../Root/Root";
import AddCoffee from "../../Pages/AddCoffee/AddCoffee";
import EorroPages from "../../EorroPages/EorroPages";
import UpdateCoffee from "../../Pages/UpdateCoffee/UpdateCoffee";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<EorroPages></EorroPages>,
 
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path:'/addCoffee',
          element:<AddCoffee></AddCoffee>,
        },
        {
          path:'/updateCoffee',
          element:<UpdateCoffee></UpdateCoffee>
        }
      ],
    },
  ]);

  export default router;