<template>
      <div class="MainHeader">
        <img class="vthing" src="../../../assets/images/v-thing.png" />
        <h5 class="RaceTable">Race Details</h5>
    </div>
</template>

<script>
export default {
 name: "VthingBottom"
}
</script>

<style scoped>

.RaceTable {
    float: left;
  margin-top: 1%;
  font-weight: 1000;
  margin-left: 1%;
}
 .MainHeader {
  width: 95%;
  background-color: #fff;
  height: 50px;
  margin-left: 30px;
  margin-top:30px;
  display: flex;
}
.vthing {
  height: 30px;
  float: left;
  margin-left: 2%;
  margin-top: 0.7%;
}
</style>