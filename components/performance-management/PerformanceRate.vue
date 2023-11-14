<template>
  <div class="bg-white w-full p-4 rounded-lg">
    <div class="">
      <h1 class="text-xl text-[#39404F] font-medium">Performance Rate</h1>
      <div class="flex space-x-3 items-center">
        <p class="text-[#585E6C] text-xs">Average performance rate</p>
        <p
          class="text-[#F6AF45] px-2 py-1 bg-[#F6AF45] bg-opacity-10 rounded-lg text-xs font-medium"
        >
          50%
        </p>
      </div>
    </div>
    <div class="my-2">
      <canvas ref="lineChart"></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

export default {
  setup() {
    const lineChart = ref(null);

    onMounted(() => {
      renderChart();
    });

    function renderChart() {
      const ctx = lineChart.value.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Q1", "Q2", "Q3", "Q4"],
          datasets: [
            {
              label: "Performance Graph",
              data: [0, 50, 25, 100, 75],
              borderColor: "black",
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            y: {
              title: {
                display: true,
                text: "(Performance Rate)", // Y-axis title
              },
              min: 0,
              max: 100,
              ticks: {
                callback: function (value) {
                  return value + "%";
                },
                stepSize: 25,
                font: {
                  weight: "bold", // Make the tick labels bolder
                },
              },
            },
            x: {
              title: {
                display: true,
                text: "(Quarter)", // X-axis title
              },
              grid: {
                drawOnChartArea: false,
                display: false, // Set to false to remove vertical grid lines
                drawTicks: false,
              },
              ticks: {
                font: {
                  weight: "bold", // Make the tick labels bolder
                },
              },
            },
          },
        },
      });
    }

    return {
      lineChart,
    };
  },
};
</script>

<style>
/* Add any additional styling here */
</style>
