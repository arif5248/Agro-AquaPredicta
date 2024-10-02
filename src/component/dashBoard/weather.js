import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./weather.css";
import sunny from "../../images/Sunny.gif";
import windSunny from "../../images/Windy+Sunny.gif";
import rainy from "../../images/Rainy.gif";
import cloudy from "../../images/Cloudy.gif";

import temperature from "../../images/temperature.png";
import precipitation from "../../images/precipitation.png";
import humidity from "../../images/humidity.png";
import wind from "../../images/wind-turbine (1).png";
import sunIcon from "../../images/sun.png";

const Weather = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); // Access translations

    const weatherType = [
        {
            type: "sunny",
            imgSrc: sunny,
        },
        {
            type: "windSunny",
            imgSrc: windSunny,
        },
        {
            type: "rainy",
            imgSrc: rainy,
        },
        {
            type: "cloudy",
            imgSrc: cloudy,
        }
    ]
    const weatherComponent = [
        {
            title:"Soil temp",
            imgSrc: temperature,
            value:"22°C"
        },
        {
            title:"Humidity",
            imgSrc: humidity,
            value:"59%"
        },
        {
            title:"Wind",
            imgSrc: wind,
            value:"6m/s"
        },
        {
            title:"Precipitation",
            imgSrc: precipitation,
            value:"0mm"
        }
    ]
    const currentWeatherType = "sunny"

  return (
    <div className="weatherSection"> 
        <div className="weatherLeft">
            <div className="addressDateAndTemp">
                <div className="addressAndDate">
                    <h5>Pahartoli, Raozan</h5>
                    <p>Tuesday, 1st October 2024</p>
                </div>
            </div>
            <div className="Temp">
                <h3>23°C</h3>
            </div>
            <div className="weatherComponent">
            {
                weatherComponent.map((comp)=>{
                    return(
                        <div key={comp.title} className="weatherCompDetails">
                            <img src={comp.imgSrc} alt={comp.title}/>
                            <p>{comp.value}<br/>{comp.title}</p>
                        </div>
                    )
                })
            }
            </div>
            <div className="sunPosition">
                {/* SVG for sunrise, sunset, and moving sun */}
                <svg width="300" height="75" viewBox="0 20 300 100">
                    {/* Dotted curve line */}
                    <path
                        d="M 30,80 Q 150,10 270,80"
                        stroke="black"
                        strokeWidth="2"
                        strokeDasharray="5,5" // Dotted effect
                        fill="transparent"
                    />
                    {/* Sunrise point */}
                    <circle cx="30" cy="80" r="5" fill="orange" />
                    <text x="30" y="100" fontSize="12" textAnchor="middle">Sunrise</text>
                    {/* Sunset point */}
                    <circle cx="270" cy="80" r="5" fill="orange" />
                    <text x="270" y="100" fontSize="12" textAnchor="middle">Sunset</text>
                    {/* Moving sun */}
                    <image href={sunIcon} x="150" y="40" height="30px" width="30px" /> {/* Update x based on time */}
                </svg>
            </div>
        </div>
        <div className="weatherRight">
            {
                weatherType.map((weather)=>{
                    if(weather.type === currentWeatherType){
                        return(
                            <img key={weather.type} src={weather.imgSrc} alt={weather.type}/>
                        )
                    }
                })
            }
        </div>
    </div>
  );
};

export default Weather;
