import React, { useEffect, useState, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./soilMoisture.css";
import Header from "../layout/header";
import MyBarChart from "../utils/barChart";
import MyPieChart from "../utils/pieChart";

const SoilMoistureDetails = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); // Access translations
    const predictions = [
        {
          name : "Field 1",
          value : 34
        },
        {
            name : "Field 2",
            value : 30
        },
        {
        name : "Field 3",
        value : 37
        },
        {
        name : "Field 4",
        value : 75
        },
        {
        name : "Field 5",
        value : 63
        },
        {
        name : "Field 6",
        value : 45
        },
        {
        name : "Field 7",
        value : 30
        },
        {
        name : "Field 8",
        value : 56
        },
        {
        name : "Field 9",
        value : 50
        },
        {
        name : "Field 10",
        value : 47
        },
        {
        name : "Field 11",
        value : 66
        }
    ] 
    const realTime = [
        {
            name : "Field 1",
            value : 34,
            color : '#0088FE'
        },
        {
            name : "Field 2",
            value : 30,
            color : '#00C49F'
        },
        {
            name : "Field 3",
            value : 37,
            color : '#FFBB28'
        },
        {
            name : "Field 4",
            value : 75,
            color : '#FF8042'
        },
        {
            name : "Field 5",
            value : 63,
            color : '#A28FEE'
        },
        {
            name : "Field 6",
            value : 45,
            color : '#FC6464'
        },
        {
            name : "Field 7",
            value : 30,
            color : '#82CA9D'
        }
    ]
    return (
        <Fragment>
            <Header/>
            <div className="soilMoistureDetailsSection">
                <div className="predictiveBarContent">
                        <h3 className="predictiveBarHeading">Predictive Analysis (AI Powered)</h3>
                        <div className="predictiveBarGraph">
                            <MyBarChart content = {predictions}/>
                        </div>
                </div>
                <div className="responsibilityChartContent">
                <h3 className="realTimeChartHeading">Real Time Chart (Moisture)</h3>
                    <div className="realTimePieChart">
                        <MyPieChart content = {realTime} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SoilMoistureDetails;
