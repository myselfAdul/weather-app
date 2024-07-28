import React from "react";
import { IoIosSearch } from "react-icons/io";
import clear from "../Asset/clear.png";
import wind from "../Asset/wind.png";
import snow from "../Asset/snow.png";
import rain from "../Asset/rain.png";
import humidity from "../Asset/humidity.png";
import drizzle from "../Asset/drizzle.png";
import cloud from "../Asset/cloud.png";

const Weather = () => {
  return (
    <div className="weather container-2 ">
      <div className="search-bar container-2">
        <input
          type="text"
          placeholder="Search city"
          className="search-input container-2"
        />
        <IoIosSearch className="search-icon " size={"50px"} />
      </div>
      <div className="container-2">
        <img src={clear} alt="" />
        <p className="temperature font-1">16 dgr c</p>
        <p className="location font-2">London</p>
      </div>

      <div className="weather-data container-2 ">
        <div className="col container-2 font-2">
          <img src={humidity} alt="" />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col container-2 font-2">
          <img src={wind} alt="" />
          <div>
            <p>3.6 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
