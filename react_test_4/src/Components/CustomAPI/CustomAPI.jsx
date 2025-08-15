
/*
 * we can simply, make an array of object can can use them 
 * or We can make our own API through ChatGPT and can store them into the public folder.
 * or we can make a repository in github and store them in it.
 * 
*/

import { useEffect, useState } from "react";

function CustomAPI() {

    /// No. 1: we can use data by creating a simple array of object
    // const sunglasses = [
    //     { id: 1, brand: "Ray-Ban", price: 150 },
    //     { id: 2, brand: "Oakley", price: 200 },
    //     { id: 3, brand: "Gucci", price: 350 },
    //     { id: 4, brand: "Prada", price: 300 },
    //     { id: 5, brand: "Persol", price: 180 }
    // ];


    /// No. 2: In this method, we store our data in JSON format in sunglasses.json file into the
    /// public folder. and use them as like api
    // const [sunglasses, setSunglasses] = useState([]);
    // useEffect(() => {
    //     fetch('sunglasses.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setSunglasses(data);
    //     })
    // }, [])

    ///No. 3: we can create a repository in github and store the json format data in it and can use the link as api
    const [sunglasses, setSunglasses] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Abs-Shagor/sunglasses-api/refs/heads/main/sunglasses.json')
            .then(res => res.json())
            .then(data => {
                setSunglasses(data);
            })
    }, [])



    return (
        <div>
            {
                sunglasses.map(sunglass => {
                    return (
                        <div style={{ width: '200px', border: '1px solid tomato', margin: '10px' }}>
                            <p>Brand: {sunglass.brand}</p>
                            <p>Price: {sunglass.price}</p>
                        </div>
                    )
                })


            }
        </div>
    )
}
export default CustomAPI;