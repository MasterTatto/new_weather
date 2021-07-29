import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useState} from "react";

const API_KEY = '460af259479a2574e456a34ffff0205c'


function App() {
    const [value, setValue] = useState('')
    let state = {
        temp: undefined,
        name: undefined,
        country: undefined,
        error: undefined
    }
    const gettingWeather = async () => {
        let api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`)
        let data = await api_url.json()
        //console.log(data)
        state = {
            name: {...data.name}
        }
        //console.log(state)
    }
    console.log(state)
    // console.log(gettingWeather())
    return (
        <div className="App">
            <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            <button onClick={() => gettingWeather()}>search</button>
            <div>
                <p>{gettingWeather.main ? gettingWeather.main.temp : 'null'}</p>
                <p>{gettingWeather.name ? gettingWeather.name : 'null'}</p>
            </div>
        </div>
    );


}

export default App;
