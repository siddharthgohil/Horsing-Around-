<template>
    <div class="HorseBG" v-if="user">
        <div class="page">
            <SideBarHorse/> 
            <!-- this is the issue above. need to only return the corr page, can hard code the event w Comparison string @changeTab="display()"-->
            <div class="content">
            <div class="upper_portion">
                <!-- Racing Positions Graph-->
                <RacingPositionsGraph class="graph"/>

                <!-- Best performers-->
                <BestPerformers/>
            </div>

                <!-- For Horse Comparison Comp-->
            <HorsesComparisonComp />


            </div>
        </div>
    </div>
    <div class="HorseBG" v-else>
        <h3>This page is only for logged in members</h3>
    </div>
  </template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HorsesComparisonComp from "@/components/HorsePage/HorsesComparisonComp.vue"
import SideBarHorse from "@/components/HorsePage/SideBarHorseComponent/Side-Bar-Horse.vue"
import RacingPositionsGraph from "@/components/RacingPositionsGraph.vue"
import BestPerformers from "@/components/HorsePage/BestPerformers.vue"

export default {
    name: "HorseComparison",
    components: {
        HorsesComparisonComp,
        SideBarHorse,
        RacingPositionsGraph,
        BestPerformers,
    },
    data() {
        return {
            user: false,
            currTab: "Comparison",
        };
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        });
    },
    methods: {
        display(){
            console.log("loaded horse comp page");
        }
    }
}
</script>

<style scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 8fr;
  background-color: #6a2889;
  height: 100%;
  width: 150;
}
.HorseBG {
  height: max-content;
}

.content {
  background-color: #f1ecec;
  border-radius: 20px;
}

.upper_portion {
    flex-direction: row;
    display: flex;
}

.graph {
    width: 70%;
}
</style>