import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./healthStatus.css";
import attention from "../../images/Attention.png";
import atRisk from "../../images/AtRisk.png";
import healthyLiving from "../../images/healthy-living.png";
import potatoPlant from "../../images/potatoPlant.png";
import CornPlant from "../../images/CornPlant.png";
import ricePlant from "../../images/Riceplant.png";

const HealthStatus = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); // Access translations

    const healthStatusData = [
        {
            mainImage : ricePlant,
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
        },
        {
            mainImage : CornPlant,
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
        },
        {
            mainImage : potatoPlant,
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
    ]

    return (
        <div className="healthStatusSection">
            <div className="healthHeading">
                <h3>Crop Health Status</h3>
                <div className="allCropsBtn">All Crops</div>
            </div>
            <div className="healthContentBox">    
                {healthStatusData.map((data)=>(
                    <div key={data.title} className="healthContentWrapper" onClick={()=>{navigate(`/cropHealthDetails/${data.title}`)}}>
                        <img className="mainImage" src={data.mainImage} alt={data.title}/>
                        <h5 className="healthTitle">{data.title}</h5>
                        <img className="imageIcon" src={data.iconImage} alt={data.title}/>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthStatus;
