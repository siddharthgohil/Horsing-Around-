<template>
  <div>
    <div class="AllRaces">
      <SideBar @changeRace="display($event)" />
      <div class="content">
        <RaceTitlePlaceHolder :raceNum="raceNum" />
        <RacingPositionsGraph ref="positions" />
        <RacingTable :raceNum="raceNum" />
        <RaceAnalysis :raceNum="raceNum" />
        <NewsTicker />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/RacingPage/SideBarComponent/Side-Bar.vue";
import RaceTitlePlaceHolder from "@/components/RacingPage/RaceTitlePlaceHolder.vue";
import RaceAnalysis from "@/components/RacingPage/RaceAnalysis.vue";
import RacingPositionsGraph from "@/components/RacingPage/RacingPositionsGraph.vue";
import RacingTable from "@/components/RacingPage/RacingTable.vue";
import NewsTicker from "@/components/RacingPage/NewsTicker.vue";

import firebaseApp from "../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  name: "App",
  components: {
    SideBar,
    RacingPositionsGraph,
    RaceAnalysis,
    RaceTitlePlaceHolder,
    NewsTicker,
    RacingTable,
  },
  data() {
    return {
      raceNum: 1,
    };
  },
  mounted() {
    this.display(1);
    this.getChartData(1);
  },
  methods: {
    display(raceNum) {
      this.changeRaceAnalysis(raceNum);
      this.getChartData(raceNum);
    },
    async changeRaceAnalysis(raceNum) {
      this.raceNum = raceNum;
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
      var z = await getDocs(
        collection(db, "Previous_Positions_" + raceNum)
      );
      var counter = 0;
      var chartData2 = { labels: [], datasets: [] };
      var backgroundColors = [
        "green",
        "blue",
        "red",
        "yellow",
        "grey",
        "orange",
      ];
      z.forEach((docs) => {
        let yy = docs.data(); // Row data
        chartData2.labels.push(6-counter + " Day ago");
        chartData2.datasets.push({
          label: yy["name"],
          backgroundColor: backgroundColors[counter],
          borderColor: backgroundColors[counter],
          yAxisID: 'y2',
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
      this.$refs.positions.chartData = chartData2;
    },
  },
};
</script>

<style scoped>
.AllRaces {
  display: grid;
  grid-template-columns: 1fr 8fr;
  background-color: #6a2889;
  height: max-content;
  width: 150;
}

.content {
  background-color: #f1ecec;
  border-radius: 20px;
}
</style>
