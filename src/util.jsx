import { TiWeatherSunny, TiWeatherCloudy, TiWeatherPartlySunny, TiWeatherDownpour } from "react-icons/ti";
import { IoRainyOutline } from "react-icons/io5";

export function generateIcon(coverage, precip) {
    console.log(coverage)
    if (precip > 50) {
        return (<IoRainyOutline />)
    }
    if (coverage <= 12.5) {
        return (<TiWeatherSunny className="text-amber-300 text-xl"/>);
    }
    else if (coverage <= 62.5) {
        return (<TiWeatherPartlySunny className="text-lg"/>)
    } else {
        return (<TiWeatherCloudy className="text-lg"/>)
    }
}

export function getHour(time) {
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