import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./cropsHealthDetails.css";
import Header from "../layout/header";

import attention from "../../images/Attention.png";
import atRisk from "../../images/AtRisk.png";
import healthyLiving from "../../images/healthy-living.png";

import plantingIcon from "../../images/plant.png";
import expectationYieldIcon from "../../images/expectation.png";
import soilMoistureIcon from "../../images/SoilMoisture.png";
import irrigationIcon from "../../images/watering-plants.png";
import MyLineChart from "../utils/lineChart";



const CropsHealthDetails = () => {
    const { cropsStatus } = useParams();

    const healthData = {
        title : "Healthy",
        iconImage : healthyLiving,
        data : {
            plantingDate : {
                date : "Dec 25",
                description : "60 days of plantation"
            },
            expectedYield : {
                yieldInPercentage : "94%",
                description : ""
            },
            soilMoisture : {
                moistureInPercentage : "79%",
                description : ""
            },
            nextIrrigationDate : {
                date : "Nov 19",
                description : ""
            },
            lineChartData : [
                {
                    name : "Day 1",
                    value : 34
                },
                {
                    name : "Day 2",
                    value : 30
                },
                {
                    name : "Day 3",
                    value : 37
                },
                {
                    name : "Day 4",
                    value : 75
                },
                {
                    name : "Day 5",
                    value : 63
                },
                {
                    name : "Day 6",
                    value : 45
                },
                {
                    name : "Day 7",
                    value : 30
                },
                {
                    name : "Day 8",
                    value : 56
                },
                {
                    name : "Day 9",
                    value : 50
                },
                {
                    name : "Day 10",
                    value : 47
                },
                {
                    name : "Day 11",
                    value : 66
                },
                {
                    name : "Day 12",
                    value : 34
                    },
                    {
                        name : "Day 13",
                        value : 30
                    },
                    {
                        name : "Day 14",
                        value : 75
                    },
                    {
                        name : "Day 15",
                        value : 63
                    },
                    {
                        name : "Day 16",
                        value : 45
                    },
                    {
                        name : "Day 17",
                        value : 30
                    },
                    {
                        name : "Day 18",
                        value : 56
                    },
                    {
                        name : "Day 19",
                        value : 50
                    },
                    {
                        name : "Day 20",
                        value : 47
                    },
                    {
                        name : "Day 21",
                        value : 66
                    },
                    {
                        name : "Day 22",
                        value : 30
                    },
                    {
                        name : "Day 23",
                        value : 37
                    },
                    {
                        name : "Day 24",
                        value : 75
                    },
                    {
                        name : "Day 25",
                        value : 63
                    },
                    {
                        name : "Day 26",
                        value : 45
                    },
                    {
                        name : "Day 27",
                        value : 30
                    },
                    {
                        name : "Day 28",
                        value : 56
                    },
                    {
                        name : "Day 29",
                        value : 50
                    },
                    {
                        name : "Day 30",
                        value : 47
                    },
            ] 

        }
    }
    const attentionData = {
        title : "Need Attention",
        iconImage : attention,
        data : {
            plantingDate : {
                date : "Dec 25",
                description : "60 days of plantation"
            },
            expectedYield : {
                yieldInPercentage : "55%",
                description : ""
            },
            soilMoisture : {
                moistureInPercentage : "46%",
                description : ""
            },
            nextIrrigationDate : {
                date : "Nov 10th",
                description : ""
            },
            lineChartData : [
                {
                    name : "Day 1",
                    value : 34
                },
                {
                    name : "Day 2",
                    value : 30
                },
                {
                    name : "Day 3",
                    value : 37
                },
                {
                    name : "Day 4",
                    value : 75
                },
                {
                    name : "Day 5",
                    value : 63
                },
                {
                    name : "Day 6",
                    value : 45
                },
                {
                    name : "Day 7",
                    value : 30
                },
                {
                    name : "Day 8",
                    value : 56
                },
                {
                    name : "Day 9",
                    value : 50
                },
                {
                    name : "Day 10",
                    value : 47
                },
                {
                    name : "Day 11",
                    value : 66
                },
                {
                    name : "Day 12",
                    value : 34
                    },
                    {
                        name : "Day 13",
                        value : 30
                    },
                    {
                        name : "Day 14",
                        value : 75
                    },
                    {
                        name : "Day 15",
                        value : 63
                    },
                    {
                        name : "Day 16",
                        value : 45
                    },
                    {
                        name : "Day 17",
                        value : 30
                    },
                    {
                        name : "Day 18",
                        value : 56
                    },
                    {
                        name : "Day 19",
                        value : 50
                    },
                    {
                        name : "Day 20",
                        value : 47
                    },
                    {
                        name : "Day 21",
                        value : 66
                    },
                    {
                        name : "Day 22",
                        value : 30
                    },
                    {
                        name : "Day 23",
                        value : 37
                    },
                    {
                        name : "Day 24",
                        value : 75
                    },
                    {
                        name : "Day 25",
                        value : 63
                    },
                    {
                        name : "Day 26",
                        value : 45
                    },
                    {
                        name : "Day 27",
                        value : 30
                    },
                    {
                        name : "Day 28",
                        value : 56
                    },
                    {
                        name : "Day 29",
                        value : 50
                    },
                    {
                        name : "Day 30",
                        value : 47
                    },
            ] 

        }
    }
    const riskData = {
        title : "At Risk",
        iconImage : atRisk,
        data : {
            plantingDate : {
                date : "Dec 25",
                description : "60 days of plantation"
            },
            expectedYield : {
                yieldInPercentage : "25%",
                description : ""
            },
            soilMoisture : {
                moistureInPercentage : "19%",
                description : ""
            },
            nextIrrigationDate : {
                date : "Nov 1st",
                description : ""
            },
            lineChartData : [
                {
                    name : "Day 1",
                    value : 34
                },
                {
                    name : "Day 2",
                    value : 30
                },
                {
                    name : "Day 3",
                    value : 37
                },
                {
                    name : "Day 4",
                    value : 75
                },
                {
                    name : "Day 5",
                    value : 63
                },
                {
                    name : "Day 6",
                    value : 45
                },
                {
                    name : "Day 7",
                    value : 30
                },
                {
                    name : "Day 8",
                    value : 56
                },
                {
                    name : "Day 9",
                    value : 50
                },
                {
                    name : "Day 10",
                    value : 47
                },
                {
                    name : "Day 11",
                    value : 66
                },
                {
                    name : "Day 12",
                    value : 34
                },
                {
                    name : "Day 13",
                    value : 30
                },
                {
                    name : "Day 14",
                    value : 75
                },
                {
                    name : "Day 15",
                    value : 63
                },
                {
                    name : "Day 16",
                    value : 45
                },
                {
                    name : "Day 17",
                    value : 30
                },
                {
                    name : "Day 18",
                    value : 56
                },
                {
                    name : "Day 19",
                    value : 50
                },
                {
                    name : "Day 20",
                    value : 47
                },
                {
                    name : "Day 21",
                    value : 66
                },
                {
                    name : "Day 22",
                    value : 30
                },
                {
                    name : "Day 23",
                    value : 37
                },
                {
                    name : "Day 24",
                    value : 75
                },
                {
                    name : "Day 25",
                    value : 63
                },
                {
                    name : "Day 26",
                    value : 45
                },
                {
                    name : "Day 27",
                    value : 30
                },
                {
                    name : "Day 28",
                    value : 56
                },
                {
                    name : "Day 29",
                    value : 50
                },
                {
                    name : "Day 30",
                    value : 47
                },
            ] 

        }
    }

    const data = (() => {
        if (cropsStatus === "Healthy") return healthData;
        if (cropsStatus === "Need Attention") return attentionData;
        if (cropsStatus === "At Risk") return riskData;
        return {}; // default to an empty object if no match
    })();
    
    const content = {
        data : data.data.lineChartData,
        strokeColor : cropsStatus === "Healthy" ? '#213321' : cropsStatus === "Need Attention" ? '#ffc107' : 'red'
    }

    
    const navigate = useNavigate();
    const { t } = useTranslation(); // Access translations

    

    return (
        <Fragment>
            <Header />
            <div className="cropHealthDetailsSection">
                <div className="cropHealthDetailsHeadingSection">
                    <img style={{width: '40px', paddingRight : '10px'}} src={data.iconImage} alt={data.title+'icon'}/>
                    <h3  className="cropHealthDetailsHeading">{data.title}</h3>
                </div>

                <div className="copsHealthSummarySection">

                    <div className="item">
                        <div className="itemLeft">
                            <img src={plantingIcon} alt="planting icon"/>
                            <p>Planting Date</p>
                        </div>
                        <div className="itemRight">
                            <p className="value">{data.data.plantingDate.date}</p>
                            <p className="des">{data.data.plantingDate.description}</p>
                            </div>
                    </div>

                    <div className="item">
                        <div className="itemLeft">
                            <img src={expectationYieldIcon} alt="expectationYieldIcon"/>
                            <p>Expected Yield</p>
                        </div>
                        <div className="itemRight">
                            <p className="value">{data.data.expectedYield.yieldInPercentage}</p>
                            <p className="des">{data.data.expectedYield.description}</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemLeft">
                            <img src={soilMoistureIcon} alt="soilMoistureIcon"/>
                            <p>Soil Moisture</p>
                        </div>
                        <div className="itemRight">
                            <p className="value">{data.data.soilMoisture.moistureInPercentage}</p>
                            <p className="des">{data.data.soilMoisture.description}</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemLeft">
                            <img src={irrigationIcon} alt="irrigationIcon"/>
                            <p>Suggested Irrigation</p>
                        </div>
                        <div className="itemRight">
                            <p className="value">{data.data.nextIrrigationDate.date}</p>
                            <p className="des">{data.data.nextIrrigationDate.description}</p>
                        </div>
                    </div>
                </div>

                <div className="cropHealthChartSection">
                    <h3 style={{color : content.strokeColor}}>Crops Health</h3>
                    <MyLineChart content= {content} />
                </div>
                
            </div>
        </Fragment>
    );
};

export default CropsHealthDetails;
