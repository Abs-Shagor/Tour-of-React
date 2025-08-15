import { useEffect, useState } from 'react';
import './Bottles.css'
import { getStoredData, setDataInLocalStorage } from './LocalStorage';

function Bottles() {

    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json')
            .then(res => res.json())
            .then(data => {
                setBottles(data);
            })
    }, [])

    const [cartBottles, setCartBottles] = useState([]);
    function cartBottlesHandler(bottle) {
        setCartBottles([...cartBottles, bottle])
        
        let data = getStoredData();
        setDataInLocalStorage([...data, bottle.name]);
    }


    return (
        <div>
            <div >
                <h3>Cart Section</h3>
                <h4>Cart: {cartBottles.length} </h4>
                <h4>CartLS: {getStoredData().length}</h4>
            </div>

            
            <div className='bottles-container'>
                {
                    bottles.map(bottle => {
                        return (
                            <div className='bottle-card-design'>
                                <img className='bottle-img-design' src={bottle.img} alt="" />
                                <h4>{bottle.name}</h4>
                                <p>Seller: {bottle.seller}</p>
                                <p>Price: ${bottle.price} </p>
                                <p>stock: {bottle.stock} </p>
                                <button onClick={() => cartBottlesHandler(bottle)} > Purchase </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Bottles;