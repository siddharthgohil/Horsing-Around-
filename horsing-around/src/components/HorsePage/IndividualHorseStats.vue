<template>
  <div class="HorseStats">
    <div id="HorseInfo"></div>
  </div>
</template>

<script>
import firebaseApp from "../../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    name: 'IndividualHorseStats',
    props: {
    raceNum: Number,
  },
  async mounted(){
    this.changeRaceAnalysis(1)
  },
  methods: {
    async changeRaceAnalysis(raceNum) {
      let z = await getDocs(
        collection(db, "Horse" + raceNum + "_Info")
      );
      var container = document.getElementById("HorseInfo");
      if (container != null) {
        container.innerHTML = "";
        z.forEach((docs) => {
          let yy = docs.data(); // Row data
          container.innerHTML = 'Description:' + yy.Description;
        });
      }
    },
  },
};
</script>

<style scoped>
#HorseInfo {
  margin: 30px;
  padding: 20px;
  width: 100%;
  background-color: #fff;
  text-align: left;
}
.info {
  text-align: left;
}

</style>