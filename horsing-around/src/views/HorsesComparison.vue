<template>
  <div class="HorseBG" v-if="user">
    <div class="page">
      <SideBarHorse />
      <div class="content">

        <!-- Racing Positions Graph-->
        <RacingPositionsGraph/>

        <!-- Best Selections-->

         <!-- For Horse Comparison Comp-->
        <HorsesComparisonComp />


      </div>
    </div>
  </div>
    <div class="HorseBG" v-else>
      <h3>This page is only for logged in members</h3>
    </div>
  </template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HorsesComparisonComp from "@/components/HorsePage/HorsesComparisonComp.vue"
import SideBarHorse from "@/components/HorsePage/SideBarHorseComponent/Side-Bar-Horse.vue"
import RacingPositionsGraph from "@/components/RacingPositionsGraph.vue"

export default {
    name: "HorseComparison",
    components: {
        HorsesComparisonComp,
        SideBarHorse,
        RacingPositionsGraph,
    },
    data() {
        return {
            user: false,
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
}
</script>

<style scoped>
.page {
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