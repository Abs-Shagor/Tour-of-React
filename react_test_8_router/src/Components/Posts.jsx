import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Posts() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [])

    const navigate = useNavigate();
    function handleShowPost(postId) {
        navigate(`${postId}`)
    }

    return (
        <div>
            <h3 className=" text-[30px] text-center mt-20 ">All Posts</h3>

            <div className=" grid grid-cols-1 gap-5 ">
                {
                    posts.map(post => {
                        return (
                            <div className=" bg-orange-100 p-5 rounded-xl ">
                                <p>Post: {post.id}</p>
                                <p>Post Title: {post.title}</p>
                                {/* <Link to={`${post.id}`} className=" text-blue-600 underline ">show Post</Link> */}
                                <button onClick={() => handleShowPost(post.id)} className="btn btn-secondary mt-5">show Post</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default Posts;