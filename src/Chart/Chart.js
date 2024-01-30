import ReactEcharts from "echarts-for-react";

const Chart = ({ chartData, type, name }) => {
  // Sample data for the bar chart
  const data = {
    categories: (chartData || []).map((x) => x.label),
    series: [
      {
        name: name,
        data: (chartData || []).map((x) => x.value),
        type: type,
      },
    ],
  };

  // ECharts options for the bar chart
  const options = {
    title: {
      text: name,
    },
    xAxis: {
      type: "category",
      data: data.categories,
    },
    yAxis: {
      type: "value",
    },
    series: data.series.map((series) => ({
      name: series.name,
      data: series.data,
      type: series.type,
    })),
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <ReactEcharts option={options} style={{ height: "100%", width: "100%" }} />
  );
};

export default Chart;
