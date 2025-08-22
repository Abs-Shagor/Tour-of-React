import { Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Contact from "./Contact";

// use Link instead of anchor tag <a> from react-router-dom to avoide the reload of page
function Navbar() {

    return (
        <div className=" flex justify-between mb-20">
            <h2 className=" text-[40px] font-semibold text-orange-950 ">React Router Testing</h2>
            <div className=" flex gap-5 text-[24px] font-medium text-orange-950 ">
                <Link to ="./">Home</Link>
                <Link to ="About">About</Link>
                <Link to ="Users">Users</Link>
                <Link to ="Contact">Contact</Link>
            </div>
        </div>
    )
}
export default Navbar;