import React from "react";

export default function ChangeCity(props) {
  return (
    <div>
      <form onSubmit={props.gettingWeather}>
        <input type="text" name="city" placeholder="Город" />
        <button>Найти</button>
      </form>
    </div>
  );
}
