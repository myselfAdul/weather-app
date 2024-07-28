import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import clear from "../Asset/clear.png";
import wind from "../Asset/wind.png";
import snow from "../Asset/snow.png";
import rain from "../Asset/rain.png";
import humidity from "../Asset/humidity.png";
import drizzle from "../Asset/drizzle.png";
import cloud from "../Asset/cloud.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": cloud,
    "04n": cloud,

    "11d": rain,
    "11n": rain,

    "10d": drizzle,
    "10n": drizzle,
    "09d": rain,
    "09n": rain,

    "13d": snow,
    "13n": snow,
  };

  const search = async (city) => {
    if (city == "") {
      alert("Enter a City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return
      }

      console.log(data);

      const icon = allIcons[data.weather[0].icon] || clear;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error in Fetching weather Data");
      // alert("Enter Valid City Name");
    }
  };

  useEffect(() => {
    search("Dhaka");
  }, []);

  return (
    <div className="weather container-2 ">
      <div className="search-bar container-2">
        <input
          type="text"
          placeholder="Search city"
          ref={inputRef}
          className="search-input container-2"
        />
        <IoIosSearch
          className="search-icon "
          size={"50px"}
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <div className="container-2">
            <img src={weatherData.icon} alt="" />
            <p className="temperature font-1">{weatherData.temperature} °C</p>
            <p className="location font-2">{weatherData.location} </p>
          </div>

          <div className="weather-data container-2 ">
            <div className="col container-2 font-2">
              <img src={humidity} alt="" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span className="font-3">Humidity</span>
              </div>
            </div>
            <div className="col container-2 font-2">
              <img src={wind} alt="" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span className="font-3">Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
