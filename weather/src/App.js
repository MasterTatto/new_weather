import './App.css';

import React, {useEffect, useState} from "react";
import axios from "axios";
import {logDOM} from "@testing-library/react";
import Loader from "./loader";


function App() {
    let [value, setValue] = useState('')
    const [data, setData] = useState(null)
    const [city, setCity] = useState('')
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=460af259479a2574e456a34ffff0205c&units=metric')
            .then(response => setData(response.data))
    }, [])

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=460af259479a2574e456a34ffff0205c&units=metric`)
            .then(response => {
                    console.log(response)
                    if (response.status === 200) {
                        setData(response.data)
                    } else {
                        setData(null)
                    }
                }
            )

    }, [city])
    //
    console.log(data)
    console.log(city)
    const info = <div>
        <div>now weather : {!data ? 'wait' : data.main.temp}</div>
        City: <span>{!data ? 'wait' : data.name}</span>
    </div>
    return (
        data ? (
            <div>
                <div>
                    <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
                    <button onClick={() => setCity(value)}>Search</button>
                </div>
                {info}


            </div>
        ) : (
            <Loader/>
        )

    )


}

export default App;
