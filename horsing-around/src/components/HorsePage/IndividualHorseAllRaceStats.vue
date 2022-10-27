<template>

  <div>
    <div class="HorseStats">
    </div>

    <table id="raceDetails" class="auto-index">
      <tr>
        <th>Race / Trial Date</th>
        <th>C</th>
        <th>Cl</th>
        <th>Pl</th>
        <th>Rtg</th>
        <th>Dist</th>
        <th>T</th>
        <th>G</th>
        <th>Bar</th>
        <th>C.Wt</th>
        <th>H.Wt</th>
        <th>Running Position</th>
        <th>LBW</th>
        <th>Finish Time</th>
        <th>Winning / Second Horse</th>
        <th>Gear</th>
        <th>Jockey</th>
        <th>Trainer</th>
      </tr>
    </table>
    <br /><br />
  </div>
</template>

<script>
import firebaseApp from "../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "IndividualHorseAllRaceStats",
  props: {
    raceNum: Number,
  },
  mounted() {
    this.display(1);
  },
  methods: {
    async display(raceNum) {
      let z = await getDocs(collection(db, "Horse"+raceNum));
      console.log(z);
      var ind = 1;

      z.forEach((docs) => {
        let yy = docs.data();
        var table = document.getElementById("raceDetails");
        var row = table.insertRow(ind);

        var raceDate = yy["Race / Trial Date"];
        var c = yy["C"];
        var cl = yy["Cl"];
        var pl = yy["Pl"];
        var rating = yy["Rtg"];
        var distance = yy["Dist"];
        var t = yy["T"];
        var g = yy["G"];
        var bar = yy["Bar"];
        var cwt = yy["C Wt"];
        var hwt = yy["H Wt"];
        var position = yy["Running Position"];
        var lbw = yy["LBW"];
        var finishTime = yy["Finish Time"];
        var winSecond = yy["Winning / Second Horse"];
        var gear = yy["Gear"];
        var jockey = yy["Jockey"];
        var trainer = yy["Trainer"];

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
        var cell12 = row.insertCell(11);
        var cell13 = row.insertCell(12);
        var cell14 = row.insertCell(13);
        var cell15 = row.insertCell(14);
        var cell16 = row.insertCell(15);
        var cell17 = row.insertCell(16);
        var cell18 = row.insertCell(17);

        cell1.innerHTML = raceDate;
        cell2.innerHTML = c;
        cell3.innerHTML = cl;
        cell4.innerHTML = pl;
        cell5.innerHTML = rating;
        cell6.innerHTML = distance;
        cell7.innerHTML = t;
        cell8.innerHTML = g;
        cell9.innerHTML = bar;
        cell10.innerHTML = cwt;
        cell11.innerHTML = hwt;
        cell12.innerHTML = position;
        cell13.innerHTML = lbw;
        cell14.innerHTML = finishTime;
        cell15.innerHTML = winSecond;
        cell16.innerHTML = gear;
        cell17.innerHTML = jockey;
        cell18.innerHTML = trainer;
        ind+=1
      });
    },
  },
};
</script>

<style scoped>
#HorseStats {
    width: 95%;
    background: #fff;
    min-height: 320px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
}
table {
  width: 100%;
}
.first_col {
  text-align: left;
  padding-left: 10px;
}
.vthing {
  height: 30px;
  float: left;
  margin-left: 2%;
  margin-top: 0.7%;
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 94%;
  padding: 30px;
  margin: 40px;
  background-color: #fff;
  color: black;
  border: 1px solid #dddddd;
}
th,td{
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  background-color: #fff;
  color: #954ab8;
}

</style>