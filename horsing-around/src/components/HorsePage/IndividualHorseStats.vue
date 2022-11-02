<template>
  <div id="HorseStats">
    <img id="HorseMugShot" src="../../assets/images/Horse_image.png" />
    <div class="Individual_Details">
      <h5 class="HorseName">Horse Name (yes Horse nickname or something)</h5>
      <table id="Horse_Actual_Stats">
        <tr>
          <td>5yo Br AUS G SH</td>
          <td></td>
          <td>Sire</td>
          <td>Sizzling (AUS)</td>
        </tr>

        <tr>
          <td>MRA Brand Number</td>
          <td>X175</td>
          <td>Dam</td>
          <td>Touch Too Much (AUS)</td>
        </tr>

        <tr>
          <td>Date Foaled</td>
          <td>24/10/2017</td>
          <td>Owner</td>
          <td>STEVEN HAROLD BURRIDGE</td>
        </tr>

        <tr>
          <td>Current Rating</td>
          <td>48</td>
          <td>Trainer</td>
          <td>S BURRIDGE</td>
        </tr>

        <tr>
          <td>Raing as of 1st Jan 2022</td>
          <td></td>
          <td>Current Year Stakes Money</td>
          <td>S$9,056.25</td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>RM0.00</td>
        </tr>

        <tr>
          <td>Starts-1-2-3</td>
          <td>9-0-0-1</td>
          <td>Total Stakes Money</td>
          <td>S$9,056.25</td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>RM0.00</td>
        </tr>
      </table>
    </div>
    <div id="HorseInfo"></div>
  </div>
</template>

<script>
import firebaseApp from "../../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  name: "IndividualHorseStats",
  props: {
    raceNum: Number,
  },
  async mounted() {
    this.changeRaceAnalysis(1);
  },
  methods: {
    async changeRaceAnalysis(raceNum) {
      let z = await getDocs(collection(db, "Horse" + raceNum + "_Info"));
      var container = document.getElementById("HorseInfo");
      if (container != null) {
        container.innerHTML = "";
        z.forEach((docs) => {
          let yy = docs.data(); // Row data
          container.innerHTML = "Description:" + yy.Description;
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
#HorseMugShot {
  width: 250px;
  margin: auto;
  padding-left: 5%;
  margin-left: 30px;
}
.HorseName {
  margin-left: 20px;
}
.Individual_Details {
  text-align: left;
  width: 80%;
  margin-left: 15%;
  padding: 15px;
}
#HorseStats {
  width: 95%;
  background: #fff;
  margin: auto;
  margin-top: 20px;
  display: grid;
  /* grid-auto-columns: 100px; */
  grid-template-columns: 20vh 8fr;
}
table {
  font-family: "Times New Roman", Times, serif;
  font-size: 15px;
  font-weight: 4000;
  border-collapse: collapse;
  width: 100%;
  margin-top: 40px;
}

td,
th {
  text-align: left;
  padding: 0px 20px;
}
</style>
