import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


function Home() {

    return(
        <div className=" max-w-[1280px] mx-auto m-5 ">
            <Navbar></Navbar>
            <h3 className=" text-[30px] text-center mt-20 ">I am Home section</h3>
            <Outlet></Outlet>
        </div>
    )
}
export default Home;