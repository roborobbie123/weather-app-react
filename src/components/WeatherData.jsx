import { useState } from "react";
import { TiWeatherSunny, TiWeatherCloudy, TiWeatherPartlySunny, TiWeatherDownpour } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { FiSunrise, FiSunset } from "react-icons/fi";

export default function WeatherData({ weather, selectedDay, onSelect }) {
    // const hoursArray = weather.days[0].temp;
    // console.log(hoursArray);


    function getDay(dateString) {
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        const date = new Date(dateString);
        const dayNum = date.getDay() + 1;
        if (dayNum === 7) return days[0];
        return days[dayNum];
    }

    function getHour(time) {
        const hours = time.substring(0, 2);
        if (hours === '00') return '12 AM';
        if (hours === '01') return '1 AM';
        if (hours === '02') return '2 AM';
        if (hours === '03') return '3 AM';
        if (hours === '04') return '4 AM';
        if (hours === '05') return '5 AM';
        if (hours === '06') return '6 AM';
        if (hours === '07') return '7 AM';
        if (hours === '08') return '8 AM';
        if (hours === '09') return '9 AM';
        if (hours === '10') return '10 AM';
        if (hours === '11') return '11 AM';
        if (hours === '12') return '12 PM';
        if (hours === '13') return '1 PM';
        if (hours === '14') return '2 PM';
        if (hours === '15') return '3 PM';
        if (hours === '16') return '4 PM';
        if (hours === '17') return '5 PM';
        if (hours === '18') return '6 PM';
        if (hours === '19') return '7 PM';
        if (hours === '20') return '8 PM';
        if (hours === '21') return '9 PM';
        if (hours === '22') return '10 PM';
        if (hours === '23') return '11 PM';

    }

    function generateIcon(coverage, precip) {
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
            {selectedDay &&
                <div className="flex flex-col justify-center">
                    <IoIosArrowBack
                        onClick={() => onSelect(selectedDay)}
                        className="text-4xl transition-transform duration-200 hover:scale-110 mt-10" />
                    <h2 className="text-2xl">{selectedDay === weather.days[0] ? "Today" : selectedDay.datetime}</h2>
                    <div className="overflow-auto flex justify-center">
                        <table className="w-3/5 table-fixed border border-separate rounded-md shadow-lg mt-5 mb-5">
                            <thead className="text-left">
                                <tr>
                                    <th>Time</th>
                                    <th>Temp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedDay.hours.map((hour, index) => (
                                    <tr key={index}>
                                        <td>{getHour(hour.datetime)}</td>
                                        <td>{hour.temp.toFixed(0)}°</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>}
            {(weather && !selectedDay) &&
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
                                    <tr key={index} className="hover:font-bold hover:shadow-2xl">
                                        <td className="p-2 flex gap-2 items-center" onClick={() => onSelect(day)}>
                                            {day === weather.days[0] ? "Today" : getDay(day.datetime)}
                                            {generateIcon(day.cloudcover)}
                                        </td>
                                        <td className="p-2">{day.tempmin.toFixed(0)}° - {day.tempmax.toFixed(0)}°</td>
                                        <td className="p-2">{day.temp.toFixed(0)}° ({day.feelslike.toFixed(0)}°)</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </>}
            {(!weather && !selectedDay) && <p>Enter a city</p>}
        </div>
    );
}