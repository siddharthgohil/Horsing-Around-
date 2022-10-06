<template>
<RacingPage/>
<JockeyPage @added="change"/>
<HorsesPage :key="refreshComp"/>


</template>


<script>
import RacingPage from '@/components/RacingPage.vue'
import JockeyPage from '@/components/JockeyPage.vue'
import HorsesPage from '@/components/HorsesPage.vue'

export default {
  name: 'App',
  components:{
    RacingPage,
    JockeyPage,
    HorsesPage
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
