

import {
    createBrowserRouter,
    
} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Root from "../Root/Root";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
 
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
      ],
    },
  ]);

  export default router;