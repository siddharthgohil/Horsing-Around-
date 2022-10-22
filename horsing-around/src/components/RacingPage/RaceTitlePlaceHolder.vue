<template>
    <div class='raceTitlePlaceholder'>
        <img class='vthing' src="../../assets/images/v-thing.png" >
        <h5 class='RaceCard'>Race Card</h5>
        <!-- /Users/lundypang/Desktop/Y4S1/BT3103/Actual Slides/Horsing-Around-/horsing-around/src/assets/images/v-thing.png
        /Users/lundypang/Desktop/Y4S1/BT3103/Actual Slides/Horsing-Around-/horsing-around/src/components/RacingPage/RaceTitlePlaceHolder.vue -->
        <div class="datepicker">
            <Datepicker :value="date" @update:modelValue="handleDate" ></Datepicker>
        </div>
    </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';

export default {
    name: 'RaceTitlePlaceHolder',
    setup() {
        const date = ref();

        // Make sure to check modelData type here https://vue3datepicker.com/api/props/#modelvalue
        const handleDate = (modelData) => {
          
          date.value = modelData;
          alert(date.value)
          // do something else with the data
        }
        
        
        return {
          date, // Used to access the date froom firebase
          handleDate,
        }
    },
    components: {
        Datepicker
    }

}
</script>

<style scoped>
.raceTitlePlaceholder {
    width: 95%;
    background-color: #fff;
    height: 50px;
    margin-top: 1.5% !important;
    margin: auto;
}
.vthing {
    height: 30px;
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

.datepicker {
    margin-right: 2%;
    width: 20%;
    position: relative;
    float:right;
    margin-top: 0.2%;
}
</style>