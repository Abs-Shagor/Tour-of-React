import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Home() {

    const navigation = useNavigation();

    return(
        <div className=" max-w-[1280px] mx-auto m-5 ">
            <Navbar></Navbar>
            {
                navigation.state==='loading' ? <p className="text-center font-bold">Loading...</p> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    )
}
export default Home;