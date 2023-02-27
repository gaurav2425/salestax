import React from "react";
import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return <Bubble data={chartData} />;
}

export default BarChart;
