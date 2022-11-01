<template>
  <div>
    <div class="MainHeader">
      <img class="vthing" src="../assets/images/v-thing.png" />
      <h5 class="BookmarkedTableHeader">Bookmarked Horses</h5>
    </div>

    <table id="bookmarkedTable" class="auto-index">
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
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "BookmarkedTable",
  props: {
    raceNum: Number,
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        this.display();
      }
    });
  },
  data() {
    return {
      user: false,
    };
  },
  methods: {
    async display() {
      let z = await getDocs(collection(db, this.user.uid));
      var ind = 1;
      var table = document.getElementById("bookmarkedTable");
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
        bu.innerHTML = "Delete";
        var deleteHorseFunc = this.deleteHorse;
        var docIDcurr = docId;
        bu.onclick = function () {
          deleteHorseFunc(docIDcurr);
        };
        cell11.appendChild(bu);
        ind += 1;
      });
    },
    async deleteHorse(i) {
      if (this.user) {
        var rowIndex = String(i);
        await deleteDoc(doc(db, String(this.user.uid), rowIndex));
        console.log("Document Sucessfully deleted!", rowIndex);
        this.display();
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
  margin-top: 0.7%;
}
.BookmarkedTableHeader {
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
  margin: 30px;
  background-color: #a267bd;
  color: #fff;
}
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  background-color: #fff;
  color: black;
}
</style>
