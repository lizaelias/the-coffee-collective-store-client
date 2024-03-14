import { Outlet } from "react-router-dom";
import TopBanner from "../../Sheard/TopBanner/TopBanner";

const Root = () => {

    return (
        <div>

         <TopBanner></TopBanner>
         <Outlet></Outlet>
        </div>
    );
};

export default Root;