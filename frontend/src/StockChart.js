import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function StockChart({ data, ticker }) {
  const chartData = {
    labels: data.map(d => d.date.toString().split("T")[0]),
    datasets: [
      {
        label: `${ticker} Price`,
        data: data.map(d => d.close),
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.1)"
      }
    ]
  };

  return (
    <div>
      <h2>{ticker} - Stock Price</h2>
      <Line data={chartData} />
    </div>
  );
}

export default StockChart;
