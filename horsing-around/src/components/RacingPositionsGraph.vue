<template>
  <div class="lineGraph">
    <div id="chartdiv">
      <h3 id="chartTitle">Recent {{ selected }} of horses</h3>
      <div id="chartSelector">
        <!-- <label for="cars">Please Select One</label> -->
        <select name="cars" v-model="selected" @click="clicked">
          <option>Racing Positions</option>
          <option>Betting Odds</option>
        </select>
      </div>
    </div>
    <Line
      id="line_graph_chart"
      :chart-data="chartData"
      :chart-options="chartOptions"
      :height="height"
      :width="width"
    ></Line>
  </div>
</template>

<script scoped>
import { Line } from "vue-chartjs";

import firebaseApp from "../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  name: "RacingPositionsGraph",
  components: {
    Line,
  },
  data() {
    return {
      selected: "Racing Positions",
      height: 180,
      width: 400,
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
  mounted() {
    this.display(1);
    this.getChartData(1);
  },
  methods: {
    clicked() {
      this.$emit("changeChart");
    },
    display(raceNum) {
      this.changeRaceAnalysis(raceNum);
      this.getChartData(raceNum);
    },
    async changeRaceAnalysis(raceNum) {
      let z = await getDocs(
        collection(db, "RacingAnalysisText_" + String(raceNum))
      );
      var container = document.getElementById("RaceAnalysisText");
      if (container != null) {
        container.innerHTML = "";
        z.forEach((docs) => {
          let yy = docs.data(); // Row data
          container.innerHTML += '<h5 class="pick">' + yy.Title + "</h5>";
          container.innerHTML +=
            '<p class="pickAnalysis">' + yy.Text + "</p><br/>";
        });
      }
    },
    async getChartData(raceNum) {
      var z;
      if (this.selected == "Betting Odds") {
        z = await getDocs(collection(db, "Betting_Odds_" + raceNum));
        this.chartOptions.scales.y2.title.text = "Betting Odds";
      } else {
        z = await getDocs(collection(db, "Previous_Positions_" + raceNum));
      }

      var counter = 0;
      var chartData2 = { labels: [], datasets: [] };
      var backgroundColors = [
        "#FF595E",
        "#FFCA3A",
        "#8AC926",
        "#1982C4",
        "#6A4C93",
        "#5D929E",
      ];
      z.forEach((docs) => {
        let yy = docs.data(); // Row data
        chartData2.labels.push(6 - counter + " Day ago");
        chartData2.datasets.push({
          label: yy["name"],
          backgroundColor: backgroundColors[counter],
          borderColor: backgroundColors[counter],
          yAxisID: "y2",
          data: [
            yy["6RaceAgo"],
            yy["5RaceAgo"],
            yy["4RaceAgo"],
            yy["3RaceAgo"],
            yy["2RaceAgo"],
            yy["1RaceAgo"],
          ],
        });
        counter++;
      });
      this.chartData = chartData2;
    },
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
