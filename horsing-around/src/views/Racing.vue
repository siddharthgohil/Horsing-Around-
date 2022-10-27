<template>
  <div>
    <div class="AllRaces">
      <SideBar @changeRace="display($event)" />
      <div class="content">
        <RaceTitlePlaceHolder :raceNum="raceNum" />
        <RacingPositionsGraph
          ref="positions"
          @changeChart="display(this.raceNum)"
        />
        <RacingTable ref="raceTable" :raceNum="raceNum" />
        <RaceAnalysis ref="raceAnalysis" :raceNum="raceNum" />
        <NewsTicker />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/RacingPage/SideBarComponent/Side-Bar.vue";
import RaceTitlePlaceHolder from "@/components/RacingPage/RaceTitlePlaceHolder.vue";
import RaceAnalysis from "@/components/RacingPage/RaceAnalysis.vue";
import RacingPositionsGraph from "@/components/RacingPositionsGraph.vue";
import RacingTable from "@/components/RacingPage/RacingTable.vue";
import NewsTicker from "@/components/RacingPage/NewsTicker.vue";

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
  methods: {
    display(raceNum){
      this.raceNum = raceNum
      this.$refs.positions.getChartData(raceNum)
      this.$refs.raceAnalysis.changeRaceAnalysis(raceNum)
      this.$refs.raceTable.display(raceNum)
    }
  }
};
</script>

<style scoped>
.AllRaces {
  display: grid;
  /* grid-auto-columns: 100px; */
  grid-template-columns: 20vh 8fr;
  background-color: #6a2889;
  height: max-content;
  width: 250;
}

.content {
  background-color: #f1ecec;
  border-radius: 20px;
}
</style>
