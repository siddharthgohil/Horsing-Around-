<template>
  <div class="HorseBG" v-if="user">
    <div class="AllHorses">
      <SideBarHorse />
      <div class="content">
        <RaceTitlePlaceHolder />
        <RacingPositionsGraph
          ref="positions"
          @changeChart="display(this.raceNum)"
        />
        <HorsesPage />
      </div>
    </div>
  </div>
  <div class="HorseBG" v-else>
    <h3>This page is only for logged in members</h3>
  </div>
</template>

<script>
import HorsesPage from "@/components/HorsePage/HorsesPage.vue";
import SideBarHorse from "@/components/HorsePage/SideBarHorseComponent/Side-Bar-Horse.vue";
import RaceTitlePlaceHolder from "@/components/RacingPage/RaceTitlePlaceHolder.vue";
import RacingPositionsGraph from "@/components/RacingPositionsGraph.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "HorseView",
  components: {
    HorsesPage,
    SideBarHorse,
    RacingPositionsGraph,
    RaceTitlePlaceHolder,
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
  height: 100vh;
}

.content {
  background-color: #f1ecec;
  border-radius: 20px;
}
</style>
