import React from "react";
import ReactApexChart from "react-apexcharts";

const VacancyChart = () => {
  const option = {
    series: [
      {
        name: "Application Send",
        data: [400, 400, 650, 500, 900, 750, 850],
      },
      {
        name: "Interviews",
        data: [550, 350, 420, 370, 500, 400, 550],
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      colors: ["#F5693D", "#9B88FA"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
        curve: "smooth",
      },
      legend: {
        show: false,
      },
      grid: {
        borderColor: "#EBEBEB",
        strokeDashArray: 6,
      },
      markers: {
        strokeWidth: 6,
        hover: {
          size: 15,
        },
      },
      yaxis: {
        labels: {
          offsetX: -12,
          style: {
            colors: "#787878",
            fontSize: "13px",
            fontFamily: "Poppins",
            fontWeight: 400,
          },
        },
      },
      xaxis: {
        categories: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
          "Week 7",
        ],
        labels: {
          style: {
            colors: "#787878",
            fontSize: "13px",
            fontFamily: "Poppins",
            fontWeight: 400,
          },
        },
      },
      fill: {
        type: "solid",
        opacity: 0.1,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };
  return (
    <div id="chart" className="dashboard-chart" style={{ maxWidth: "100%" }}>
      <ReactApexChart
        options={option.options}
        series={option.series}
        type="area"
        height={400}
      />
    </div>
  );
};

export default VacancyChart;
