import React, {useState, useEffect} from 'react';

const axios = require('axios');

const Country = (props) => {
    const [countries, setData] = useState("");
    const fetchCountry = async () => {
        await axios.get('https://restcountries.eu/rest/v2/name/' + props.name)
            .then((response) => {
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

        </div>
    );
}
export default Country;
