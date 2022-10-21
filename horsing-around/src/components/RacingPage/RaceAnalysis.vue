<template>
  <div>
    <div class="MainHeader">
      <img class="vthing" src="../../assets/images/v-thing.png" />
      <h5 class="RaceAnalysis">Race Analysis {{raceNum}}</h5>
    </div>
    <div id="RaceAnalysisText">
    </div>
  </div>
</template>

<script>

export default {
  name: "RaceAnalysis",
  props:{
    raceNum: Number
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
