import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const MyLineChart = ( {content} ) => {
  // Create the data structure for the line chart
  const {data, strokeColor} = content

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke={strokeColor} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke={strokeColor} strokeWidth={5} />
    </LineChart>
  );
};
export default MyLineChart;


// grenish #213321
// yellow #ffc107
