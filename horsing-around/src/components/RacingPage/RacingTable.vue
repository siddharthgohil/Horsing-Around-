<!-- Just welcome to CPP -->

<template>
  <div>
    <div class="MainHeader">
      <img class="vthing" src="../../assets/images/v-thing.png" />
      <h5 class="RaceTable">Race Table</h5>
    </div>

    <table id="table" class="auto-index">
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
      </tr>
    </table>
    <br /><br />
  </div>
</template>

<script>
//import ChartsGraph from "@/components/Charts.vue"
import firebaseApp from "../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "RacingTable",
  mounted() {
    async function display() {
      let z = await getDocs(collection(db, "Races"));
      var ind = 0;

      z.forEach((docs) => {
        let yy = docs.data();
        var table = document.getElementById("table");
        var row = table.insertRow(ind);

        var colour = yy.Colour;
        var horseName = yy.HorseName;
        var bar = yy.Bar;
        var lastSix = yy.LastSix;
        var gear = yy.Gear;
        var rating = yy.Rating;
        var weight = yy.Weight;
        var jockey = yy.Jockey;
        var trainer = yy.Trainer;
        var owner = yy.Owner;

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
      });
    }
    display();
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
  margin-left: 1%;
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 94%;
  padding: 30px;
  margin: 40px;
}

tr:nth-child(even) {
  background-color: #e3edee;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  background-color: whitesmoke;
}
.bwt {
  color: rgb(243, 236, 236);
  background-color: rgb(255, 94, 0);
}
</style>
