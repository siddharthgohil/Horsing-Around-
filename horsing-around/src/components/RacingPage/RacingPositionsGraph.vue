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
    :height="40"
    :width="100"
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
  props: {
    getChartData: { type: Function },
  },
  async mounted(){
    this.getChartData()
  },


};
</script>

<style scoped>
#history_positions {
  margin: 40px;
  padding: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: whitesmoke;
}

</style>
