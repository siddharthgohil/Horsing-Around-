<template>
<WelcomeCPP/>
<AddCoin @added="change"/>
<ProfitDisplay :key="refreshComp"/>


</template>


<script>
import WelcomeCPP from '@/components/WellcomeCpp.vue'
import AddCoin from '@/components/AddCoin.vue'
import ProfitDisplay from '@/components/ProfitDisplay.vue'

export default {
  name: 'App',
  components:{
    WelcomeCPP,
    AddCoin,
    ProfitDisplay
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
