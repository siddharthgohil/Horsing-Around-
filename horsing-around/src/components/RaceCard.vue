<template>
   <div>
      <button @click="updateMe()">Click to update the Axios Chart</button>
      <area-chart class = 'user' width =500px :data = "chartdata" ></area-chart>
   </div> 
</template>

<script>

import axios from 'axios'

export default{
   name: 'RaceCard',
   data(){
      return{
         chartdata : null
      }
   },

   methods:{
      async updateMe(){
         let recieved = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=USD&days=10&interval=hourly' )
         console.log(recieved.data.prices)
         this.chartdata = recieved.data.prices
      }
   },
}

</script>