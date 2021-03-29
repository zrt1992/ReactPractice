import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


function App(props) {
    const [countries, setData] = useState("");
    const fetchLocalLikes = async () => {
        await axios.get('https://restcountries.eu/rest/v2/all')
            .then(function (response) {
                console.log(response.data);
                //debugger;
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchLocalLikes()
    }, []);
    let property = "";
    return (
        <div className="App">
            <header className="App-header">
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
    );
}


export default App;
