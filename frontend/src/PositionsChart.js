import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PositionsChart({ data }) {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: "Positions Quantity",
        data: data.map(item => item.qty),
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#8AFFC1", "#E684FF", "#84C2FF"
        ],
      }
    ]
  };

  return (
    <div className="mt-4" style={{ width: "100%", height: "400px", alignContent:"end"}}>
      <h4>Positions Overview</h4>
      <Doughnut data={chartData} />
    </div>
  );
}

export default PositionsChart;
