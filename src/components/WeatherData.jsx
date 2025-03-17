import { useState } from "react";
import { TiWeatherSunny, TiWeatherCloudy, TiWeatherPartlySunny } from "react-icons/ti";

export default function WeatherData({ weather }) {
    // const hoursArray = weather.days[0].temp;
    // console.log(hoursArray);

    function getDay(dateString) {
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        const date = new Date(dateString);
        const dayNum = date.getDay() + 1;
        if (dayNum === 7) return days[0];
        return days[dayNum];
    }

    function generateCloudIcon(coverage) {
        console.log(coverage)
        if (coverage <= 12.5) {
            return (<TiWeatherSunny />);
        }
        else if (coverage <= 62.5) {
            return (<TiWeatherPartlySunny />)
        } else {
            return (<TiWeatherCloudy />)
        }

    }

    return (
        <div className="flex flex-col items-center mt-10 h-screen">
            {weather ?
                <>
                    <h1 className="font-semibold text-3xl">{weather.resolvedAddress}</h1>
                    <div className="text-4xl font-semibold my-5">{weather && weather.currentConditions.temp} °F</div>

                    {weather.hours}
                    <div className='overflow-auto flex justify-center'>
                        <table className="w-3/5 table-fixed border border-separate rounded-md shadow-lg mt-5 mb-5">
                            <thead className="text-left">
                                <tr>
                                    <th className="p-2">Date</th>
                                    <th className="p-2">Temp Range</th>
                                    <th className="p-2">Avg Temp (feels like)</th>

                                </tr>
                            </thead>
                            <tbody className="py-2">
                                {weather?.days?.length > 0 && weather.days.map((day, index) => (
                                    <tr key={index} className="even:bg-gray-100 even:text-black">
                                        <td className="p-2 font-semibold flex gap-2 items-center">{getDay(day.datetime)}
                                            {generateCloudIcon(day.cloudcover)}</td>
                                        <td className="p-2">{day.tempmin.toFixed(1)}° - {day.tempmax.toFixed(1)}°</td>
                                        <td className="p-2">{day.temp.toFixed(1)}° ({day.feelslike}°)</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </> : <p>Enter a city</p>}
        </div>
    );
}