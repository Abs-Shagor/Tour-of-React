import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function Users() {

    const users = useLoaderData();
    return (
        <div>
            <h3 className=" text-[30px] text-center mt-20 "> I am from Users section</h3>
            <div className=" grid grid-cols-3 gap-5 ">
                {
                    users.map(user => {
                        return (
                            <div className=" bg-green-100 p-5 rounded-xl ">
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <Link to={`User/${user.id}`} className=" text-blue-600 underline ">show details</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Users;