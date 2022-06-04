import React from "react";
import { msToTime, setTimezone } from "../dayhelper";

export default function WeatherToday({ infoCity, errorSearch }) {
  const renderInfoCity = errorSearch.error ? (
    <div className="error_message">
      <h2>Некорректное название города.</h2>
      <p>{errorSearch.errorMessage}</p>
    </div>
  ) : infoCity.length !== 0 ? (
    <div className="city_info">
      <h2>
        {infoCity.name} <span style={{ fontSize: 8 }}>{infoCity.sys.country}</span>
      </h2>
      <div className="container_bar">
        <div className="left_bar">
          <h3>Погода на сегодня:</h3>
          <i className={`owf owf-${infoCity.weather[0].id} owf-3x icon-style`}></i>
          <p>{infoCity.weather[0].description}</p>
          <p>Температура сейчас: {Math.round(infoCity.main.temp)}℃</p>
        </div>
        <div className="right_bar">
          <p>
            <span>Восход по МСК:</span>
            <span>{msToTime(infoCity.sys.sunrise)}</span>
          </p>
          <p>
            <span>Закат по МСК:</span>
            <span>{msToTime(infoCity.sys.sunset)}</span>
          </p>
          <p>
            <span>Атмосферное давление:</span>
            <span>{infoCity.main.pressure} мм рт. ст.</span>
          </p>
          <p>
            <span>Часовой пояс равен:</span>
            <span>{setTimezone(infoCity.timezone)}</span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="greetings">
      <h2>Введите название города</h2>
    </div>
  );

  return <div className="container_city">{renderInfoCity}</div>;
}
