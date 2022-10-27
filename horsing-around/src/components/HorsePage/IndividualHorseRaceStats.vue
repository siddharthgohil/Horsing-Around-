<template>
  <div id="HorseStats">
    <table id="Horse_Actual_Stats">
        <tr class="Header_Row">
          <th class="first_col">Distance</th>
          <th>Start</th>
          <th>1st</th>
          <th>2nd</th>
          <th>3rd</th>
          <th>4th</th>
          <th>Win</th>
          <th>First 2%</th>
          <th>Placed%</th>
          <th>First 4%</th>
          <th>Unplaced</th>
       
        </tr>

        <tr>
          <td class="first_col">1000M (PolyTrack)</td>
          <td>3</td> 
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>3</td>
        </tr>

       <tr>
          <td class="first_col">1100M (PolyTrack)</td>
          <td>1</td> 
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>

        <tr>
          <td class="first_col">1200M (PolyTrack)</td>
          <td>1</td> 
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td class="first_col">1200M (Turf Track LC)</td>
          <td>1</td> 
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>

        <tr>
          <td class="first_col">1400M (Turf Track SC)</td>
          <td>1</td> 
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>

        <tr>
          <td class="first_col">1600M (Turf Track LC)</td>
          <td>1</td> 
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>

        <tr>
          <td class="first_col">1600M (Turf Track SC)</td>
          <td>1</td> 
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>
      </table>

       <table id="Trainer_Actual_Stats">
        <tr class="Header_Row">
          <th class="first_col">Trainer</th>
          <th>Trainer</th>
          <th>1st</th>
          <th>2nd</th>
          <th>3rd</th>
          <th>4th</th>
          <th>Win</th>
          <th>First 2%</th>
          <th>Placed%</th>
          <th>First 4%</th>
          <th>Unplaced</th>
        </tr>

        <tr>
          <td class="first_col">S BURRIDGE</td>
          <td>9</td> 
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>11.1</td>
          <td>0</td>
          <td>8</td>
        </tr>
       </table>
  </div>
</template>

<script>
export default {
    name: 'IndividualHorseRaceStats'
}
</script>

<style scoped>
#Horse_Actual_Stats, #Trainer_Actual_Stats  {
  width: 100%;
}

#Trainer_Actual_Stats {
  margin-top: 20px;
}

.Header_Row {
  color: #6A2889;
  border-bottom: 3px solid #6A2889;
}
#HorseStats {
    width: 95%;
    background: #fff;
    min-height: 300px;
    margin: auto;
    margin-top: 20px;
    
}
.first_col {
  text-align: left;
  padding-left: 10px;
}
tr {
  border-bottom: 1px solid #6A2869;
}
</style>