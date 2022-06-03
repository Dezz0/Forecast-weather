import React, { useState } from "react";
import ChangeCity from "./components/ChangeCity";
import MoreInfo from "./components/MoreInfo";
import WeatherToday from "./components/WeatherToday";

const api_key = "e4713650242e6f33afc863dd7ca0d300";

export default function App() {
  const [infoCity, setInfoCity] = useState([]);
  const [moreInfo, setMoreInfo] = useState({});
  // console.log(time);
  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=${api_key}`
      );
      const data = await response.json();
      console.log(data);
      setInfoCity(data);
      const dailyData = data.list.filter((reading) => reading.dt_txt.includes("18:00:00"));
      setMoreInfo(dailyData);
      console.log(dailyData);
    }
  };

  return (
    <div>
      <ChangeCity gettingWeather={gettingWeather} />
      <WeatherToday infoCity={infoCity} />
      <MoreInfo moreInfo={moreInfo} />
    </div>
  );
}
