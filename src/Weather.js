import React, { useState } from "react";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  ;
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url
    });
    
  }

function search() {
   const apiKey = "6d2f7310aaa7a0o47bf2b04d763t6f29";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);


}

function handleSubmit(event) {
  event.preventDefault();
  search(city);
}

function handleCityChange(event) {
  setCity(event.target.value);

}

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="🌸Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="🔎"
                className="btn btn-outline-light w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
      
    );
  } else {
   search();
    return "Loading..";
  }
}
