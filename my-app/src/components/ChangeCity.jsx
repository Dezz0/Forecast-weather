import React from "react";

export default function ChangeCity(props) {
  return (
    <div className="form_city">
      <form onSubmit={props.gettingWeather}>
        <input type="text" name="city" placeholder="Поиск..." />
        <button className="btn">Найти</button>
      </form>
    </div>
  );
}
