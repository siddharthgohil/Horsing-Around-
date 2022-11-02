<template>
  <div id="HorseStats">
    <table id="horseTrainer" class="auto-index">
      <tr class="Header_Row">
        <th class="first_col">Trainer</th>
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
  name: "IndividualHorseTrainer",
  props: {
    raceNum: Number,
  },
  mounted() {
    this.display(1);
  },
  methods: {
    async display(raceNum) {
      let z = await getDocs(collection(db, "Horse" + raceNum + "_Trainer"));
      // console.log(z);
      var table = document.getElementById("horseTrainer");
      if (table) {
        var ind = 1;

        z.forEach((docs) => {
          let yy = docs.data();
          var row = table.insertRow(ind);
          var trainer = yy["Trainer"];
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

          cell1.innerHTML = trainer;
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
      }
    },
  },
};
</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  color: black;
  border: 1px solid #dddddd;
}

#HorseStats {
  width: 95%;
  background: #fff;
  margin: auto;
  margin-top: 20px;
}
th,
td {
  text-align: center;
  padding: 8px;
  background-color: #fff;
  color: #954ab8;
}
.first_col,
td.first_col {
  text-align: left !important;
}

.Header_Row {
  color: #6a2889;
  border-bottom: 3px solid #6a2889;
}
</style>
