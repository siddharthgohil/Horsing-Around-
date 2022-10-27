<template>
  <div class="HorseBG" v-if="user">
    <div class="AllHorses">
      <SideBarHorse />
      <div class="content">

         <!-- For All horse Page-->
        <AllHorses />


        <!-- For Individual horse Page-->
        <!-- <VthingTop />
        <IndividualHorseStats />
        <IndividualHorseRaceStats />
        <IndividualHorseTrainer />
        <!-- <RacingPositionsGraph
          ref="positions"
          @changeChart="display(this.raceNum)"
        />  -->
        <HorsesPage />
        <VthingBottom />
        <IndividualHorseAllRaceStats /> -->



      <!-- <RacingPositionsGraph
              ref="positions"
              @changeChart="display(this.raceNum)"
            />  -->
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

/* For Individual horse Page
import HorsesPage from "@/components/HorsePage/HorsesPage.vue";
import VthingTop from "@/components/HorsePage/FixedComponent/VthingTop.vue";
import VthingBottom from "@/components/HorsePage/FixedComponent/VthingBottom.vue";
import IndividualHorseStats from "@/components/HorsePage/IndividualHorseStats.vue";
import IndividualHorseTrainer from "@/components/HorsePage/IndividualHorseTrainer.vue";
import IndividualHorseRaceStats from "@/components/HorsePage/IndividualHorseRaceStats.vue";
import IndividualHorseAllRaceStats from "@/components/HorsePage/IndividualHorseAllRaceStats.vue";
*/

// import RacingPositionsGraph from "@/components/RacingPositionsGraph.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "HorseView",
  components: {
  
    SideBarHorse,
    AllHorses,
    //HorsesPage,
    //RacingPositionsGraph,
    IndividualHorseRaceStats,
    IndividualHorseTrainer,
    IndividualHorseAllRaceStats,
    IndividualHorseStats,
    VthingTop,
    VthingBottom*/
  },
  data() {
    return {
      user: false,
      raceNum: 1,
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
    display(raceNum){
      this.raceNum = raceNum
      this.$refs.positions.display(raceNum)
    }
  }
}
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
</style>
