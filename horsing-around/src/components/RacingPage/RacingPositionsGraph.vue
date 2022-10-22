<template>
<div class="lineGraph">
  <Line
    id="history_positions"
    :chart-data="chartData"
    xtitle="Race Number"
    ytitle="Position"
    title="Recent Form of Horses"
    legend="right"
    loading="Loading..."
    :chart-options="chartOptions"
    :height="150"
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
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      }
    };
  },
};
</script>

<style scoped>
.lineGraph{
  padding: 30px;
}
#history_positions {
  display: block;
  background-color: #fff;
}

</style>
