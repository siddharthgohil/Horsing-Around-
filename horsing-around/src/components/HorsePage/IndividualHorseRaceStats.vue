<template>
  <div id="HorseStats">
    <table id="horseStats" class="auto-index">
      <tr class="Header_Row">
        <th class="first_col">Distance (Track)</th>
        <th>Start</th>
        <th>1st</th>
        <th>2nd</th>
        <th>3rd</th>
        <th>4th</th>
        <th>Win</th>
        <th>First 2%</th>
        <th>Placed %</th>
        <th>First 4%</th>
        <th>Unplaced</th>
      </tr>
    </table>
  </div>
</template>

<script>
import firebaseApp from "../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  name: "IndividualHorseRaceStats",

  props: {
    raceNum: Number,
  },
  mounted() {
    this.display(1);
  },
  methods: {
    async display(raceNum) {
      let z = await getDocs(collection(db, "Horse" + raceNum + "_Stats"));
      console.log(z);
      var ind = 1;

      z.forEach((docs) => {
        let yy = docs.data();
        var table = document.getElementById("horseStats");
        var row = table.insertRow(ind);
        row.style.borderBottom = "1px solid #6A2889";

        var distance = yy["Distance (Track)"];
        var start = yy["Start"];
        var first = yy["1st"];
        var second = yy["2nd"];
        var third = yy["3rd"];
        var fourth = yy["4th"];
        var win = yy["Win"];
        var first2 = yy["First 2%"];
        var placed = yy["Placed%"];
        var first4 = yy["First 4%"];
        var unplaced = yy["Unplaced"];

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

        cell1.innerHTML = distance;
        cell1.style.textAlign = "left";
        cell2.innerHTML = start;
        cell3.innerHTML = first;
        cell4.innerHTML = second;
        cell5.innerHTML = third;
        cell6.innerHTML = fourth;
        cell7.innerHTML = win;
        cell8.innerHTML = first2;
        cell9.innerHTML = placed;
        cell10.innerHTML = first4;
        cell11.innerHTML = unplaced;
        ind += 1;
      });
    },
  },
};
</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  padding: 30px;
  background-color: #fff;
  color: black;
}
.first_col,
td.first_col {
  text-align: left !important;
}

.Header_Row {
  color: #6a2889;
  border-bottom: 3px solid #6a2889;
}
tr {
  border-bottom: 1px solid #6a2889;
}
th,
td {
  text-align: center;
  padding: 8px;
  background-color: #fff;
  color: #954ab8;
}

#HorseStats {
  width: 95%;
  background: #fff;
  margin: auto;
  margin-top: 20px;
  padding-bottom: 10px;
}
</style>
