import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DonutChart = ({my},{rem}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'doughnut', // Use 'doughnut' type for a donut chart
      data: {
  
        datasets: [{
            //data: [{my}, {rem}] work nhi kr rha
          data: [7,15], // Specify your data values
          backgroundColor: ['rgb(54, 162, 235)', '#438AF61A'],
        }],
      },
      options: {
        // Add any additional options here, such as legend and tooltips
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width={400} height={400} />
    </div>
  );
};

export default DonutChart;
