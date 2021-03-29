import React from 'react';

const {useState} = React;
export default function ApiCall(){
    const [counter,SetCounter] = useState(0);
    return(
        <div>
            <p>This is counter {counter}</p>
            <button onClick={()=>{
                SetCounter(counter+1);
            }}>counter</button>
        </div>

    )

}
