<template>
  <div>
    <div class="MainHeader">
      <img class="vthing" src="../../assets/images/v-thing.png" />
      <h5 class="RaceAnalysis">Race Analysis</h5>
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
  created() {
    async function display() {
      let z = await getDocs(collection(db, "RachingAnalysisText"));
      var container = document.getElementById("RaceAnalysisText");
      if (container != null) {
        z.forEach((docs) => {
          let yy = docs.data(); // Row data
          container.innerHTML += '<h5 class="pick">' + yy.Title + "</h5>";
          container.innerHTML +=
            '<p class="pickAnalysis">' + yy.Text + "</p><br/>";
        });
      }
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
.RaceAnalysis {
  float: left;
  margin-top: 1%;
  font-weight: 1000;
  margin-left: 1%;
}
#RaceAnalysisText {
  margin: 30px;
  padding: 20px;
  width: 100%;
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
