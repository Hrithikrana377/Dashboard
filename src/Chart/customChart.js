import { Chart, registerables } from "chart.js";
import { useEffect } from "react";
Chart.register(...registerables);

const CustomChart = ({ chartData }) => {
  let chart;
  const canvasId = `chart-${Math.random()}`;
  let ctx;
  useEffect(() => {
    if (!ctx) {
      ctx = document.getElementById(canvasId).getContext("2d");
    }
    const handleResize = (chart) => {
      console.log("chart chart : ", chartData);
      chart.resize();
    };
    let configuration = {
      type: "bar",
      data: {
        labels: (chartData || []).map((City) => City.city),
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
        },
        responsive: true,
        onResize: handleResize,
        maintainAspectRatio: false,
      },
    };
    if (chart) {
      chart.destroy();
    }
    chart = new Chart(ctx, configuration);
  }, [chartData]);
  return (
    <div style={{ height: "100%" }}>
      <canvas id={canvasId}></canvas>
    </div>
  );
};

export default CustomChart;
