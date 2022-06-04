import React, { useState } from "react";
import ChangeCity from "./components/ChangeCity";
import MoreInfo from "./components/MoreInfo";
import WeatherToday from "./components/WeatherToday";

const api_key = "e4713650242e6f33afc863dd7ca0d300";

export default function App() {
  const [infoCity, setInfoCity] = useState([]);
  const [moreInfo, setMoreInfo] = useState([]);
  const [errorSearch, SetErrorSearch] = useState({ error: false, errorMessage: null });
  const [enabledBtn, SetEnabledBtn] = useState(true);
  const [currentCity, setCurrentCity] = useState("");

  const gettingWeather = async (e) => {
    e.preventDefault();

    let city = e.target.elements.city.value;

    if (city && city.trim().length) {
      SetErrorSearch({ ...errorSearch, ...{ error: false } });
      SetEnabledBtn(false);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=ru`
        );
        if (!response.ok) {
          throw new Error("Error. Incorrect value.");
        }
        const data = await response.json();
        setInfoCity(data);
        setCurrentCity(city);
      } catch (error) {
        SetErrorSearch({ ...errorSearch, ...{ error: true, errorMessage: error.message } });
        SetEnabledBtn(true);
      }
    }
  };

  const gettingWeeklyWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${api_key}&units=metric&lang=ru`
      );
      if (!response.ok) {
        throw new Error("Please enter city name.");
      }
      const data = await response.json();
      const dailyData = data.list.filter((reading) => reading.dt_txt.includes("18:00:00"));
      setMoreInfo(dailyData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <ChangeCity gettingWeather={gettingWeather} />
      <WeatherToday infoCity={infoCity} errorSearch={errorSearch} />
      <MoreInfo
        gettingWeeklyWeather={gettingWeeklyWeather}
        moreInfo={moreInfo}
        enabledBtn={enabledBtn}
        errorSearch={errorSearch}
      />
    </div>
  );
}
