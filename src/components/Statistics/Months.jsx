import React, { useState } from 'react'
import { Chart } from "react-google-charts";

const Months = ({ labels, data }) => {

  if (!labels || !data || labels.length === 0 || data.length === 0) {
    return null;
  }

  const formatChartData = () => {
    const chartData = [["Label", "Data"]];
    if (labels && data && labels.length === data.length) {
      labels.forEach((label, index) => {
        chartData.push([label, data[index]]);
      });
    }
    return chartData;
  };

  const chartData = formatChartData();

  return (
    <>
        <div>
        <div className="text-white text-3xl font-bold">Most Active Months</div>
        <hr className="mt-3" />

    <Chart
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{              
            series: [{ color: "#E7711B" }],    
          }}
          rootProps={{ "data-testid": "1" }}
          className="mt-10"
        />
        
      </div>
    </>
  )
}

export default Months
