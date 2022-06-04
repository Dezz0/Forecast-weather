import React from "react";
import { setDate, setDay } from "../dayhelper";

export default function MoreInfo({ gettingWeeklyWeather, moreInfo, enabledBtn, errorSearch }) {
  const renderOtherDays = moreInfo.map((day, index) => (
    <div className="next_days" key={index}>
      <h3>{setDay(day.dt)}</h3>
      <p>{setDate(day.dt)}</p>
      <i className={`owf owf-${day.weather[0].id} owf-3x icon-style`}></i>
      <p>{day.weather[0].description}</p>
      <p>{Math.round(day.main.temp)}°C</p>
    </div>
  ));

  return errorSearch.error ? (
    <div></div>
  ) : (
    <div className="weather_forecast">
      <button className="btn" disabled={enabledBtn} onClick={gettingWeeklyWeather}>
        Показать погоду на 5 дней ▼
      </button>

      <div className="other_days">{renderOtherDays}</div>
    </div>
  );
}
