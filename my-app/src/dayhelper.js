export function setDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let output =
    String(date.getDate()).padStart(2, "0") +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    date.getFullYear();
  return output;
}
export function msToTime(timestamp) {
  let a = new Date(timestamp * 1000);

  let hour = String(a.getHours()).padStart(2, "0");
  let min = String(a.getMinutes()).padStart(2, "0");
  let sec = String(a.getSeconds()).padStart(2, "0");
  let time = hour + ":" + min + ":" + sec;
  return time;
}

export function setDay(day) {
  const ms = day * 1000;
  const weekdayName = new Date(ms).toLocaleString("ru", { weekday: "long" });
  return weekdayName;
}

export function setTimezone(timestamp) {
  if (timestamp < 0) {
    return "UTC" + String(timestamp / 3600);
  } else if (timestamp >= 0) {
    return "UTC+" + String(timestamp / 3600);
  }
}
