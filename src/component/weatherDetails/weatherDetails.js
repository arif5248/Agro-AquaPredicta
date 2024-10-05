import React, { useEffect, useState, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./soilMoisture.css";
import Header from "../layout/header";
import MyBarChart from "../utils/barChart";
import MyPieChart from "../utils/pieChart";

const WeatherDetails = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); // Access translations
    
    return (
        <Fragment>
            <Header/>
            <div className="wetherDetailsSection">
                
            </div>
        </Fragment>
    );
};

export default WeatherDetails;
