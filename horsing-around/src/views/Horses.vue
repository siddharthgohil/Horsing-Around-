<template>
  <div class="HorseBG" v-if="user">
    
    <div class="AllHorses">
      <SideBarHorse ref="sideBarRef" @changeTab="display($event)" />
      
      <div class="content" v-if="allHorsesPage">
        <div>
          <AllHorses />
          <VthingTop />
          <IndividualHorseStats />
          <IndividualHorseRaceStats />
          <IndividualHorseTrainer />
          <VthingBottom />
          <IndividualHorseAllRaceStats />
        </div>
      </div>
      <div class="content" v-if="ComparisonPage">
        <div class="upper_portion">
          <RacingPositionsGraph class="graph" />
          <BestPerformers />
        </div>
        <HorseComparisonDiv />
        <HorsesComparisonComp />
      </div>
    </div>
  </div>

  <div class="HorseBG" v-else>
    <h3>This page is only for logged in members</h3>
  </div>
</template>

<script>
import SideBarHorse from "@/components/HorsePage/SideBarHorseComponent/Side-Bar-Horse.vue";

import AllHorses from "@/components/HorsePage/AllHorses.vue";



/* For Individual horse Page */
import VthingTop from "@/components/HorsePage/FixedComponent/VthingTop.vue";
import VthingBottom from "@/components/HorsePage/FixedComponent/VthingBottom.vue";
import IndividualHorseStats from "@/components/HorsePage/IndividualHorseStats.vue";
import IndividualHorseTrainer from "@/components/HorsePage/IndividualHorseTrainer.vue";
import IndividualHorseRaceStats from "@/components/HorsePage/IndividualHorseRaceStats.vue";
import IndividualHorseAllRaceStats from "@/components/HorsePage/IndividualHorseAllRaceStats.vue";

import RacingPositionsGraph from "@/components/RacingPositionsGraph.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";


import HorseComparisonDiv from "@/components/HorsePage/HorseComparisonDiv.vue"
import HorsesComparisonComp from "@/components/HorsePage/HorsesComparisonComp.vue";
import BestPerformers from "@/components/HorsePage/BestPerformers.vue";

export default {
  name: "HorseView",
  components: {
    SideBarHorse,
    AllHorses,
    //HorsesPage,
    RacingPositionsGraph,
    IndividualHorseRaceStats,
    IndividualHorseTrainer,
    IndividualHorseAllRaceStats,
    IndividualHorseStats,
    VthingTop,
    VthingBottom,
    HorsesComparisonComp,
    HorseComparisonDiv,
    BestPerformers,
  },
  data() {
    return {
      user: false,
      currTab: "AllHorses",
      allHorsesPage: true,
      ComparisonPage: false,
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
  methods: {
    display(currTab) {
      this.$refs.sideBarRef.changeColors(currTab);
      this.allHorsesPage = false;
      this.ComparisonPage = false;
      if (currTab == "Comparison") {
        this.ComparisonPage = true;
      }
      else {
        this.allHorsesPage = true;
      }
    },
  },
};
</script>

<style scoped>
.AllHorses {
  display: grid;
  grid-template-columns: 1fr 8fr;
  background-color: #6a2889;
  height: 100%;
  width: 150;
}
.HorseBG {
  height: max-content;
}

.content {
  background-color: #f1ecec;
  border-radius: 20px;
}

.upper_portion {
  flex-direction: row;
  display: flex;
}

.graph {
  width: 70%;
}

.HorseComparison {
  display: grid;
  grid-template-columns: 6fr 4fr;
  width: 100%;

}
</style>
