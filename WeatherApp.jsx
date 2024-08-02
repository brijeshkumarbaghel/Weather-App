import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import {useState} from "react";
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 44.05,
        humidity: 56,
        temp: 37.05,
        tempMax: 37.05,
        temMin: 37.05,
        weather: "haze"
    });
    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>

            
        </div>
    );
}