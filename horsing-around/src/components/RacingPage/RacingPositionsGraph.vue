<template>
  <div class="lineGraph">
    <Line
      id="history_positions"
      :chart-data="chartData"
      :chart-options="chartOptions"
      :height="180"
      :width="400"
    ></Line>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";

export default {
  name: "RacingPositionsGraph",
  components: {
    Line,
  },
  props: {
    raceNum: Number,
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y2: {
            position: "left",
            reverse: true,
            labelString: "probability",
            title: {
              display: true,
              padding: 10,
              color: 'black',
              text: "Position",
              font: {
                size: 20,
                weight: "bold",
              },
            },
          },
          xAxes: {
            title: {
              display: true,
              padding: 10,
              text: "Race Number",
              color: 'black',
              font: {
                size: 20,
                weight: "bold",
              },
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Recent Form of Horses",
            color: 'black',
            font: {
              size: 24,
            },
            padding: 10
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.lineGraph {
  padding: 30px;
}
#history_positions {
  display: block;
  background-color: #fff;
}
</style>
