import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function HoldingsChart({ data }) {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: "Holdings Current Price",
        data: data.map(item => item.price),
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.2)"
      }
    ]
  };

  return (
    <div className="mt-4">
      <h4>Holdings Overview</h4>
      <Line data={chartData} />
    </div>
  );
}

export default HoldingsChart;
