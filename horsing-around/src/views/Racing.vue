<template>
<!-- <RacingPage/> -->
<!-- AddCoin page will emit added  -->
<!-- that will trigger change which will refresh the page  -->
<!-- <JockeyPage :key="refreshComp"/>
<HorsesPage  @added="change"/> -->

<div class="AllRaces">
  <SideBar/> <!--Should be stored in The RacingCard page-->
  
  <div class="content">
    This should be the raceCard
  </div>

</div>
<!-- <RaceCard/> -->
<RaceAnalysis/>


</template>


<script>

// Dependency should be RacingPage - RaceCard
import SideBar from '@/components/RacingPage/SideBarComponent/Side-Bar.vue'
import RaceAnalysis from '@/components/RaceAnalysis.vue'
import RaceCard from '@/components/RaceCard.vue'


export default {
  name: 'App',
  components:{
    SideBar
    RaceCard,
    RaceAnalysis
  },
  data(){
    return {
      refreshComp:0
    }
  },
  methods:{
    change(){
      this.refreshComp += 1
    }
  }

}
</script>

<style scoped>
  .AllRaces {
    display: grid;
    grid-template-columns: 1fr 8fr;
    background-color: #6A2889;
    height: 100vh;
    width: 100vw;
  }

  .content {
    background-color: #F1ECEC;
    border-radius: 20px;

  }

</style>
