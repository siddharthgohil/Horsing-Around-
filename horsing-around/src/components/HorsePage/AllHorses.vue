<template>
  <div class="allHorse">
    <table id="All_Horses">
      <tr class="Header_Row">
        <th class="first_col">Colour</th>
        <th>#</th>
        <th>Horse Name</th>
        <th>Desc</th>
        <th>Bar</th>
        <th>Runs</th>
        <th>Gear</th>
        <th>Rtg (+/-)</th>
        <th>Horse WT (+/-)</th>
        <th>Jockey</th>
        <th>C.WT</th>
        <th>Trainer</th>
        <th>Owner</th>
        <th></th>
      </tr>

      <tr>
        <td class="first_col">
          <img class="jersey_img" src="../../assets/images/Jersey/Jersey.png" />
        </td>
        <td>1</td>
        <td class="Name">BASILISK</td>
        <td>8yo B NZ G SH</td>
        <td>[7]</td>
        <td>37*299</td>
        <td></td>
        <td>48 (-2)</td>
        <td>503 (+3)</td>
        <td>N ZYRUL</td>
        <td>57.0 (59.0)</td>
        <td>L KHOO</td>
        <td>TAN LE EN</td>
        <td><button class="comparison">Compare</button></td>
      </tr>

      <tr>
        <td class="first_col">
          <img class="jersey_img" src="../../assets/images/Jersey/Jersey.png" />
        </td>
        <td>1</td>
        <td class="Name">BASILISK</td>
        <td>8yo B NZ G SH</td>
        <td>[7]</td>
        <td>37*299</td>
        <td></td>
        <td>48 (-2)</td>
        <td>503 (+3)</td>
        <td>N ZYRUL</td>
        <td>57.0 (59.0)</td>
        <td>L KHOO</td>
        <td>TAN LE EN</td>
        <td><button class="comparison">Compare</button></td>
      </tr>

      <tr>
        <td class="first_col">
          <img class="jersey_img" src="../../assets/images/Jersey/Jersey.png" />
        </td>
        <td>1</td>
        <td class="Name">BASILISK</td>
        <td>8yo B NZ G SH</td>
        <td>[7]</td>
        <td>37*299</td>
        <td></td>
        <td>48 (-2)</td>
        <td>503 (+3)</td>
        <td>N ZYRUL</td>
        <td>57.0 (59.0)</td>
        <td>L KHOO</td>
        <td>TAN LE EN</td>
        <td><button class="comparison">Compare</button></td>
      </tr>

      <tr>
        <td class="first_col">
          <img class="jersey_img" src="../../assets/images/Jersey/Jersey.png" />
        </td>
        <td>1</td>
        <td class="Name">BASILISK</td>
        <td>8yo B NZ G SH</td>
        <td>[7]</td>
        <td>37*299</td>
        <td></td>
        <td>48 (-2)</td>
        <td>503 (+3)</td>
        <td>N ZYRUL</td>
        <td>57.0 (59.0)</td>
        <td>L KHOO</td>
        <td>TAN LE EN</td>
        <td><button class="comparison">Compare</button></td>
      </tr>

      <tr>
        <td class="first_col">
          <img class="jersey_img" src="../../assets/images/Jersey/Jersey.png" />
        </td>
        <td>1</td>
        <td class="Name">BASILISK</td>
        <td>8yo B NZ G SH</td>
        <td>[7]</td>
        <td>37*299</td>
        <td></td>
        <td>48 (-2)</td>
        <td>503 (+3)</td>
        <td>N ZYRUL</td>
        <td>57.0 (59.0)</td>
        <td>L KHOO</td>
        <td>TAN LE EN</td>
        <td><button class="comparison">Compare</button></td>
      </tr>

      <tr>
        <td class="first_col">
          <img class="jersey_img" src="../../assets/images/Jersey/Jersey.png" />
        </td>
        <td>1</td>
        <td class="Name">BASILISK</td>
        <td>8yo B NZ G SH</td>
        <td>[7]</td>
        <td>37*299</td>
        <td></td>
        <td>48 (-2)</td>
        <td>503 (+3)</td>
        <td>N ZYRUL</td>
        <td>57.0 (59.0)</td>
        <td>L KHOO</td>
        <td>TAN LE EN</td>
        <td><button class="comparison">Compare</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AllHorses",
};
</script>

<style>
.allHorse {
  width: 95%;
  margin: auto;
  min-height: 900px;
  margin-top: 50px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 2%;
}
.Header_Row {
  color: #6a2889;
  border-bottom: 3px solid #6a2889;
  padding-top: 10px;
}
#All_Horses {
  width: 100%;
}
.jersey_img {
  width: 50px;
}
.comparison {
  background: #6a2889;
  border-radius: 50px;
  width: 100px;
  border: none;
  color: #fff;
}
</style>
