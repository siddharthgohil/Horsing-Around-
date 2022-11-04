<template>
  <div class="HoseComparisonSegment">
    <!--Start of a card-->
    <div class="card">
      <select
        id="first_horse_name"
        name="horse_name"
        class="input_box"
        v-model="key"
        @change="clicked_first($event)"
      >
        <optgroup>
          <option class="horse_name second_col">Horsie the Borsie</option>
          <option class="horse_name second_col">Jack o Lantern</option>
          <option class="horse_name second_col">Mac Donalds Book</option>
        </optgroup>
      </select>

      <img class="HorseMugShot" src="../../assets/images/Horse_image.png" />
      <h5 class="HorseName">ABLEST ASCEND</h5>
      <p class="HorseDesc">8yo B$ AUS G SH</p>

      <div class="Desc">
        <label class="Desc_title">Starts-1-2-3:</label>
        <h6 class="value">18-4-1-1</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Current Year Stakes Money:</label>
        <h6 class="value yellow">S$1,080.00</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Total Stakes Money:</label>
        <h6 class="value green">S$143,977.50</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Current Rating:</label>
        <h6 class="value red">63</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Current as of 1st Jan:</label>
        <h6 class="value">70</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Date Foaled:</label>
        <h6 class="value">11/09/2017</h6>
      </div>

      <div class="Desc last">
        <label class="Desc_title">Last Raced:</label>
        <h6 class="value">21/08/2022</h6>
      </div>
    </div>
    <!--End of a card-->
    <!--Start of a card-->
    <div class="card">
      <select
        id="first_horse_name"
        name="horse_name"
        class="input_box"
        v-model="key"
        @change="clicked_first($event)"
      >
        <optgroup>
          <option class="horse_name second_col">Horsie the Borsie</option>
          <option class="horse_name second_col">Jack o Lantern</option>
          <option class="horse_name second_col">Mac Donalds Book</option>
        </optgroup>
      </select>

      <img class="HorseMugShot" src="../../assets/images/Horse_image.png" />
      <h5 class="HorseName">ABLEST ASCEND</h5>
      <p class="HorseDesc">8yo B$ AUS G SH</p>

      <div class="Desc">
        <label class="Desc_title">Starts-1-2-3:</label>
        <h6 class="value">18-4-1-1</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Current Year Stakes Money:</label>
        <h6 class="value yellow">S$1,080.00</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Total Stakes Money:</label>
        <h6 class="value green">S$143,977.50</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Current Rating:</label>
        <h6 class="value red">63</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Current as of 1st Jan:</label>
        <h6 class="value">70</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Date Foaled:</label>
        <h6 class="value">11/09/2017</h6>
      </div>

      <div class="Desc last">
        <label class="Desc_title">Last Raced:</label>
        <h6 class="value">21/08/2022</h6>
      </div>
    </div>
    <!--End of a card-->
    <!--Start of a card-->
    <div class="card">
      <select
        id="first_horse_name"
        name="horse_name"
        class="input_box"
        v-model="key"
        @change="clicked_first($event)"
      >
        <optgroup>
          <option class="horse_name second_col">Horsie the Borsie</option>
          <option class="horse_name second_col">Jack o Lantern</option>
          <option class="horse_name second_col">Mac Donalds Book</option>
        </optgroup>
      </select>

      <img class="HorseMugShot" src="../../assets/images/Horse_image.png" />
      <h5 class="HorseName">ABLEST ASCEND</h5>
      <p class="HorseDesc">8yo B$ AUS G SH</p>

      <div class="Desc">
        <label class="Desc_title">Starts-1-2-3:</label>
        <h6 class="value">18-4-1-1</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Current Year Stakes Money:</label>
        <h6 class="value yellow">S$1,080.00</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Total Stakes Money:</label>
        <h6 class="value green">S$143,977.50</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Current Rating:</label>
        <h6 class="value red">63</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Current as of 1st Jan:</label>
        <h6 class="value">70</h6>
      </div>

      <div class="Desc">
        <label class="Desc_title">Date Foaled:</label>
        <h6 class="value">11/09/2017</h6>
      </div>

      <div class="Desc last">
        <label class="Desc_title">Last Raced:</label>
        <h6 class="value">21/08/2022</h6>
      </div>
    </div>
    <!--End of a card-->
  </div>
</template>

<script>
export default {
  name: "HorseComparisonDiv",
  data() {
    return {
      key: false,
    };
  },
};
</script>

<style scoped>
.HoseComparisonSegment {
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
}
.card {
  width: 92%;
  display: inline;
  float: left;
  margin: auto;
  box-shadow: none;
  background: #fff;
  border-radius: 0px;
}
.input_box {
  width: 80%;
}
.HorseMugShot {
  width: 60%;
  margin-top: 30px;
  margin-bottom: 20px;
}
.HorseName {
  margin-top: 20px;
  color: #6a2889;
  font-weight: 10000;
}
.HorseDesc {
  margin-top: -10px !important;
}

.Desc {
  width: 100%;
  border-bottom: 1px solid grey;
  margin-top: 15px;
}
.Desc_title {
  font-weight: 1000;
}
.red {
  color: red;
}
.green {
  color: green;
}
.yellow {
  color: #ffbf00;
}
.last {
  border-bottom: 0px;
  margin-bottom: 30px;
}
</style>
