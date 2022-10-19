<template>
  <div>
    <div class="AllRaces">
      <SideBar />
      <div class="content">
        <RacingPositionsGraph />
        <RacingTable />
        <RaceAnalysis />
        <NewsTicker />
      </div>
    </div>
  </div>
</template>

<script>
// Dependency should be RacingPage - RaceCard
import SideBar from "@/components/RacingPage/SideBarComponent/Side-Bar.vue";
import RaceAnalysis from "@/components/RacingPage/RaceAnalysis.vue";
import RacingPositionsGraph from "@/components/RacingPage/RacingPositionsGraph.vue";
import RacingTable from "@/components/RacingPage/RacingTable.vue";
import NewsTicker from "@/components/RacingPage/NewsTicker.vue";

export default {
  name: "App",
  components: {
    SideBar,
    RacingPositionsGraph,
    RaceAnalysis,
    NewsTicker,
    RacingTable,
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
