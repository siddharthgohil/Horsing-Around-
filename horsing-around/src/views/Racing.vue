<template>
<!-- <RacingPage/> -->
<!-- AddCoin page will emit added  -->
<!-- that will trigger change which will refresh the page  -->
<!-- <JockeyPage :key="refreshComp"/>
<HorsesPage  @added="change"/> -->
<RaceCard/>


</template>


<script>
// import RacingPage from '@/components/RacingPage.vue'
// import JockeyPage from '@/components/JockeyPage.vue'
// import HorsesPage from '@/components/HorsesPage.vue'
import RaceCard from '@/components/RaceCard.vue'

export default {
  name: 'App',
  components:{
    // RacingPage,
    // JockeyPage,
    // HorsesPage,
    RaceCard
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
#app{
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#bg{
  display: "blocl";
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
</style>
