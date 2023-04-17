import React from "react";
import WeatherIcon from "./Weathericon"

export default function WeatherForecastDay(props) {
function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum)
    return `${temperature}`;
}

function maxTemperature() {
  let temperature = Math.round(props.data.temperature.maximum);
  return `${temperature}`;
}

function day() {
    let date= new Date(props.data.time * 1000);
    let day = date.getDay();

let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

    return days[day];
}

    return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.condition.icon} size={33} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-min">{minTemperature()}&deg;</span> 
              {"~"}
              <span className="WeatherForecast-temperature-max">{maxTemperature()}&deg;</span>
            </div>
            </div>
            );
}