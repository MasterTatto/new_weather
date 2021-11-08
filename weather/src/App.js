import './App.css';
import SearchPanel from "./components/search-panel";
import InfoPanel from "./components/info-panel";
import {useEffect, useState} from "react";

function App() {
    const [shouldInfo, setShouldInfo] = useState(false);

    useEffect(() => {
        document.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
                setShouldInfo(false)
            }
        })
    }, [shouldInfo])

    return (
        <div className="App">
            <SearchPanel setShouldInfo={setShouldInfo}/>
            <InfoPanel setShouldInfo={setShouldInfo} shouldInfo={shouldInfo}/>
        </div>
    );
}

export default App;
