<template>
    <div class='raceTitlePlaceholder'>
        <img class='vthing' src="../../assets/images/v-thing.png" >
        <h5 class='RaceCard'>Race Card</h5>
        <!-- /Users/lundypang/Desktop/Y4S1/BT3103/Actual Slides/Horsing-Around-/horsing-around/src/assets/images/v-thing.png
        /Users/lundypang/Desktop/Y4S1/BT3103/Actual Slides/Horsing-Around-/horsing-around/src/components/RacingPage/RaceTitlePlaceHolder.vue -->
    </div>
</template>

<script>
export default {
    name: 'RaceTitlePlaceHolder'
}
</script>

<style scoped>
.raceTitlePlaceholder {
    width: 95%;
    background-color: #fff;
    height: 3%;
    margin-top: 1.5% !important;
    margin: auto;
}
.vthing {
    height: 50%;
    float: left;
    margin-left: 2%;
    margin-top: 0.7%;
}
.RaceCard {
    float:left;
    margin-top:1%;
    font-weight: 1000;
    margin-left: 1%;
}
</style>