/* Coutry API 
[
 {
    "flags":{"png":"https://flagcdn.com/w320/tn.png","svg":"https://flagcdn.com/tn.svg","alt":"The flag of Tunisia has a red field. A white circle bearing a five-pointed red star within a fly-side facing red crescent is situated at the center of the field."},
    "name":{"common":"Tunisia","official":"Tunisian Republic","nativeName":{"ara":{"official":"الجمهورية التونسية","common":"تونس"}}},
    "capital":["Tunis"],
    "population":11818618
 },
 { .............},
 { .............},
]
 */
import { useEffect, useState } from "react"
import './Component1.css'

function Component1() {
    let [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,population,capital,flags')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            })

    }, [])
    console.log(countries[0]);

    const [countryList, setCountryList] = useState([]);
    function visitedCountryList(countryName) {
        setCountryList([...countryList, countryName]);
    }

    return (
        <div>
            <div>
                <h3>List of Country I visited</h3>
                <ul>
                    {
                        countryList.map(countryName => {
                            return <li>{countryName}</li>
                        })
                    }
                </ul>
            </div>
            <hr />
            <h2>All Countries Flag, Name, Capital and their Population count</h2>
            <h4>Total Country: {countries.length}</h4>


            <div className="country-container">
                {
                    countries.map(country => {
                        return <CountryDetails flag={country.flags.png} name={country.name.common} capital={country.capital[0]} population={country.population}></CountryDetails>
                    })
                }
            </div>
        </div>
    )

    function CountryDetails({ flag, name, capital, population }) {
        const [visited, setVisited] = useState(false);
        function visitedBtn() {
            setVisited(!visited);
        }

        return (
            <div style={{ border: '1px solid orange', padding: '10px', margin: '10px' }}>
                <img src={flag} alt="img not found" style={{ width: '170px', height: '100px' }} />
                <p>Country Name: {name} </p>
                <p>Capital: {capital}</p>
                <p>Population: {population} </p>
                <button onClick={visitedBtn}>Visited</button>
                {
                    // visited && <p>I have visited the country</p>
                    // or
                    visited && ' I have visited the country'
                }

                <br /><br />
                <button onClick={() => visitedCountryList(name)}>Mark as visited</button>
            </div>
        )
    }
}
export default Component1
