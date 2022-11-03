<template>
    <div>
    <div class="MainHeader">
      <img class="vthing" src="../../assets/images/v-thing.png" />
      <h5 class="HorseTable">All Horses</h5>
    </div>

    <table id="horseTable" class="auto-index">
      <tr class="Header_Row">
        <th class="first_col">Bar</th>
        <th>Ea</th>
        <th>Gear</th>
        <th>Gear Change</th>
        <th>Horse Name</th>
        <th>Last 6 Runs</th>
        <th>Owner</th>
        <th>Rating</th>
        <th>Trainer</th>
        <th>Wt</th>
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
  name: "AllHorses",
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
      let z = await getDocs(collection(db, "HorseDB"));
      var ind = 1;
      var table = document.getElementById("horseTable");
      if (table) {
        while (table.rows.length > 1) {
          table.deleteRow(1);
        }

        z.forEach((docs) => {
          let yy = docs.data();
          var docId = docs.id;
          var row = table.insertRow(ind);

          var bar = yy["Bar"];
          var ea = yy["Ea"];
          var gear = yy["Gear"];
          var gearChange = yy["Gear Change"];
          var horse = yy["Horse Name"];
          var lastSix = yy["Last 6 Runs"];
          var owner = yy["Owner"];
          var rating = yy["Rating"];
          var trainer = yy["Trainer"];
          var wt = yy["Wt"];

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

          cell1.innerHTML = bar;
          cell2.innerHTML = ea;
          cell3.innerHTML = gear;
          cell4.innerHTML = gearChange;
          cell5.innerHTML = horse;
          cell6.innerHTML = lastSix;
          cell7.innerHTML = owner;
          cell8.innerHTML = rating;
          cell9.innerHTML = trainer;
          cell10.innerHTML = wt;

          // not configured yet
          var bu = document.createElement("button");
          bu.className = "bwt";
          bu.innerHTML = "Compare";
          var compareHorseFunc = this.compareHorse;
          var docIDcurr = docId;
          bu.onclick = function () {
            compareHorseFunc(docIDcurr);
          };
          cell11.appendChild(bu);
          ind += 1;
        });
      }
    },
    async compareHorse(i) {
      if (this.user) {
        var rowIndex = String(i);
        const docRef = doc(db, "Races" + this.raceNum, rowIndex);
        const docSnap = await getDoc(docRef);
        var horseData = docSnap.data();
        alert("You are going to compare " + horseData["# - Horse Name - Desc"]);
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
  background: #fff;
  min-height: 50px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.vthing {
  height: 30px;
  float: left;
  margin-left: 2%;
  margin-top: 0.7%;
}
.HorseTable {
  float: left;
  margin-top: 1%;
  font-weight: 1000;
  margin-left: 30px;
}
.Header_Row {
  color: #6a2889;
  border-bottom: 3px solid #6a2889;
  padding-top: 10px;
}
.first_col {
  text-align: left;
  padding-left: 10px;
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 94%;
  padding: 30px;
  margin: 40px;
  background-color: #fff;
  color: black;
}
th,
td {
  text-align: center;
  padding: 8px;
  background-color: #fff;
  color: #6a2889;
}
.first_col,
td.first_col {
  text-align: left !important;
}
/*
.allHorse {
  width: 95%;
  margin: auto;
  min-height: 900px;
  margin-top: 50px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 2%;
}
.Header_Row {
  color: #6a2889;
  border-bottom: 3px solid #6a2889;
  padding-top: 10px;
}
#All_Horses {
  width: 100%;
}
.jersey_img {
  width: 50px;
}
.comparison {
  background: #6a2889;
  border-radius: 50px;
  width: 100px;
  border: none;
  color: #fff;
}
*/
</style>
