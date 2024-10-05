import React from 'react';
import './barChart.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const MyBarChart = (apiData) => {
    // console.log(apiData)
    const data = apiData.content

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#3B621D" />
    </BarChart>
  );
};
export default MyBarChart;