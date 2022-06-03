import React from "react";
import { currentTime } from "../dayhelper";

export default function WeatherToday({ infoCity }) {
  function msToTime(timestamp) {
    let a = new Date(timestamp * 1000);
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = hour + ":" + min + ":" + sec;
    return time;
  }
  let currentDay = [];
  let minArray = [];
  let maxArray = [];

  if (infoCity.length !== 0) {
    currentDay = infoCity.list.filter((i) => i.dt_txt.includes(currentTime()));

    for (let i of currentDay) {
      minArray.push(Number(i.main.temp_min));
      maxArray.push(Number(i.main.temp_max));
    }
  }

  return (
    <div>
      {infoCity.length !== 0 ? (
        <>
          <h2>{infoCity.city.name}</h2>
          <h3>Погода на сегодня:</h3>
          <p>{infoCity.list[0].weather[0].description}</p>
          <p>Восход в {msToTime(infoCity.city.sunrise)}</p>
          <p>Закат в {msToTime(infoCity.city.sunset)}</p>
          <p>Минимальная температура {Math.round(Math.min(...minArray))}℃</p>
          <p>Максимальная температура {Math.round(Math.max(...maxArray))}℃</p>
        </>
      ) : (
        <h2>Введите город</h2>
      )}
    </div>
  );
}
