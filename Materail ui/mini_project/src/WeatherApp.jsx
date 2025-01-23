import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Aligarh", 
        lat:25.2,
        lon:23.1,
      });

      let updateInfo= (newInfo) =>{
        setWeatherInfo(newInfo);

      }

    return(
        <div style={{textAlign:"center"}}>
        <h2 >Weather App </h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
        </div>
    )

}