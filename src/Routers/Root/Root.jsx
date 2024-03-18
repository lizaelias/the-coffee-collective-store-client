import { Outlet } from "react-router-dom";
import TopBanner from "../../Sheard/TopBanner/TopBanner";
import Footer from "../../Footer/Footer";

const Root = () => {

    return (
        <div>

         <TopBanner></TopBanner>
         <Outlet></Outlet>
         <div className="mt-10">
         <Footer></Footer>
         </div>
        </div>
    );
};

export default Root;