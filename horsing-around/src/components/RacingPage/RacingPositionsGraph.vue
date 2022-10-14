<template>
  <line-chart class = "history_positions" width="800px" height="500px" :data="horsedata" 
  xtitle="Race Number" ytitle="Position" ></line-chart>


</template>

<script>
//import VueChartKick from "vue-chartkick";
//new VueChartKick.LineChart("chart-1", {"2021-01-01": 11, "2021-01-02": 6})
//  <div id="chart-1" style="height: 300px;"></div>

// import { library } from 'webpack';

export default {
    name:"RacingPositionsGraph",
    data(){
        return{
            horsedata: [
                {name: 'horse1', data: {"R1": 2, "R2": 1, "R3": 2, "R4": 4, "R5": 6, "R6": 1}},
                {name: 'horse2', data: {"R1": 4, "R2": 4, "R3": 1, "R4": 5, "R5": 2, "R6": 2}},
                {name: 'horse3', data: {"R1": 3, "R2": 5, "R3": 4, "R4": 4, "R5": "", "R6": 3}},
                {name: 'horse4', data: {"R1": 4, "R2": 6, "R3": 3, "R4": 2, "R5": 1, "R6": 4}},
                {name: 'horse5', data: {"R1": 1, "R2": 3, "R3": 2, "R4": 5, "R5": 1, "R6": 5}},
                {name: 'horse6', data: {"R1": 5, "R2": 9, "R3": 1, "R4": 6, "R5": 2, "R6": 6}},
            ]
        }
    },
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
}


</script>

<style>

.history_positions{
    margin: 40px;
    padding: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: whitesmoke;
}

</style>