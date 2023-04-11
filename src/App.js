import React from "react";
import Weather from "./Weather";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by Adessa Morciglio and is{" "}
      <a
        href="https://github.com/Cute-Bologna/reactweatherappweek5.git"
        rel="noreferrer"
        target="_blank"
      >
        open sourced on GitHub
      </a>
      </footer>
    </div>
    </div>
  );
}


