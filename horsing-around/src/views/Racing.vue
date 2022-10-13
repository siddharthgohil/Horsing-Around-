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

</template>


<script>
// Dependency should be RacingPage - RaceCard
// import RaceCard from '@/components/RacingPage/RaceCard.vue'
import SideBar from '@/components/RacingPage/SideBarComponent/Side-Bar.vue'


export default {
  name: 'App',
  components:{
    // RacingPage,
    // JockeyPage,
    // HorsesPage,
    //RaceCard,
    SideBar
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
