import { useLoaderData, useNavigate } from "react-router-dom";


function FullPost() {

    const post = useLoaderData();

    const navigate = useNavigate();
    function handleBack() {
        navigate(-1);
    }

    return(
        <div className="w-[600px]">
            
            <p>Post No. {post.id} </p>
            <p className=" font-semibold ">Title: {post.title} </p>
            <p >{post.body}</p>
            <button onClick={handleBack} className="btn mt-5">Back</button>
        </div>
    )
}
export default FullPost;