import { useState } from "react";

export default function WeatherData({ location, weather }) {

    return (
        <div className="flex flex-col items-center mt-10">
            {(location && weather) ?
                <>
                    <div className="font-semibold text-4xl">{location}</div>
                    <div className=""> Temp: {weather && weather.days[0].temp} °F</div></> : 
                    <p>Enter a city</p>}


        </div>
    );
}