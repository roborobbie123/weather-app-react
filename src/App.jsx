import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

  const fetchWeather = async () => {
    if (!location) return;

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
  }, [location]);

  function handleSearch(location) {
    setLocation(location);
    setSelectedDay(null);
  }

  function handleSelectDay(day) {
    setSelectedDay((prevDay) =>
      prevDay?.datetime === day.datetime ? null : day
    );
  }

  return (
    <main className="py-5 bg-gradient-to-b from-[#0a1f44] via-[#183a67] to-[#1f4b80] text-white">
      <Header />
      <Search onSearch={handleSearch} />
      <WeatherData
        weather={weather}
        selectedDay={selectedDay}
        onSelect={handleSelectDay}
      />
    </main>
  );
}

export default App;
