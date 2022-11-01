<template>
    <div class="left_side">
        <div class="card top_one">
        <h6>All Time:<br> Best Performing Horse</h6>
        Horse Name
        </div>
        <div class="card"><h6>This Year:<br> Best Performing Horse</h6>Horse Name</div>
        <div class="card"><h6>Best 6:<br> Best Performing Horse</h6>Horse Name</div> 
    </div>
  
</template>

<script>
export default {
    name: "BestPerformers"
}
</script>

<style>
.div {
    flex-direction: column;
    display: flex-inline;
    justify-content: space-evenly;
}
.top_one {
    margin-top: 0px !important;
}

.card {
    background: #fff;
    box-shadow: none;
    border: none;
    border-radius: 0px;
    margin: 8px 0px;
    width: 100%;
    height: 30%;
}

h6 {
    text-align: left;
    color: #6a2889;
    margin-bottom: 20px;
}

.left_side {
    margin-top: 3%;
    width: 20%;
}

</style>