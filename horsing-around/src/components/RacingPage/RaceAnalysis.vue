<template>
  <div>
    <div class="MainHeader">
      <img class="vthing" src="../../assets/images/v-thing.png" />
      <h5 class="RaceAnalysis">Race Analysis for Race {{ raceNum }}</h5>
    </div>
    <div id="RaceAnalysisText"></div>
  </div>
</template>

<script>
import firebaseApp from "../../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);
export default {
  name: "RaceAnalysis",
  props: {
    raceNum: Number,
  },
  async mounted(){
    this.changeRaceAnalysis(1)
  },
  methods: {
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
  },
};
</script>

<style scoped>
.MainHeader {
  width: 95%;
  background-color: #fff;
  height: 50px;
  margin-left: 30px;
  display: flex;
}
.vthing {
  height: 30px;
  float: left;
  margin-left: 30px;
  margin-top: 20px;
}
.RaceAnalysis {
  float: left;
  margin-top: 1%;
  font-weight: 1000;
  margin-left: 30px;
}
#RaceAnalysisText {
  margin-top: 20px;
  margin-left: 30px;
  padding: 20px;
  width: 95%;
  background-color: #fff;
  text-align: left;
}
.pick {
  text-align: left;
}
.pickAnalysis {
  text-align: left;
}
</style>
>
