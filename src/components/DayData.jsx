import { IoIosArrowBack } from "react-icons/io";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { getHour, generateIcon } from "../util";

export default function DayData({ selectedDay, onSelect, weather }) {

    return (
        <div className="w-full">
            <IoIosArrowBack
                onClick={() => onSelect(selectedDay)}
                className="text-4xl transition-transform duration-200 hover:scale-110 mr-auto ml-20" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl">{selectedDay === weather.days[0] ? "Today" : selectedDay.datetime}</h2>
                <div className="flex items-center gap-5 mt-2">
                    <div className="flex items-center gap-2">{getHour(selectedDay.sunrise)} <FiSunrise className="text-lg text-amber-300"/></div>
                    <div className="flex items-center gap-2">{getHour(selectedDay.sunset)} <FiSunset className="text-lg text-amber-600"/></div>
            </div>
            <div className="overflow-x-auto flex justify-center w-3/5">
                <table className="min-w-full table-fixed border border-separate rounded-md shadow-lg mt-5 mb-5">
                    <thead className="text-left">
                        <tr>
                            <th className="p-2 pl-5">Time</th>
                            <th className="p-2">Temp</th>
                            <th className="p-2">Cloudcover</th>
                            <th className="p-2">Precip</th>
                            <th className="p-2">Wind</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedDay.hours.map((hour, index) => (
                            <tr key={index} className="hover:font-bold hover:shadow-2xl hover:text-amber-200">
                                <td className="ml-5 flex items-center gap-1">{getHour(hour.datetime)} {generateIcon(hour.cloudcover, hour.precipprob)}</td>
                                <td className="pl-2">{hour.temp.toFixed(0)}°</td>
                                <td className="pl-2">{hour.cloudcover}%</td>
                                <td className="pl-2">{hour.precipprob}%</td>
                                <td className="pl-2">{hour.windspeed} mph</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
        </div>

    );
}