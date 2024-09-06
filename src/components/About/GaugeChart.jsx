import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = ({ value, label, maxValue }) => {
  const data = {
    labels: ["", ""],
    datasets: [
      {
        data: [value, maxValue - value], // maxValue is dynamic
        backgroundColor: ["#f3a108", "#e0e0e0"], // Vibrant color for the filled part and neutral for the remaining
        borderWidth: 0,
        cutout: "80%", // Hollow out the center
        rotation: -90, // Start the chart from the bottom
        circumference: 180, // Create a semicircle
      },
    ],
  };

  const options = {
    rotation: 270,
    circumference: 180,
    plugins: {
      tooltip: { enabled: false }, // Disable tooltips
    },
    animation: {
      duration: 6000, // Set the animation duration to 3000ms (3 seconds)
    },
    cutoutPercentage: 70, // The higher this value, the smaller the inner radius of the chart
    maintainAspectRatio: false, // Prevents the chart from resizing
  };

  return (
    <div
      style={{
        width: 200,
        height: 120,
        backgroundColor: "#2c2f33", // Dark background for contrast
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
        position: "relative",
      }}
    >
      <Doughnut data={data} options={options} />
      <div
        style={{
          textAlign: "center",
          marginTop: "-40px",
          color: "#fff", // White text color for contrast
        }}
      >
        <h3
          style={{
            fontSize: "28px",
            margin: 0,
            fontWeight: "bold",
            color: "#ff9800", // Vibrant orange color for the number
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
          }}
        >
          {value}
        </h3>
        <p
          style={{
            fontSize: "16px",
            margin: 0,
            color: "#b0bec5", // Subtle grey for the label
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default GaugeChart;
