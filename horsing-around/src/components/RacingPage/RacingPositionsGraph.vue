<template>
  <div class="lineGraph">
    <div id="chartdiv">
      <h3 id="chartTitle">Recent {{ selected }} of horses</h3>
      <div id="chartSelector">
        <!-- <label for="cars">Please Select One</label> -->
        <select name="cars" v-model="selected" @click="clicked">
          <option>Racing Positions</option>
          <option>Betting Odds</option></select
        >
      </div>
    </div>
    <Line
      id="line_graph_chart"
      :chart-data="chartData"
      :chart-options="chartOptions"
      :height="180"
      :width="400"
    ></Line>
  </div>
</template>

<script scoped>
import { Line } from "vue-chartjs";

export default {
  name: "RacingPositionsGraph",
  components: {
    Line,
  },
  methods: {
    clicked() {
      this.$emit("changeChart");
    },
  },
  data() {
    return {
      selected: "Racing Positions",
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
              color: "black",
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
              text: "Days Ago",
              color: "black",
              font: {
                size: 20,
                weight: "bold",
              },
            },
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
#line_graph_chart {
  display: block;
  background-color: #fff;
}
#chartdiv {
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  position: relative;
}
#chartTitle {
  flex: 0 1 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
#chartSelector {
  flex: 0 1 auto;
  margin-left: auto;
}
</style>
