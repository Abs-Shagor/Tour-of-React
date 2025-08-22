import { useLoaderData } from "react-router-dom";

function UserDetails() {

    const user = useLoaderData();

    return(
        <div>
            <p className=" text-[20px] font-semibold ">User Details</p>
            <p>User_ID: {user.id} </p>
            <p>Name:{user.name} </p>
            <p>Email: {user.email} </p>
            <p>Street: {user.address.street} </p>
            <p>City: {user.address.city} </p>
        </div>
    )
}
export default UserDetails;