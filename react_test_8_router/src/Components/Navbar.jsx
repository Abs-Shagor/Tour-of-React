import { NavLink } from "react-router-dom";
import "./Navbar.css";
 

// use NavLink instead of anchor <a> tag from react-router-dom to avoide the reload of page.
function Navbar() {

    
    return (
        <div className=" flex justify-between mb-20">
            <h2 className=" text-[40px] font-semibold text-orange-950 ">React Router Testing</h2>
            <div className=" flex gap-10 text-[24px] font-medium text-orange-950 ">
                <NavLink to ="/">Home</NavLink>
                <NavLink to ="/About">About</NavLink>
                <NavLink to ="/Users">Users</NavLink>
                <NavLink to ="/Posts">Posts</NavLink>
            </div>
        </div>
    )
}
export default Navbar;