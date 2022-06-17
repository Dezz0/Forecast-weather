import React, { useState } from "react";
import { setDate, setDay } from "../dayhelper";

export default function MoreInfo({ moreInfo, enabledBtn, errorSearch }) {
  const [hiddenWeather, setHiddenWeather] = useState(true);
  let hidden = hiddenWeather ? "other_days hidden_" : "other_days";

  const renderOtherDays = moreInfo.map((day, index) => (
    <div className="next_day" key={index}>
      <h3>{setDay(day.dt)}</h3>
      <p>{setDate(day.dt)}</p>
      <p className="weather">
        <i className={`owf owf-${day.weather[0].id} owf-3x icon-style`}></i>
        <span>{day.weather[0].description}</span>
      </p>
      <p>{Math.round(day.main.temp)}°C</p>
    </div>
  ));

  return errorSearch.error ? (
    <div></div>
  ) : (
    <div className="weather_forecast">
      <button className="btn more_info" disabled={enabledBtn} onClick={() => setHiddenWeather(!hiddenWeather)}>
        {hiddenWeather ? "Показать погоду на 5 дней ▼" : "Скрыть погоду за 5 дней ▲"}
      </button>

      <div className={hidden}>{renderOtherDays}</div>
    </div>
  );
}
