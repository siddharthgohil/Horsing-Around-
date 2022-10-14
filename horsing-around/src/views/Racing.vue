<template>
  <div>
    <div class="AllRaces">
      <SideBar />
      <div class="content">
        <RacingPositionsGraph />
        <RacingPage />
        <RaceAnalysis />
        <NewsTicker />
      </div>
    </div>
  </div>
</template>

<script>
// Dependency should be RacingPage - RaceCard
import SideBar from "@/components/RacingPage/SideBarComponent/Side-Bar.vue";
import RaceAnalysis from "@/components/RaceAnalysis.vue";
import RacingPositionsGraph from "@/components/RacingPage/RacingPositionsGraph.vue";
import RacingPage from "@/components/RacingPage/RacingPage.vue";
import NewsTicker from "@/components/NewsTicker.vue";

export default {
  name: "App",
  components: {
    SideBar,
    RacingPositionsGraph,
    RaceAnalysis,
    NewsTicker,
    RacingPage,
  },
  data() {
    return {
      refreshComp: 0,
    };
  },
  methods: {
    change() {
      this.refreshComp += 1;
    },
  },
};
</script>

<style scoped>
.AllRaces {
  display: grid;
  grid-template-columns: 1fr 8fr;
  background-color: #6a2889;
  height: 200vh;
  width: 100vw;
}

.content {
  background-color: #f1ecec;
  border-radius: 20px;
}
</style>
