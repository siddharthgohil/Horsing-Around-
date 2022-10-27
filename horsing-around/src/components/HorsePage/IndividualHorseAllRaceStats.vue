<template>
  <div id="HorseStats">
    <table id="Horse_Race_Actual_Stats">
        <tr class="Header_Row">
          <th class="first_col">Date / Trial Date</th>
          <th>C</th>
          <th>CL</th>
          <th>PL</th>
          <th>RTG</th>
          <th>DIST</th>
          <th>T</th>
          <th>G</th>
          <th>Bar</th>
          <th>C.Wt</th>
          <th>H.Wt</th>
          <th>Running Position</th>
          <th>LBW</th>
          <th>Finish Time</th>
          <th>Winning / Second Horse</th>
          <th>Gear</th>
          <th>Jockey</th>
          <th>Trainer</th>
          <th>Stipendiary Stewards' Extracts</th>
       
        </tr>

        <tr>
          <td class="first_col">10/09/2022</td>
          <td>S</td> 
          <td>4</td>
          <td>9/10</td>
          <td>49</td>
          <td>1000</td>
          <td>P</td>
          <td>G</td>
          <td>3</td>
          <td>50.0</td>
          <td>505</td>
          <td>9-8-9</td>
          <td>5.7</td>
          <td>0:59.82</td>
          <td>DANCING LIGHT</td>
          <td> </td>
          <td>I AMIRUL</td>
          <td>S BURRIDGE</td>
          <td> </td>
        </tr>

        <tr>
          <td class="first_col">28/08/2022</td>
          <td>S</td> 
          <td>4</td>
          <td>6/10</td>
          <td>51</td>
          <td>1600</td>
          <td>T</td>
          <td>G</td>
          <td>9</td>
          <td>51.5</td>
          <td>503</td>
          <td>10-9-6</td>
          <td>3.8</td>
          <td>1:37.82</td>
          <td>ISTATABA</td>
          <td>B</td>
          <td>R STEWART</td>
          <td>S BURRIDGE</td>
          <td> </td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    name: 'IndividualHorseAllRaceStats'
}
</script>

<style scoped>
#HorseStats {
    width: 95%;
    background: #fff;
    min-height: 320px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
}
table {
  width: 100%;
}
.first_col {
  text-align: left;
  padding-left: 10px;
}

.Header_Row {
  color:#6A2889;
  border-bottom: 3px solid #6A2889;
}
tr {
  border-bottom: 1px solid #6A2889;
}

</style>