import { useState, useEffect } from 'react'
import Header from './components/Header';
import Search from './components/Search';
import WeatherData from './components/WeatherData';



function App() {
  const [location, setLocation] = useState('');
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [weather, setWeather] = useState('');
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

  const fetchWeather = async () => {
      if(!location) return;

      try {
          const response = await fetch(API_URL);
          if (!response.ok) throw new Error("City not found");
          const data = await response.json();
          setWeather(data);
      } catch (error) {
          console.log(error);
          setWeather(null);
      }
  };

  useEffect(() => {
    fetchWeather();
  }, [location])

  function handleSearch(location) {
    setLocation(location);
  }

  return (
    <main className="h-screen bg-gradient-to-b from-[#0a1f44] via-[#183a67] to-[#1f4b80] text-white">
      <Header />
      <Search onSearch={handleSearch}/>
      <WeatherData location={location} weather={weather}/>
    </main>
  )
}

export default App
