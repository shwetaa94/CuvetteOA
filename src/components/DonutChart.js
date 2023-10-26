import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DonutChart = ({ my}) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
      type: 'doughnut', // Use 'doughnut' type for a donut chart
      data: {
        datasets: [{
          data: [my, 15-my], // Use an array with both values
          backgroundColor: ['rgb(54, 162, 235)', '#438AF61A'],
        }],
      },
      options: {
        // Add any additional options here, such as legend and tooltips
      },
    });

    return () => {
      // Cleanup function to destroy the chart instance when the component unmounts
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [my]);

  return (
    <div>
      <canvas ref={chartRef} width={400} height={400} />
    </div>
  );
};

export default DonutChart;
