import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { faHome, faCloudRain, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const key = "0550b3a23b9c892ac8b4bff41f019f8e";
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=37.532600&lon=127.024612&units=metric&
        exclude=hourly,daily&appid=${key}`);
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { current, daily, hourly } = data;

  if (!data) return null;

  return (
    <div className="App">
      <FontAwesomeIcon icon={faCloudRain} size="10x" />
      <FontAwesomeIcon icon={faSun} size="10x" />
      <h2>
        Today's
        {current.temp}
      </h2>
      <ul>
        <h3>Hourly</h3>
        {hourly.map((h) => {
          return (
            <li key={h.dt}>
              {h.temp}, {h.weather[0].description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
