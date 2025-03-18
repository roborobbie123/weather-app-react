import { IoIosArrowBack } from "react-icons/io";
import { FiSunrise, FiSunset } from "react-icons/fi";

export default function DayData({ selectedDay, onSelect, weather }) {

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

    return (
        <>
            <IoIosArrowBack
                onClick={() => onSelect(selectedDay)}
                className="text-4xl transition-transform duration-200 hover:scale-110 mr-auto ml-20" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl">{selectedDay === weather.days[0] ? "Today" : selectedDay.datetime}</h2>
                <div className="flex items-center gap-5 mt-2">
                    <div className="flex items-center gap-2">{getHour(selectedDay.sunrise)} <FiSunrise className="text-lg text-amber-300"/></div>
                    <div className="flex items-center gap-2">{getHour(selectedDay.sunset)} <FiSunset className="text-lg text-amber-600"/></div>
            </div>
            <div className="overflow-auto flex justify-center">
                <table className="w-3/5 table-fixed border border-separate rounded-md shadow-lg mt-5 mb-5">
                    <thead className="text-left">
                        <tr>
                            <th className="p-2">Time</th>
                            <th className="p-2">Temp</th>

                        </tr>
                    </thead>
                    <tbody>
                        {selectedDay.hours.map((hour, index) => (
                            <tr key={index} className="hover:font-bold hover:shadow-2xl">
                                <td className="pl-2">{getHour(hour.datetime)}</td>
                                <td className="pl-2">{hour.temp.toFixed(0)}°</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
        </>

    );
}