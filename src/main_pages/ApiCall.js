import React, {useEffect} from 'react';
import axios from "axios";

const {useState} = React;
//export default function Lol() {
// export default () => {
const ApiCall = () => {
    const [countries, setData] = useState([""]);
    const fetchCountries = async () => {
        await axios.get('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                setData(response.data)
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchCountries()
    }, []);
     const test = () =>{
       //  alert('asd')
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={test}> this is the button</button>
                <ul>
                    {countries.length > 0 && countries.map((country, index) => {
                        return (
                            <li key={index}>
                                <a href={`https://restcountries.eu/rest/v2/name/${country.name}`}>{country.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </header>
        </div>
    )
}
export default ApiCall;

