import React from "react";
import { Bar } from "react-chartjs-2";
import { products } from "../UserInfo/Products";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Histogram_Chart() {
  const data = {
    labels: products
      .sort((a, b) => b.data - a.data)
      .slice(0, 10)
      .map((item) => item.key),
    datasets: [
      {
        label: "Product",
        data: products
          .sort((a, b) => b.data - a.data)
          .slice(0, 10)
          .map((item) => item.data),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div>
        <Bar data={data} style={{ height: "700px", width: "500px" }} />
      </div>
    </div>
  );
}

export default Histogram_Chart;
