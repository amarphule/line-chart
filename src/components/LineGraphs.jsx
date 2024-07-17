/* eslint-disable no-unused-vars */
import Chart from "chart.js/auto";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "200 hrs", // Hide dataset label
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 290);
        gradient.addColorStop(0, "rgba(250,174,50,1)");
        gradient.addColorStop(1, "rgba(250,174,50,0)");
        return gradient;
      },
      borderColor: "rgb(255, 165, 0)",
      data: [50, 5, 60, 10, 15, 80],
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Total Instrument hours",
      align: "start",
      font: {
        size: 18,
      },
    },
    subtitle: {
      display: true,
      align: "start",
      text: "200 hours",
      color: "rgb(255, 165, 0)",
      font: {
        size: 24,
      },
      padding: {
        bottom: 40,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        stepSize: 50,
      },
      suggestedMax: 200,
    },
  },
  maintainAspectRatio: false,
};

const LineGraphs = () => {
  return (
    <div style={{ width: "40vw", height: "50vh" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraphs;
