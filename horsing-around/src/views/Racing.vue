<template>
  <div>
    <div class="AllRaces">
      <SideBar />
      <div class="content">
        <RaceCard />
      </div>
    </div>
    <RaceAnalysis />
  </div>

</template>

<script>
// Dependency should be RacingPage - RaceCard
import SideBar from "@/components/RacingPage/SideBarComponent/Side-Bar.vue";
import RaceAnalysis from "@/components/RaceAnalysis.vue";
import RaceCard from "@/components/RacingPage/RaceCard.vue";

export default {
  name: "App",
  components: {
    SideBar,
    RaceCard,
    RaceAnalysis,
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
  height: 100vh;
  width: 100vw;
}

.content {
  background-color: #f1ecec;
  border-radius: 20px;
}
</style>
