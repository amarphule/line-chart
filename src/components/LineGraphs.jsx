/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import TotalHours from "../data/dummyData.json";

const LineGraphs = () => {
  const [graphFilterOn, setGraphFilterOn] = useState("six-months");
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [],
  });

  const { week, year } = TotalHours;

  const weekLabels = week.map((day) => day.label);
  const weekHours = week.map((day) => day.hrs);

  const sixMonths = year.slice(0, 6);
  const sixMonthsLabels = sixMonths.map((month) => month.label);
  const sixMonthsHours = sixMonths.map((month) => month.hrs);

  const yearLabels = year.map((month) => month.label);
  const yearHours = year.map((month) => month.hrs);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        color: "rgb(255, 165, 0)",
        align: "start",
        text: "200 hours",
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
        ticks: {
          padding: 15,
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
          padding: 15,
        },
        suggestedMax: 150,
      },
    },
    maintainAspectRatio: false,
  };

  const handleChange = (e) => {
    setGraphFilterOn(e.target.value);
  };

  useEffect(() => {
    switch (graphFilterOn) {
      case "week":
        setGraphData({
          labels: weekLabels,
          datasets: [
            {
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 240);
                gradient.addColorStop(0, "rgba(250,174,50,1)");
                gradient.addColorStop(1, "rgba(250,174,50,0)");
                return gradient;
              },
              borderColor: "rgb(255, 165, 0)",
              data: weekHours,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        });
        break;
      case "six-months":
        setGraphData({
          labels: sixMonthsLabels,
          datasets: [
            {
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 240);
                gradient.addColorStop(0, "rgba(250,174,50,1)");
                gradient.addColorStop(1, "rgba(250,174,50,0)");
                return gradient;
              },
              borderColor: "rgb(255, 165, 0)",
              data: sixMonthsHours,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        });
        break;
      case "year":
        setGraphData({
          labels: yearLabels,
          datasets: [
            {
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 240);
                gradient.addColorStop(0, "rgba(250,174,50,1)");
                gradient.addColorStop(1, "rgba(250,174,50,0)");
                return gradient;
              },
              borderColor: "rgb(255, 165, 0)",
              data: yearHours,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        });
        break;
      default:
        setGraphData({ labels: [], datasets: [] });
    }
  }, [graphFilterOn]);

  return (
    <div className="graphContainer">
      <div className="graphTitle">
        Total Instrument Hours
        <span>
          <select
            className="graphFilter"
            onChange={handleChange}
            value={graphFilterOn}
          >
            <option value="week">Week</option>
            <option value="six-months">6 months</option>
            <option value="year">Year</option>
          </select>
        </span>
      </div>
      {graphData.datasets.length > 0 && graphData.labels.length > 0 ? (
        <Line data={graphData} options={options} />
      ) : (
        <h3>Data is not sufficient</h3>
      )}
    </div>
  );
};

export default LineGraphs;
