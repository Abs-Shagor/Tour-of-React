import { BiSolidLeaf } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Navbar() {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/shop", name: "Shop" },
        { id: 5, path: "/profile", name: "Profile" }
    ]

    const [open, setOpen] = useState(false);
    function hamburger() {
        setOpen(!open);
    }

    return (
        <div className=" flex justify-between items-center text-green-800 ">
            <h2 className=" text-[32px] font-bold flex items-center"><p>ABS</p><BiSolidLeaf /> </h2>

            <div onClick={hamburger} className=" md:hidden cursor-pointer ">
                {
                    open === true ? <AiOutlineClose /> : <GiHamburgerMenu />
                }
            </div>
            <div className={`text-[20px] font-medium absolute md:static right-0 top-14 ${open ? 'block' : 'hidden md:block'} `}>
                <ul className="flex flex-col gap-3 md:flex-row md:gap-5 bg-green-50 md:bg-white p-5 md:p-0 rounded-tl-xl rounded-bl-xl  ">
                    {
                        routes.map(route => {
                            return (
                                <a key={route.id} href={route.path}>{route.name}</a>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar;