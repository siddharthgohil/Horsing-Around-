<template>
  <div>
    <div class="MainHeader">
      <!-- Add image -->
      <h2 class="HeaderTag">Race Analysis</h2>
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
          container.innerHTML += '<h4 class="pick">' + yy.Title + "</h4>";
          container.innerHTML +=
            '<h5 class="pickAnalysis">' + yy.Text + "</h5>";
        });
      }
    }
    display();
  },
};
</script>

<style>
.MainHeader {
  margin: 40px;
  padding: 30px;
  background-color: whitesmoke;
}
.HeaderTag {
  text-align: left;
}

#RaceAnalysisText {
  margin: 40px;
  padding: 30px;
  background-color: whitesmoke;
}
.pick {
  padding-top: 10px;
  text-align: left;
  font-weight: bold;
}
.pickAnalysis {
  text-align: left;
}
</style>
>
