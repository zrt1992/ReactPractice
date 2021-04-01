import React, {useState, useEffect} from 'react';

import axios from "axios";

const Country = (props) => {
    const [countries, setData] = useState("");
    const url = 'https://restcountries.eu/rest/v2/name/' + props.name;
     // console.log(url);
    const fetchCountry = async () => {
        await axios.get(url)
            .then((response) => {
                // console.log('https://restcountries.eu/rest/v2/name/' + props.name);
                setData(response.data);
               // console.log(response.data);
            })
            .catch(() => {

            });
    }
    useEffect(async () => {
        fetchCountry();
    }, [props.name]);


    return (
        <div>
            {countries.length > 0 && countries.map((value, index) => {
                return (
                    <div key={index} >
                        {value.name}

                        {value.region}
                    </div>
            )
            })}
    <br/><br/>
        </div>
    );
}
export default Country;
