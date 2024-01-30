import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ chartData, title }) => {
  const data = {
    labels: (chartData || []).map((x) => x.label),
    datasets: [
      {
        data: (chartData || []).map((x) => x.value),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      <h3>{title}</h3>
      <Doughnut data={data} />
    </>
  );
};

export default DonutChart;
