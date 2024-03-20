import React, { useState } from "react";
import "./WeatherApp.css";



import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

const WeatherApp = () => {
    let api_key = "d6c44c2970cff3b3da129b3ce0e1a1f7";

    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === 0) {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&&units=metric`;
        // c=  `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&unit=Metric&appid=${api_key}`
        let responce = await fetch(url);
        let data = await responce.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temperature[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML = data.name;
        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(clear_icon);
        } else if (
            data.weather[0].icon === "02d" ||
            data.weather[0].icon === "02n"
        ) {
            setWicon(clear_icon);
        } else if (
            data.weather[0].icon === "02d" ||
            data.weather[0].icon === "02n"
        ) {
            setWicon(clear_icon);
        } else if (
            data.weather[0].icon === "03d" ||
            data.weather[0].icon === "03n"
        ) {
            setWicon(drizzle_icon);
        } else if (
            data.weather[0].icon === "04d" ||
            data.weather[0].icon === "04n"
        ) {
            setWicon(drizzle_icon);
        } else if (
            data.weather[0].icon === "09d" ||
            data.weather[0].icon === "09n"
        ) {
            setWicon(rain_icon);
        } else if (
            data.weather[0].icon === "10d" ||
            data.weather[0].icon === "10n"
        ) {
            setWicon(rain_icon);
        } else if (
            data.weather[0].icon === "13d" ||
            data.weather[0].icon === "13n"
        ) {
            setWicon(snow_icon);
        } else {
            setWicon(clear_icon);
        }
    };

    //extra
    // const StyledContainer = Styled.div`
    // width: 600px;
    // height: 800px;
    // margin: auto;
    // margin-top: 40px;
    // border-radius: 12px;
    // background-image: linear-gradient(180deg, #130754 0%, #3b2f80 100%);
    // &:hover {
    //     box-shadow:0px 0px 10px grey;
    // }
    // @media(min-width: 0px) and (max-width:600px){
    //     width: 300px;
    //     height 500px;
    //     border-readius:8px;
        
    // }
    // `;


    return (
        <>
        {/* Navbar starts herer  */}
            <div className="main">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            OpenWeather
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="https://openweathermap.org/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://openweather.co.uk/technology#model">
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://openweather.co.uk/about">
                                        About
                                    </a>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Main Container */}
                <div className="container">
                    <div className="top-bar">
                        <input
                            type="text"
                            className="cityInput"
                            placeholder="Search"
                            defaultValue={"Pune"}
                        />
                        <div
                            className="search_icon"
                            onClick={() => {
                                search();
                            }}
                        >
                            <img src={search_icon} alt="" />
                        </div>
                    </div>
                    <div className="weather-image">
                        <img src={wicon} alt="" />
                    </div>
                    <div className="weather-temp">24°C</div>
                    <div className="weather-location">London</div>
                    <div className="data-container">
                        <div className="element">
                            <img src={humidity_icon} alt="" className="icon" />
                            <div className="data">
                                <div className="humidity-percent">65%</div>
                                <div className="text">Humidity</div>
                            </div>
                        </div>
                        <div className="element">
                            <img src={wind_icon} alt="" className="icon" />
                            <div className="data">
                                <div className="wind-rate">18 km/h</div>
                                <div className="text">Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">This is footer</footer>
            </div>
        </>
    );
};



export default WeatherApp;
