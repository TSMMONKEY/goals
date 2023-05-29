(async function () {
  const data = [
    { Day: "Mon", count: 100, revenue: 1000 },
    { Day: "Tue", count: 200, revenue: 2000 },
    { Day: "Wed", count: 150, revenue: 1500 },
    { Day: "Thu", count: 244, revenue: 2500 },
    { Day: "Fri", count: 220, revenue: 2200 },
    { Day: "Sat", count: 355, revenue: 3000 },
    { Day: "Sun", count: 883, revenue: 2800 },
    // Add more data points for the bar graph
    //   { Day: 2017, count: 182, revenue: 1800 },
    //   { Day: 2018, count: 120, revenue: 1200 },
    //   { Day: 2019, count: 202, revenue: 2400 },
    // ...
  ];

  new Chart(document.getElementById("myChartCanvas"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.Day),
      datasets: [
        {
          label: "Acquisitions by Day",
          data: data.map((row) => row.count),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Revenue by Day",
          data: data.map((row) => row.revenue),
          type: "line",
          fill: false,
          borderColor: "purple",
          tension: 0.1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
})();

// Radar Graph
const data = {
  labels: [
    "Speed",
    "Strength",
    "Intelligence",
    "Stamina",
    "Durability",
    "Leadership",
  ],
  datasets: [
    {
      label: "Batman",
      data: [9, 8, 7, 6, 5, 4],
    },
    {
      label: "Superman",
      data: [10, 9, 8, 7, 6, 5],
    },
  ],
};

const chart = new Chart(document.getElementById("myChart"), {
  type: "radar",
  data,
});
