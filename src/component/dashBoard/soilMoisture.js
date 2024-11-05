import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./soilMoisture.css";
import CircleProgressBar from "../utils/circleProgressBar";

const SoilMoisture = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [selectedDate, setSelectedDate] = useState("");

  // Function to get today's date in "YYYY-MM-DD" format
  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0]; // Standardized format
  };

  // Convert date to "DD/Mon/YYYY" format
  const dateConverter = (dateString) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateObj = new Date(dateString);

    if (isNaN(dateObj)) return dateString; // Return as-is if invalid

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = monthNames[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    // Set default date as today's formatted date
    setSelectedDate(dateConverter(getTodayDate()));
  }, []);

  const soilMoistureData = [
    { totalFields: 25, avgPercentage: 75, title: "High" },
    { totalFields: 8, avgPercentage: 55, title: "Optimal" },
    { totalFields: 45, avgPercentage: 25, title: "Low" },
  ];

  // Handle date input change
  const handleDateChange = (e) => {
    setSelectedDate(dateConverter(e.target.value));
  };

  return (
    <div className="soilMoistureSection">
      <div className="soilMoistureHeading">
        <h3>Soil Moisture</h3>
        <div>
          <label htmlFor="dateInput" className="dateSpan">
            {selectedDate === dateConverter(getTodayDate()) ? "Today" : selectedDate}
          </label>
          <input
            id="dateInput"
            type="date"
            value={getTodayDate() === selectedDate ? getTodayDate() : selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="soilMoistureContentBox">
        {soilMoistureData.map((data) => (
          <div key={data.title} className="progressContent" onClick={() => navigate("/soil")}>
            <h5 className="fieldNum">{data.totalFields} Fields</h5>
            <CircleProgressBar content={data} />
            <h4>{data.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoilMoisture;
