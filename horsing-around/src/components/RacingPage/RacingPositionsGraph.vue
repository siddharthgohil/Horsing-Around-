<template>
  <line-chart
    id="history_positions"
    width="95%"
    height="500px"
    :data="recent_data"
    xtitle="Race Number"
    ytitle="Position"
    title="Recent Form of Horses"
    legend="right"
    loading="Loading..."
  ></line-chart>
</template>

<script>
//import firebaseApp from "@/firebase.js";
//import { getFirestore } from "firebase/firestore";
//import { collection, getDocs } from "firebase/firestore";

//const db = getFirestore(firebaseApp);
//let indivHorses = db.ref('previousPositions');

export default {
  name: "RacingPositionsGraph",
  // firebase: {
  //     indivHorsesArr: indivHorses
  // },

  data() {
    return {
      recent_data: [
        { name: "horse1", data: { R1: 2, R2: 1, R3: 2, R4: 4, R5: 6, R6: 1 } },
        { name: "horse2", data: { R1: 4, R2: 4, R3: 1, R4: 5, R5: 2, R6: 2 } },
        { name: "horse3", data: { R1: 3, R2: 5, R3: 4, R4: 4, R5: 2, R6: 3 } },
        { name: "horse4", data: { R1: 4, R2: 6, R3: 3, R4: 2, R5: 1, R6: 4 } },
        { name: "horse5", data: { R1: 1, R2: 3, R3: 2, R4: 5, R5: 1, R6: 5 } },
        { name: "horse6", data: { R1: 5, R2: 9, R3: 1, R4: 6, R5: 2, R6: 6 } },
      ],
    };
  },

  //     alert('data');
  //     return {
  //         names: []
  //     }
  // },
  // computed: {
  //     recent_data: function () {
  //         let newArr = this.names
  //         for (let item of this.indivHorses) {
  //             newArr.push(item.name);
  //         }
  //         alert('computed');
  //         return newArr
  //     }
  // },
  // async function retrieveHorseData() {
  //     let z = await getDocs(collection(db, "PreviousPositions"));
  //     let horsedata = [];

  //     z.forEach((docs) => {
  //         let indivHorses = docs.data(); // Row data
  //         let name_horse = indivHorses.name;
  //         let horse_prev_1 = indivHorses.prevPos1;
  //         let horse_prev_2 = indivHorses.prevPos2;
  //         let horse_prev_3 = indivHorses.prevPos3;
  //         let indivHorseData = {name: name_horse, data: {"R1": horse_prev_1, "R2": horse_prev_2, "R3": horse_prev_3}};
  //         horsedata.push(indivHorseData);

  //     });

  //     return horsedata;
  // }
  // let horse_data_retrieved = retrieveHorseData();
  // console.log(horse_data_retrieved);

  // return { recent_data: horse_data_retrieved }

  //}
  // this looks very messy on a graph, need to select a few only.
  // need to invert the graph so that 1st place finishes are higher in graph
  // :library="{
  // options: {
  //     scales: {
  //         yAxes: [{
  //             ticks: {
  //                 beginAtZero: true,
  //                 reverse: true,
  //                 start: 0
  //             }
  //         }]
  //     }
  // }}"
};
</script>

<style scoped>
#history_positions {
  margin: 40px;
  padding: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: whitesmoke;
}
</style>
