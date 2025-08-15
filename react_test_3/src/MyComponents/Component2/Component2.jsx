import { useEffect, useState } from "react"
import './Component2.css'

function Component2() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,population,capital,flags')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            })
    }, [])
    console.log(countries.length);

    const [countryIvisitedList, setCountryIvisitedList] = useState([]);
    function countryList(country) {
        setCountryIvisitedList([...countryIvisitedList, country]);
    }

    return (
        <div>
            <h1>All Countries Flag, Name, Capital and Population count</h1>
            <h3>Total Country: {countries.length}</h3>

            <div className="country-i-visited-list-design">
                <h3>List of Country I Visited</h3>
                {
                    countryIvisitedList.map(country => {
                        return (
                            <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
                                <img style={{ height: '20px', width: '35px' }} src={country.flags.png} alt="" />
                                <span>{country.name.common}</span>
                            </div>
                        )
                    })
                }
            </div>

            <div className="countries-box-design">
                {
                    countries.map(country => {
                        return (
                            <div className="country-box-design">
                                <img className="flag-img-design" src={country.flags.png} alt="not found" />
                                <p>Name: {country.name.common}</p>
                                <p>Capital: {country.capital[0]}</p>
                                <p>Population: {country.population}</p>

                                <button onClick={() => countryList(country)} >Mark as visited</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}
export default Component2