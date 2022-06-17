import React from "react";

export default function ChangeCity({ gettingWeather, gettingWeeklyWeather }) {
  return (
    <div className="form_city">
      <form
        onSubmit={(e) => {
          gettingWeather(e);
          gettingWeeklyWeather(e);
        }}
      >
        <input className="input_city" type="text" name="city" placeholder="Поиск..." />
        <button className="btn">Найти</button>
      </form>
    </div>
  );
}
