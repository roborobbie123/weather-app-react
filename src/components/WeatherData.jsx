
import DayData from "./DayData";
import { generateIcon } from "../util";

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



    return (
        <div className="flex flex-col items-center mt-10 h-screen overflow-y-auto">
            {selectedDay &&
                <DayData onSelect={onSelect} weather={weather} selectedDay={selectedDay} />}
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
                                            {generateIcon(day.cloudcover, day.precipprob)}
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