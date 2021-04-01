import React, {useState, useEffect} from 'react';

import axios from "axios";

const Country = (props) => {
    const [countries, setData] = useState("");
    const fetchCountry = async () => {
        await axios.get('https://restcountries.eu/rest/v2/name/' + props.name)
            .then((response) => {
                console.log('https://restcountries.eu/rest/v2/name/' + props.name);
                setData(response.data);
            })
            .catch(() => {

            });

    }
    useEffect(async () => {
        fetchCountry();
    }, []);


    return (
        <div>
            {props.name}

        </div>
    );
}
export default Country;
