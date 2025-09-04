import Footer from "./Footer";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

const RouteLayout = () => {
  return <div>
    <Navbar/>
    <Outlet />
    <Footer/>
  </div>;
};

export default RouteLayout;
