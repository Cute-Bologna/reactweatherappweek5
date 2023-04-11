import React from "react";
import "./Weather.css";


export default function Weather() {
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-control"/>
            </div>
            <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
            </div>
            </div>

        </form>
        <h1> Beirut</h1>
        <ul>
            <li>
                Wednesday 07:00
            </li>
            <li>Mostly Cloudy</li>
            
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="*" alt="mostlycloudy"/>
                6&deg;C
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            percipitation: 15%
                        </li>
                        <li>
                            Humidity: 69%
                        </li>
                        <li>
                            Windspeed: 9mph
                        </li>
                    </ul>
                </div>
            </div>
            </div>

}