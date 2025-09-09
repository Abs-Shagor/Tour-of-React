import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
    console.log(error);

    return(
        <div className=" text-[40px] font-medium text-center mt-20">
            <p>{error.status}</p>
            <p>The page you looking for is {error.statusText || error.message}!</p>
        </div>
    )
}
export default ErrorPage;