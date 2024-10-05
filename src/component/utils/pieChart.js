import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

// Define colors for the pie slices
const COLORS = [];

const MyPieChart = ( apiData ) => {
  // Create the data structure for the pie chart
  const data = apiData.content
  console.log(data)

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200} // X coordinate of the center of the pie chart
        cy={200} // Y coordinate of the center of the pie chart
        innerRadius={60} // Inner radius for a donut chart
        outerRadius={120} // Outer radius for the pie chart
        fill="#8884d8"
        dataKey="value"
        label
      >
        {/* Render cells with different colors */}
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
          // <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
export default MyPieChart;