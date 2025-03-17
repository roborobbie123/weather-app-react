import { useState } from "react";

export default function WeatherData({ weather }) {
    // const hoursArray = weather.days[0].temp;
    // console.log(hoursArray);

    return (
        <div className="flex flex-col items-center mt-10 h-screen">
            {weather ?
                <>
                    <h1 className="font-semibold text-4xl">{weather.resolvedAddress}</h1>
                    <div className="text-4xl font-semibold mt-10">{weather && weather.currentConditions.temp} °F</div>

                    <table className="w-2/3 border border-collapse shadow-lg mt-5 mb-5">
                        <thead className="text-left">
                            <tr>
                                <th>Date</th>
                                <th>Min</th>
                                <th>Avg</th>
                                <th>Max</th>
                            </tr>
                        </thead>
                        <tbody className="py-2">
                            {weather?.days?.length > 0 && weather.days.map((day, index) => (
                                <tr key={index} className="even:bg-gray-100 even:text-black">
                                    <td>{day.datetime}</td>
                                    <td>{day.tempmin.toFixed(1)} °F</td>
                                    <td>{day.temp.toFixed(1)} °F</td>
                                    <td>{day.tempmax.toFixed(1)} °F</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </> : <p>Enter a city</p>}
        </div>
    );
}