<!-- Just welcome to CPP -->

<template>
  <div>
    <div class="MainHeader">
      <img class="vthing" src="../../assets/images/v-thing.png" />
      <h5 class="RaceTable">Race Table for Race {{ raceNum }}</h5>
    </div>

    <table id="raceTable" class="auto-index">
      <tr>
        <th>Colour</th>
        <th># - Horse Name - Desc</th>
        <th>Bar</th>
        <th>Last 6 Runs</th>
        <th>Gear</th>
        <th>Rtg (+/-)</th>
        <th>Raceday Horse Wt (+/-)</th>
        <th>Jockey - C Wt (Hcp Wt)</th>
        <th>Trainer</th>
        <th>Owner</th>
        <th></th>
      </tr>
    </table>
    <br /><br />
  </div>
</template>

<script>
import firebaseApp from "../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, getDoc, setDoc, doc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "RacingTable",
  mounted() {
    this.display(1);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
  data() {
    return {
      user: false,
      raceNum: 1,
    };
  },
  methods: {
    async display(raceNum) {
      this.raceNum = raceNum;
      let z = await getDocs(collection(db, "Races" + raceNum));
      var ind = 1;
      var table = document.getElementById("raceTable");
      if (table) {
        while (table.rows.length > 1) {
          table.deleteRow(1);
        }

        z.forEach((docs) => {
          let yy = docs.data();
          var docId = docs.id;
          var row = table.insertRow(ind);

          var colour = yy["Colour"];
          var horseName = yy["# - Horse Name - Desc"];
          var bar = yy["Bar"];
          var lastSix = yy["Last 6 Runs"];
          var gear = yy["Gear"];
          var rating = yy["Rtg (+/-)"];
          var weight = yy["Raceday Horse Wt (+/-)"];
          var jockey = yy["Jockey - C Wt (Hcp Wt)"];
          var trainer = yy["Trainer"];
          var owner = yy["Owner"];

          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          var cell7 = row.insertCell(6);
          var cell8 = row.insertCell(7);
          var cell9 = row.insertCell(8);
          var cell10 = row.insertCell(9);
          var cell11 = row.insertCell(10);

          cell1.innerHTML = colour;
          cell2.innerHTML = horseName;
          cell3.innerHTML = bar;
          cell4.innerHTML = lastSix;
          cell5.innerHTML = gear;
          cell6.innerHTML = rating;
          cell7.innerHTML = weight;
          cell8.innerHTML = jockey;
          cell9.innerHTML = trainer;
          cell10.innerHTML = owner;

          var bu = document.createElement("button");
          bu.className = "bwt";
          bu.innerHTML = "Save";
          var saveHorseFunc = this.saveHorse;
          var docIDcurr = docId;
          bu.onclick = function () {
            saveHorseFunc(docIDcurr);
          };
          cell11.appendChild(bu);
          ind += 1;
        });
      }
    },
    async saveHorse(i) {
      if (this.user) {
        var rowIndex = String(i);
        const docRef = doc(db, "Races" + this.raceNum, rowIndex);
        const docSnap = await getDoc(docRef);
        var horseData = docSnap.data();
        alert("You are going to save " + horseData["# - Horse Name - Desc"]);
        await setDoc(
          doc(db, String(this.user.uid), horseData["# - Horse Name - Desc"]),
          horseData
        );
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
  margin-left: 2%;
  margin-top: 0.7%;
}
.RaceTable {
  float: left;
  margin-top: 1%;
  font-weight: 1000;
  margin-left: 30px;
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 95%;
  padding: 30px;
  margin: 40px;
  background-color: #fff;
  color: black;
  border: 1px solid #dddddd;
  margin-left: 30px;
}
th,
td {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  background-color: #fff;
  color: #954ab8;
}
.button {
  background: #6a2889;
  border-radius: 50px;
  width: 100px;
  border: none;
  color: #fff;
}
</style>
