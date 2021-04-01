import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {Link} from "react-router-dom";
import Country from "./main_pages/Country";


function App(props) {
    const [countries, setData] = useState("");
    // const [loadCountry, setCountry] = useState(false);
    const [countryName, setcountryName] = useState('');
    const fetchLocalLikes = async () => {
        await axios.get('https://restcountries.eu/rest/v2/all')
            .then(function (response) {
                //  console.log(response.data);
                //debugger;
                setData(response.data);
            })
            .catch(function (error) {
                //console.log(error);
            });
    }
    const showCountry = (value) => {
        console.log(value)
        //  setCountry(!loadCountry)
        setcountryName(value)
    }
    useEffect(async () => {
        fetchLocalLikes();

    }, []);
    let property = "";
    return (
        <div>
            <header>
                <Country name={countryName}/>
                <ul>
                    {countries.length > 0 && countries.map((country, index) => {
                        return (
                            <li key={index}>
                                <a href="#" onClick={() => {
                                    showCountry(country.name)
                                }}>{country.name}</a>
                            </li>

                        )
                    })}
                </ul>
                <div>


                </div>


            </header>
        </div>
    );
}


export default App;
