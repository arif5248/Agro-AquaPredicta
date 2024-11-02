import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./weatherDetails.css";
import Header from "../layout/header";
import Weather from "../dashBoard/weather";

import sunny from "../../images/Sunny.gif";
import windSunny from "../../images/Windy+Sunny.gif";
import rainy from "../../images/Rainy.gif";
import cloudy from "../../images/Cloudy.gif";

const WeatherDetails = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); // Access translations

    const weatherData = [
        {
            dayName: 'Friday',
            weatherInfo: {
                img: sunny,
                title: 'Sunny',
            },
            temp: '42°C / 28°C'
        },
        {
            dayName: 'Saturday',
            weatherInfo: {
                img: windSunny,
                title: 'Sunny & Wind',
            },
            temp: '38°C / 22°C'
        },
        {
            dayName: 'Sunday',
            weatherInfo: {
                img: cloudy,
                title: 'Cloudy',
            },
            temp: '30°C / 22°C'
        },
        {
            dayName: 'Monday',
            weatherInfo: {
                img: rainy,
                title: 'Rainy',
            },
            temp: '28°C / 18°C'
        },
        {
            dayName: 'Tuesday',
            weatherInfo: {
                img: rainy,
                title: 'Rainy',
            },
            temp: '30°C / 20°C'
        },
        {
            dayName: 'Wednesday',
            weatherInfo: {
                img: windSunny,
                title: 'Winds & Sunny',
            },
            temp: '28°C / 18°C'
        },
        {
            dayName: 'Thursday',
            weatherInfo: {
                img: sunny,
                title: 'Sunny',
            },
            temp: '38°C / 21°C'
        }
    ];

    return (
        <Fragment>
            <Header />
            <div className="wetherDetailsSection">
                <h3 className="weatherDetailsHeading">7 Days Forecast</h3>
                <Weather />
                <table className="weatherTable">
                    <tbody>
                        {
                            weatherData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.dayName}</td>
                                    <td>
                                        <img src={data.weatherInfo.img} alt={data.weatherInfo.title} />
                                        {data.weatherInfo.title}
                                    </td>
                                    <td>{data.temp}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default WeatherDetails;
